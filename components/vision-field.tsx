'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import landPoints from './land-points.json';

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const GLOBE_RADIUS = 1.75;

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

// Real coastlines, sampled from Natural Earth's public-domain land geometry (110m resolution).
function buildLandPoints() {
  return (landPoints as [number, number][]).map(([lat, lon]) => latLonToVector3(lat, lon, GLOBE_RADIUS));
}

const ARC_COUNT = 7;
const ARC_SEGMENTS = 40;
const ARC_COLORS = [0x2459ff, 0xff6b4a, 0x8f6bff];

function makeArcPoints(a: THREE.Vector3, b: THREE.Vector3) {
  const distance = a.distanceTo(b);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.setLength(GLOBE_RADIUS + 0.3 + distance * 0.5);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return curve.getPoints(ARC_SEGMENTS - 1);
}

type ArcState = {
  line: THREE.Line;
  geometry: THREE.BufferGeometry;
  positions: Float32Array;
  material: THREE.LineBasicMaterial;
  phase: 'idle' | 'grow' | 'hold' | 'fade';
  progress: number;
  timer: number;
};

export function VisionField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 5, 13);
    camera.position.set(0, 0, 8.5);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'block w-full h-full';
    mount.appendChild(renderer.domElement);

    const glowTexture = makeGlowTexture();
    const system = new THREE.Group();
    scene.add(system);

    // A soft, near-opaque sphere well under the dot layer — gives the globe volume and hides the far hemisphere.
    const occluder = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS * 0.9, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0xe3eaf9, depthWrite: true }),
    );
    system.add(occluder);

    // A faint lat/long grid so the shape reads clearly as a globe even where there are no dots.
    const gridSegments: number[] = [];
    const gridRadius = GLOBE_RADIUS * 0.96;
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lon = -180; lon < 180; lon += 4) {
        const a = latLonToVector3(lat, lon, gridRadius);
        const b = latLonToVector3(lat, lon + 4, gridRadius);
        gridSegments.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    for (let lon = -180; lon < 180; lon += 30) {
      for (let lat = -90; lat < 90; lat += 4) {
        const a = latLonToVector3(lat, lon, gridRadius);
        const b = latLonToVector3(lat + 4, lon, gridRadius);
        gridSegments.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridSegments, 3));
    const gridMaterial = new THREE.LineBasicMaterial({ color: 0x8fa5d6, transparent: true, opacity: 0.25, depthWrite: false });
    const grid = new THREE.LineSegments(gridGeometry, gridMaterial);
    system.add(grid);

    // A faint outer rim for an atmosphere-like glow at the edge.
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS * 1.03, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0x2459ff, transparent: true, opacity: 0.07, depthWrite: false }),
    );
    system.add(atmosphere);

    // Land — one point per populated coordinate, sharing a single draw call.
    const landPoints = buildLandPoints();
    const landPositions = new Float32Array(landPoints.length * 3);
    landPoints.forEach((point, index) => {
      landPositions[index * 3] = point.x;
      landPositions[index * 3 + 1] = point.y;
      landPositions[index * 3 + 2] = point.z;
    });
    const landGeometry = new THREE.BufferGeometry();
    landGeometry.setAttribute('position', new THREE.BufferAttribute(landPositions, 3));
    const landMaterial = new THREE.PointsMaterial({
      map: glowTexture, color: 0x2459ff, size: 0.055, transparent: true, opacity: 1,
      sizeAttenuation: true, depthWrite: true, alphaTest: 0.1,
    });
    const land = new THREE.Points(landGeometry, landMaterial);
    system.add(land);

    // Arcs — ideas travelling between random points on land, lighting up and fading in turn.
    const arcGroup = new THREE.Group();
    const arcs: ArcState[] = Array.from({ length: ARC_COUNT }).map((_, index) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(ARC_SEGMENTS * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setDrawRange(0, 0);
      const material = new THREE.LineBasicMaterial({ color: ARC_COLORS[index % ARC_COLORS.length], transparent: true, opacity: 0, depthWrite: false });
      const line = new THREE.Line(geometry, material);
      arcGroup.add(line);
      return { line, geometry, positions, material, phase: 'idle', progress: 0, timer: Math.random() * 1.5 };
    });
    system.add(arcGroup);

    const startArc = (arc: ArcState) => {
      if (landPoints.length < 2) return;
      const a = landPoints[Math.floor(Math.random() * landPoints.length)];
      let b = landPoints[Math.floor(Math.random() * landPoints.length)];
      let guard = 0;
      while (b === a && guard < 6) { b = landPoints[Math.floor(Math.random() * landPoints.length)]; guard += 1; }
      const points = makeArcPoints(a, b);
      points.forEach((point, index) => {
        arc.positions[index * 3] = point.x;
        arc.positions[index * 3 + 1] = point.y;
        arc.positions[index * 3 + 2] = point.z;
      });
      arc.geometry.attributes.position.needsUpdate = true;
      arc.geometry.setDrawRange(0, 0);
      arc.progress = 0;
      arc.phase = 'grow';
    };

    const IDLE_SPIN = 0.0016;
    const rotation = { yaw: 0, pitch: -0.08 };
    const velocity = { yaw: IDLE_SPIN, pitch: 0 };
    let dragging = false;
    let lastPointer = { x: 0, y: 0 };
    let frame = 0;
    let active = true;
    let clock = 0;

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      lastPointer = { x: event.clientX, y: event.clientY };
      velocity.yaw = 0;
      velocity.pitch = 0;
      mount.setPointerCapture(event.pointerId);
      mount.style.cursor = 'grabbing';
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastPointer.x;
      const dy = event.clientY - lastPointer.y;
      lastPointer = { x: event.clientX, y: event.clientY };
      const speed = 0.0055;
      rotation.yaw += dx * speed;
      rotation.pitch = Math.max(-1.1, Math.min(1.1, rotation.pitch + dy * speed));
      velocity.yaw = dx * speed;
      velocity.pitch = dy * speed;
    };
    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      mount.style.cursor = 'grab';
      try { mount.releasePointerCapture(event.pointerId); } catch { /* pointer already released */ }
    };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting && document.visibilityState === 'visible'; });
    observer.observe(mount);
    const onVisibilityChange = () => { active = document.visibilityState === 'visible'; };

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      if (!active) return;
      clock += 0.01;

      if (!dragging) {
        velocity.yaw *= 0.95;
        velocity.pitch *= 0.95;
        velocity.yaw += (IDLE_SPIN - velocity.yaw) * 0.015;
        rotation.yaw += velocity.yaw;
        rotation.pitch = Math.max(-1.1, Math.min(1.1, rotation.pitch + velocity.pitch));
      }
      system.rotation.y = rotation.yaw;
      system.rotation.x = rotation.pitch;

      arcs.forEach((arc) => {
        if (arc.phase === 'idle') {
          arc.timer -= 0.01;
          if (arc.timer <= 0) startArc(arc);
          return;
        }
        if (arc.phase === 'grow') {
          arc.progress += 0.028;
          const count = Math.min(ARC_SEGMENTS, Math.max(2, Math.floor(arc.progress * ARC_SEGMENTS)));
          arc.geometry.setDrawRange(0, count);
          arc.material.opacity = 0.85;
          if (arc.progress >= 1) { arc.phase = 'hold'; arc.progress = 0; }
          return;
        }
        if (arc.phase === 'hold') {
          arc.progress += 0.02;
          if (arc.progress >= 1) { arc.phase = 'fade'; arc.progress = 0; }
          return;
        }
        arc.progress += 0.03;
        arc.material.opacity = 0.85 * (1 - arc.progress);
        if (arc.progress >= 1) {
          arc.phase = 'idle';
          arc.timer = 0.5 + Math.random() * 1.6;
          arc.geometry.setDrawRange(0, 0);
        }
      });

      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    mount.addEventListener('pointerdown', onPointerDown);
    mount.addEventListener('pointermove', onPointerMove);
    mount.addEventListener('pointerup', onPointerUp);
    mount.addEventListener('pointercancel', onPointerUp);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointerdown', onPointerDown);
      mount.removeEventListener('pointermove', onPointerMove);
      mount.removeEventListener('pointerup', onPointerUp);
      mount.removeEventListener('pointercancel', onPointerUp);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      occluder.geometry.dispose();
      (occluder.material as THREE.Material).dispose();
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      landGeometry.dispose();
      landMaterial.dispose();
      arcs.forEach((arc) => {
        arc.geometry.dispose();
        arc.material.dispose();
      });
      glowTexture.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="absolute inset-0 z-[1] cursor-grab touch-none select-none" ref={mountRef} aria-hidden="true" />;
}
