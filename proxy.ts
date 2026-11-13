import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REALM = 'Doyuni idea log';

export function proxy(request: NextRequest) {
  const username = process.env.SITE_USERNAME;
  const password = process.env.SITE_PASSWORD;

  if (!username || !password) {
    return new NextResponse('Site is locked: set SITE_USERNAME and SITE_PASSWORD.', { status: 500 });
  }

  const header = request.headers.get('authorization');
  if (header?.startsWith('Basic ')) {
    const decoded = Buffer.from(header.slice(6), 'base64').toString('utf-8');
    const separator = decoded.indexOf(':');
    const user = decoded.slice(0, separator);
    const pass = decoded.slice(separator + 1);
    if (user === username && pass === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` },
  });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.svg).*)',
};
