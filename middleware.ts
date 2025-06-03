import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const { pathname } = req.nextUrl

    const isApiRoute = pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')

    if (isApiRoute) {
        if (!isLoggedIn) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        return NextResponse.next()
    }

    if (isLoggedIn && !pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin))
    }

    if (!isLoggedIn && pathname !== "/auth/login") {
        const loginUrl = new URL("/auth/login", req.nextUrl.origin)
        loginUrl.searchParams.set('callbackUrl', pathname + req.nextUrl.search)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
    ],
}
