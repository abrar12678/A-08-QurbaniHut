"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            alert(error?.message || "Google sign-in failed");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-sm"
                            style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                        >
                            🐄
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                            Qurbani<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Hut</span>
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
                    <p className="mt-2 text-gray-500">Sign in to your account to continue</p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
                    <form onSubmit={onSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full rounded-xl border-gray-200 bg-gray-50 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full rounded-xl border-gray-200 bg-gray-50 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-95"
                            style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400 uppercase tracking-wider">or continue with</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm"
                    >
                        <Image src="/b0d069c372e04f59a989111eac6154c7_background_removed.png" alt="Google" height={20} width={20} />
                        Sign in with Google
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
