"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
    const session = authClient.useSession();
    const user = session.data?.user;

    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    };

    // Profile link will only show if user is logged in
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "All Animals", href: "/all-animals" },
    ];

    if (user) {
        navLinks.push({ label: "Profile", href: "/profile" });
    }

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-sm"
                        style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                    >
                        🐄
                    </div>
                    <div>
                        <p className="text-lg font-bold tracking-[0.18em] text-gray-900">
                            Qurbani<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Hut</span>
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">Livestock booking</p>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-900"
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="block mx-auto mt-1 h-0.5 w-5 rounded-full" style={{ background: "linear-gradient(90deg, #8B5CF6, #EC4899)" }} />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Auth Section */}
                <div className="hidden items-center gap-3 lg:flex">
                    {!user ? (
                        <>
                            <Link
                                href="/signin"
                                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-95"
                                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">
                            {/* Circular Profile Avatar */}
                            <Link href="/profile" className="group relative">
                                <div className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-gray-200 transition-all duration-200 group-hover:ring-[#8B5CF6] overflow-hidden bg-gray-100">
                                    <Avatar className="h-10 w-10">
                                        <Avatar.Image
                                            alt={user?.name || "User"}
                                            src={user?.image}
                                            referrerPolicy="no-referrer"
                                            className="h-10 w-10 object-cover"
                                        />
                                        <Avatar.Fallback className="bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white text-sm font-bold">
                                            {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                        </Avatar.Fallback>
                                    </Avatar>
                                </div>
                            </Link>

                            {/* User Name */}
                            <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
                                {user?.name}
                            </span>

                            {/* Logout Button */}
                            <button
                                onClick={handleSignOut}
                                className="rounded-full border border-red-200 bg-white px-5 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 hover:border-red-300 hover:shadow-sm"
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 lg:hidden"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {menuOpen ? (
                            <>
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </>
                        ) : (
                            <>
                                <path d="M4 7h16" />
                                <path d="M4 12h16" />
                                <path d="M4 17h16" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
                    <div className="container mx-auto flex flex-col gap-2 px-6 py-4 lg:px-10">
                        {/* Mobile Nav Links */}
                        <div className="flex flex-col gap-1">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? "bg-gray-50 text-gray-900"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Auth Buttons */}
                        <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-gray-100">
                            {!user ? (
                                <>
                                    <Link
                                        href="/signin"
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-center text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-xl px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:brightness-95"
                                        style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/profile"
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all duration-200 hover:bg-gray-50"
                                    >
                                        <Avatar className="h-8 w-8">
                                            <Avatar.Image
                                                alt={user?.name || "User"}
                                                src={user?.image}
                                                referrerPolicy="no-referrer"
                                            />
                                            <Avatar.Fallback className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs font-semibold">
                                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                            </Avatar.Fallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                                            <p className="text-xs text-gray-500">{user?.email}</p>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleSignOut();
                                            setMenuOpen(false);
                                        }}
                                        className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
