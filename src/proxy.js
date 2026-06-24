import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function proxy(request) {
  try {
    const pathname = request.nextUrl.pathname;

    // Skip all admin routes
    if (pathname.startsWith('/dashboard/admin')) {
      return NextResponse.next();
    }

    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/prompts/:id'],
};
