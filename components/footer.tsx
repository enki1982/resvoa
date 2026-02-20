import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <img src="/logo.png" alt="Resvoa" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-white">Resvoa</span>
            </div>
            <p className="text-sm mb-4 leading-relaxed max-w-sm">
              La plataforma que conecta personas que necesitan ayuda con proveedores verificados y confiables. Simple, rápido y seguro.
            </p>
            <p className="text-xs text-gray-400 italic mb-6 font-semibold">
              RESVOA — RESolver + ali VOA = Tu tiempo de vuelta
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-green-500" />
                <a href="mailto:contacto@resvoa.com" className="hover:text-white transition-colors">
                  contacto@resvoa.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-green-500" />
                <a href="tel:+34900123456" className="hover:text-white transition-colors">
                  +34 900 123 456
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>Barcelona, Madrid, Valencia</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-base">Plataforma</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/como-funciona" className="hover:text-green-400 transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-green-400 transition-colors">
                  Todas las categorías
                </Link>
              </li>
              <li>
                <Link href="/para-usuarios" className="hover:text-green-400 transition-colors">
                  Para usuarios
                </Link>
              </li>
              <li>
                <Link href="/para-proveedores" className="hover:text-green-400 transition-colors">
                  Para proveedores
                </Link>
              </li>
              <li>
                <Link href="/app/registro-proveedor" className="hover:text-green-400 transition-colors">
                  Conviértete en proveedor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-base">Ayuda y soporte</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ayuda" className="hover:text-green-400 transition-colors">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/seguridad" className="hover:text-green-400 transition-colors">
                  Seguridad y confianza
                </Link>
              </li>
              <li>
                <Link href="/reputacion" className="hover:text-green-400 transition-colors">
                  Sistema de reputación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-green-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/ayuda" className="hover:text-green-400 transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-base">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/terminos" className="hover:text-green-400 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-green-400 transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-green-400 transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="/legal/aviso-legal" className="hover:text-green-400 transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/legal/cancelaciones-reembolsos" className="hover:text-green-400 transition-colors">
                  Cancelaciones y reembolsos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {currentYear} Resvoa. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs">
              <span>Hecho con dedicación en España</span>
              <span>•</span>
              <span>10,000+ tareas completadas</span>
              <span>•</span>
              <span>4.8★ valoración</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
