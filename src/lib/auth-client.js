import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /**
     * Use the same domain by default, or override in production with env.
     * This avoids failed fetch calls when running in preview/development.
     */
    baseURL: process.env.NEXT_PUBLIC_AUTH_BASE_URL || ""
})