import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Resvoa" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold text-white">Resvoa</span>
            </div>
            <p className="text-sm mb-4">
              Tu ayudante de confianza. Conectamos personas que necesitan ayuda con proveedores verificados.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-white transition-colors">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/para-usuarios" className="hover:text-white transition-colors">
                  Para usuarios
                </Link>
              </li>
              <li>
                <Link href="/para-proveedores" className="hover:text-white transition-colors">
                  Para proveedores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/seguridad" className="hover:text-white transition-colors">
                  Seguridad
                </Link>
              </li>
              <li>
                <Link href="/reputacion" className="hover:text-white transition-colors">
                  Reputación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/terminos" className="hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="/legal/aviso-legal" className="hover:text-white transition-colors">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Resvoa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
