"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import { useState } from "react";

const navLinks = [
  { href: "/register", name: "Register" },
  { href: "/login", name: "Login" },
  { href: "/forgot-password", name: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <div>
      <div>
        <input
          className="text-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <nav className="flex gap-6">
        {navLinks.map((link) => {
          const isActive =
            link.href === pathname ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
