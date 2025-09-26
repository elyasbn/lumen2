"use client"

import { useAuth } from "@/hooks/use-session"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Public admin routes that should not be protected
  const isPublicAdminRoute = pathname === "/admin/login" || pathname === "/admin/signup"

  useEffect(() => {
    if (!isPublicAdminRoute && !isLoading && (!isAuthenticated || !isAdmin)) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, isAdmin, isLoading, isPublicAdminRoute, router])

  if (!isPublicAdminRoute && isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  if (!isPublicAdminRoute && (!isAuthenticated || !isAdmin)) {
    return null
  }

  return <>{children}</>
}
