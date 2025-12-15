"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Inicio", href: "/" },
    {
      label: "Cómo funciona",
      href: "/como-funciona",
      dropdown: [
        { label: "Para usuarios", href: "/para-usuarios" },
        { label: "Para proveedores", href: "/para-proveedores" },
      ]
    },
    { label: "Categorías", href: "/categorias" },
    {
      label: "Nosotros",
      href: "#",
      dropdown: [
        { label: "Seguridad", href: "/seguridad" },
        { label: "Reputación", href: "/reputacion" },
        { label: "Contacto", href: "/contacto" },
      ]
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Resvoa" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-primary">Resvoa</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="px-3 py-2 text-sm font-light text-gray-700 hover:text-primary rounded-md transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-green-50 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-light text-gray-700 hover:text-primary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="font-light" asChild>
              <Link href="/app/login">Acceder</Link>
            </Button>
            <Button size="sm" className="font-medium" asChild>
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
        <div className="lg:hidden bg-white">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href === "#" ? (item.dropdown?.[0].href || "/") : item.href}
                  className="block px-3 py-2 text-base font-light text-gray-700 hover:text-primary rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-light text-gray-600 hover:text-primary rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full font-light" asChild>
                <Link href="/app/login">Acceder</Link>
              </Button>
              <Button className="w-full font-medium" asChild>
                <Link href="/app/registro-usuario">Empezar</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
