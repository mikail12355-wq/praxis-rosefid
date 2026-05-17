import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Facharztpraxis</h3>
            <p className="text-blue-200 font-medium mb-3">Nazita Rosefid-Vojoud</p>
            <p className="text-blue-300 text-sm leading-relaxed">
              Fachärztin für Allgemein- und Sportmedizin in Berlin-Lankwitz
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Leonorenstraße 89</li>
              <li>12247 Berlin-Lankwitz</li>
              <li className="pt-1">
                <a href="tel:+49307741044" className="hover:text-white transition-colors">
                  Tel: (030) 774 10 44
                </a>
              </li>
              <li>
                <a
                  href="mailto:anfrage@praxis-rosefid.de"
                  className="hover:text-white transition-colors"
                >
                  anfrage@praxis-rosefid.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Sprechzeiten
            </h4>
            <ul className="space-y-1 text-sm text-blue-100 mb-6">
              <li>Mo–Fr: 8–12 Uhr</li>
              <li>Mo, Di, Do: 15–18 Uhr</li>
            </ul>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/kontakt" className="text-blue-300 hover:text-white transition-colors">
                Kontakt
              </Link>
              <Link href="/impressum" className="text-blue-300 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-blue-300 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 text-center text-sm text-blue-400">
          © {new Date().getFullYear()} Facharztpraxis Nazita Rosefid-Vojoud | Leonorenstr. 89 |
          12247 Berlin-Lankwitz
        </div>
      </div>
    </footer>
  );
}
