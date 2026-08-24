"use client";
import Link from "next/link";
import { User, FileText, Settings, Briefcase, Send, GripHorizontal, Moon, Sun } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
    { id: "about", icon: User, label: "About" },
    { id: "resume", icon: FileText, label: "Resume" },
    { id: "services", icon: Settings, label: "Services" },
    { id: "portfolio", icon: Briefcase, label: "Portfolio" },
    { id: "contact", icon: Send, label: "Contact" },
];

export default function RightSidebarNav() {
    const [activeItem, setActiveItem] = useState("about");

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
            <div className="flex flex-col gap-2 p-2 bg-[#131313] border border-border rounded-full shadow-xl">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;
                    return (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActiveItem(item.id)}
                            className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all group ${isActive
                                ? "bg-primary text-zinc-950"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            <Icon className="w-5 h-5" />

                            {/* Tooltip */}
                            <span className="absolute right-14 bg-zinc-800 text-white text-xs font-semibold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>

            <div className="flex flex-col gap-2 p-2 bg-[#131313] border border-border rounded-full shadow-xl mt-4">
                <button className="flex items-center justify-center w-12 h-12 rounded-full text-zinc-400 hover:text-white transition-all">
                    <GripHorizontal className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-full text-zinc-400 hover:text-white transition-all">
                    <Moon className="w-5 h-5" />
                </button>
            </div>
        </nav>
    );
}
