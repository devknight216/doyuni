'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function VisionField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const field = new THREE.Group();
    scene.add(field);
    const count = 88;
    const positions = new Float32Array(count * 3);
    const points: THREE.Vector3[] = [];

    for (let index = 0; index < count; index += 1) {
      const angle = index * 2.399963;
      const radius = 0.7 + (index % 13) * 0.19;
      const point = new THREE.Vector3(
        Math.cos(angle) * radius * 1.15,
        Math.sin(angle * 1.18) * radius * 0.7,
        ((index * 17) % 29) / 8 - 1.8,
      );
      points.push(point);
      positions[index * 3] = point.x;
      positions[index * 3 + 1] = point.y;
      positions[index * 3 + 2] = point.z;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointMaterial = new THREE.PointsMaterial({ color: 0x2459ff, size: 0.075, transparent: true, opacity: 0.8, sizeAttenuation: true });
    field.add(new THREE.Points(pointGeometry, pointMaterial));

    const connections: number[] = [];
    for (let first = 0; first < points.length; first += 1) {
      for (let second = first + 1; second < points.length; second += 1) {
        if (points[first].distanceTo(points[second]) < 1.25 && connections.length < 420) {
          connections.push(points[first].x, points[first].y, points[first].z, points[second].x, points[second].y, points[second].z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7d9cff, transparent: true, opacity: 0.16 });
    field.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.36, 1), new THREE.MeshBasicMaterial({ color: 0xff6b4a, wireframe: true, transparent: true, opacity: 0.92 }));
    field.add(core);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.012, 8, 64), new THREE.MeshBasicMaterial({ color: 0x2459ff, transparent: true, opacity: 0.6 }));
    ring.rotation.x = Math.PI / 2.4;
    field.add(ring);

    const pointer = { x: 0, y: 0 };
    let frame = 0;
    let active = true;
    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
    };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting && document.visibilityState === 'visible'; });
    observer.observe(mount);
    const onVisibilityChange = () => { active = document.visibilityState === 'visible'; };
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      if (!active) return;
      field.rotation.y += 0.0018;
      field.rotation.x += (pointer.y * 0.08 - field.rotation.x) * 0.018;
      field.position.x += (pointer.x * 0.18 - field.position.x) * 0.025;
      core.rotation.x += 0.006;
      core.rotation.y -= 0.008;
      ring.rotation.z += 0.004;
      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    mount.addEventListener('pointermove', onPointerMove);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="vision-field" ref={mountRef} aria-hidden="true" />;
}
