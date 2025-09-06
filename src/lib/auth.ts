import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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

        // Simple admin check - in production use proper database auth
        if (credentials.email === 'admin@bzz.ma' && credentials.password === 'BzzAdmin2024!') {
          return {
            id: '1',
            email: 'admin@bzz.ma',
            name: 'Admin',
            role: 'ADMIN',
            company: 'Bzz',
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.company = user.company
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.company = token.company as string
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
  }
}
