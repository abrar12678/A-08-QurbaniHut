"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { label: "All Animals", href: "/all-animals" },
];

const Navbar = () => {
    const pathname = usePathname();

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
                                className={`text-sm font-medium transition ${
                                    isActive
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

                <div className="hidden items-center gap-3 md:flex">
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
                </div>
            </div>
        </header>
    );
};

export default Navbar;