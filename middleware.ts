import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Allow the admin login page explicitly to avoid redirect loops
    if (req.nextUrl.pathname === "/admin/login" || req.nextUrl.pathname === "/admin/signup") {
      return NextResponse.next()
    }

    // Allow public auth routes for users
    if (req.nextUrl.pathname.startsWith("/auth/")) {
      return NextResponse.next()
    }

    // Check if user is trying to access admin routes (excluding login)
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // Check if user has admin role
      if (req.nextauth.token?.role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", req.url))
      }
    }

    // Protect user dashboard: redirect unauthenticated users to /auth/login
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      if (!req.nextauth.token) {
        return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodeURIComponent(req.url)}`, req.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to login page without authentication
        if (req.nextUrl.pathname === "/admin/login" || req.nextUrl.pathname === "/admin/signup") {
          return true
        }

        // Allow public auth routes
        if (req.nextUrl.pathname.startsWith("/auth/")) {
          return true
        }
        
        // For admin routes, require authentication
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token
        } 

        // For user dashboard, require authentication
        if (req.nextUrl.pathname.startsWith("/dashboard")) {
          return !!token
        }
        
        // Allow all other routes
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    "/admin/:path*",
  ]
}
