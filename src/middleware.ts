import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of paths to block
const BLOCKED_PATHS = [
  '/login',
  '/admin',
  '/wp-login',
  '/wp-admin',
  '/administrator',
  '/phpmyadmin',
]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.toLowerCase()
  
  // Check if the path is in the blocked list
  if (BLOCKED_PATHS.some(blockedPath => path.startsWith(blockedPath))) {
    // Return 404 immediately
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths that start with these patterns
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 