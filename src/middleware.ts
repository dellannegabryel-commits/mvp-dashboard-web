import { auth } from '@/lib/auth'
import { NextResponse, type NextRequest } from 'next/server'

const publicPaths = ['/login', '/api/auth']

const authMiddleware = auth((req) => {
  const { pathname } = req.nextUrl

  if (publicPaths.some((p) => pathname.startsWith(p))) {
    if (req.auth && pathname === '/login') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  }

  if (!req.auth) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

function bypassMiddleware(_req: NextRequest) {
  return NextResponse.next()
}

export default process.env.NEXT_PUBLIC_BYPASS_AUTH === 'true' ? bypassMiddleware : authMiddleware

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|mockServiceWorker\\.js|public/).*)'],
}
