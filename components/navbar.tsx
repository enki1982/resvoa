"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/como-funciona", label: "Cómo funciona" },
    { href: "/para-usuarios", label: "Para usuarios" },
    { href: "/para-proveedores", label: "Para proveedores" },
    { href: "/seguridad", label: "Seguridad" },
    { href: "/categorias", label: "Categorías" },
    { href: "/reputacion", label: "Reputación" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Resvoa" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-primary">Resvoa</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/app/login">Acceder</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/app/registro-usuario">Empezar</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/app/login">Acceder</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/app/registro-usuario">Empezar</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
