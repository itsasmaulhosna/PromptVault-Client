import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function proxy(request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Proxy Error:', error);

    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = { matcher: ['/dashboard/:path*', '/prompts/:id'] };
