'use server'

import { signIn } from '@/auth';

import prisma from '@/lib/prisma';

export async function loginWithEmail(email: string) {
    try {
        const defaultUser = await prisma.defaultUser.findUnique({
            where: { email: email },
        });

        if (!defaultUser) {
            console.error("Login failed: Default user not found with email:", email);
            return { error: "Default user not found. Please try an OAuth provider." };
        }

        await signIn("credentials", {
            id: defaultUser.id,
            email: defaultUser.email,
            name: defaultUser.name,
            redirectTo: "/dashboard",
        });

        return { success: true };

    } catch (error: unknown) {
        if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
            throw error;
        }

        console.error("Error during loginWithEmail:", error);
        if (error instanceof Error) {
            return { error: `Sign-in process failed: ${error.message}. Please try again or use another method.` };
        }
        return { error: "An unexpected server error occurred. Please try again." };
    }
} 