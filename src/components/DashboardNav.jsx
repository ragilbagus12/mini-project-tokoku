"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {href: "/dashboard", label: "Ringkasan"},
    {href: "/dashboard/laporan", label: "Laporan"},
];

export default function DashboardNav() {
    const pathname = usePathname();

    return (
        <aside className="w-full shrink-0 lg:w-56">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Menu Admin
                </p>
                <nav className="flex gap-1 lg:flex-col">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                    isActive
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}