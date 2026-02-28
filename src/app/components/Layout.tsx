import { Outlet, Link, useLocation } from "react-router";
import { Mail, Github, Linkedin } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                NoBarrierTech
              </span>
              <span className="text-xs text-gray-500 -mt-1">Engelsiz Teknoloji</span>
            </Link>
            <div className="flex gap-6 sm:gap-8">
              <Link
                to="/solutions"
                className={`text-sm sm:text-base transition-colors ${
                  isActive("/solutions")
                    ? "text-[#2563EB] font-semibold"
                    : "text-gray-600 hover:text-[#2563EB]"
                }`}
              >
                Çözümler
              </Link>
              <Link
                to="/about"
                className={`text-sm sm:text-base transition-colors ${
                  isActive("/about")
                    ? "text-[#2563EB] font-semibold"
                    : "text-gray-600 hover:text-[#2563EB]"
                }`}
              >
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col gap-8">
            {/* Brand and tagline */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">NoBarrierTech</h3>
              <p className="text-gray-300 text-sm">Engelsiz Teknoloji - Herkes İçin Erişilebilir Çözümler</p>
            </div>

            {/* Contact and social */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a
                  href="mailto:iletisim@nobarriertech.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                  <span>iletisim@nobarriertech.com</span>
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                © 2026 NoBarrierTech. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}