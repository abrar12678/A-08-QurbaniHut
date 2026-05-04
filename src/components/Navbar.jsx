"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const C = {
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)",
    purple: "#8B5CF6",
    pink: "#EC4899",
    yellow: "#F59E0B",
    cream: "#F5EDD8",
    dark: "#08150d",
    surface: "rgba(255,255,255,0.08)",
};

const navLinks = [
    { label: "Home", href: "/" },
    { label: "All-Animals", href: "/all-animals" },
    { label: "Profile", href: "/profile" },
];

const Navbar = () => {
    const session = authClient.useSession();
    const user = session.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-3">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-3xl text-xl"
                        style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                    >
                        🐄
                    </div>
                    <div>
                        <p className="text-lg font-semibold tracking-[0.18em] text-gray-900">
                            Qurbani<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Hut</span>
                        </p>
                        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Livestock booking</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition ${isActive
                                    ? "text-gray-900 underline decoration-[#8B5CF6] underline-offset-8"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    {!user ? (
                        <>
                            <Link
                                href="/signin"
                                className="rounded-full border border-gray-300 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                                style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Avatar size="sm">
                                <Avatar.Image
                                    alt={user?.name || "User"}
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                            </Avatar>
                            <button
                                onClick={handleSignOut}
                                className="rounded-full border border-red-300 bg-red-50 px-5 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] lg:hidden"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

            {menuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white shadow-sm">
                    <div className="container mx-auto flex flex-col gap-4 px-6 py-4 lg:px-10">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-sm font-medium transition ${isActive
                                            ? "text-gray-900 underline decoration-[#8B5CF6] underline-offset-8"
                                            : "text-gray-600 hover:text-gray-900"
                                            }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
                            {!user && (
                                <>
                                    <Link
                                        href="/signin"
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-full border border-gray-300 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                                        style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}

                            {user && (
                                <div className="flex gap-3">
                                    <Avatar size="sm">
                                        <Avatar.Image
                                            alt="John Doe"
                                            src={user?.image}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                                    </Avatar>

                                    <Button classname="btn btn-soft btn-error" onClick={handleSignOut} size="sm" variant="danger">Sign Out</Button>
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