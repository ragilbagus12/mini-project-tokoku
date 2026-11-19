"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {href: "/", label: "Beranda"},
    {href: "/products", label: "Produk"},
    {href: "/about", label: "Tentang"},
    {href: "/dashboard", label: "Dashboard"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
                <Link href="/" className="text-lg font-extrabold tracking-tight text-indigo-600">
                    TokoKita
                </Link>
                <ul className="flex flex-wrap items-center gap-1">
                    {links.map((link) => {
                        const isActive = 
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);
                        
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}