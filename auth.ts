import NextAuth from "next-auth"

import type { NextAuthConfig, User } from "next-auth"

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const config = {
    providers: [
        GitHub,
        Google,
        Credentials({
            async authorize(credentials): Promise<User | null> {
                const userId = credentials.id;
                const email = credentials.email;
                const name = credentials.name;
                if (typeof userId === 'string' && userId.length > 0 && typeof email === 'string') {
                    const user: User = {
                        id: userId,
                        email: email,
                        name: typeof name === 'string' ? name : null,
                    };
                    return user;
                }
                console.log("Credentials authorize: Missing or invalid credentials. Expected non-empty string id and string email.", credentials);
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        error: "/auth/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(config)