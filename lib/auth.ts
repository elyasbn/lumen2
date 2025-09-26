import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        let user = await (prisma as any).user.findUnique({ where: { email: credentials.email } })
        // If no user exists and credentials match demo defaults, create demo admin
        if (!user) {
          const demoEmail = process.env.ADMIN_EMAIL || "admin@dancestudio.com"
          const demoPassword = process.env.ADMIN_PASSWORD || "admin123"
          if (credentials.email === demoEmail && credentials.password === demoPassword) {
            const hashed = await bcrypt.hash(demoPassword, 10)
            user = await (prisma as any).user.create({
              data: { name: "Admin User", email: demoEmail, password: hashed, role: "admin" },
            })
          }
        }
        if (!user) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
          role: user.role,
        } as any
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any)?.role || (token as any)?.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = (token as any)?.role as string
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login"
  },
  secret: process.env.NEXTAUTH_SECRET
}
