import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt | Praxis Rosefid-Vojoud Berlin-Lankwitz',
  description:
    'Kontaktieren Sie die Facharztpraxis Nazita Rosefid-Vojoud in Berlin-Lankwitz. Adresse: Leonorenstraße 89, 12247 Berlin. Tel: (030) 774 10 44. Sprechzeiten & Anfahrt.',
};

const stunden = [
  { tag: 'Montag', zeiten: '8–12 Uhr, 15–18 Uhr', offen: true },
  { tag: 'Dienstag', zeiten: '8–12 Uhr, 15–18 Uhr', offen: true },
  { tag: 'Mittwoch', zeiten: '8–12 Uhr', offen: true },
  { tag: 'Donnerstag', zeiten: '8–12 Uhr, 15–18 Uhr', offen: true },
  { tag: 'Freitag', zeiten: '8–12 Uhr', offen: true },
  { tag: 'Samstag', zeiten: 'Geschlossen', offen: false },
  { tag: 'Sonntag', zeiten: 'Geschlossen', offen: false },
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Wir sind für Sie da
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt & Anfahrt</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Besuchen Sie uns in der Leonorenstraße 89 in Berlin-Lankwitz oder rufen Sie uns an.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {/* Kontaktdaten */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-blue-900 text-xl mb-5 pb-3 border-b border-gray-100">
                  Kontaktdaten
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">Nazita Rosefid-Vojoud</p>
                    <p className="text-sm text-gray-500">Fachärztin für Allgemein- und Sportmedizin</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="text-gray-700">
                      <p>Leonorenstraße 89</p>
                      <p>12247 Berlin-Lankwitz</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <a
                        href="tel:+49307741044"
                        className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                      >
                        (030) 774 10 44
                      </a>
                      <p className="text-xs text-gray-400">Telefon</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-700">(030) 766 77 047</p>
                      <p className="text-xs text-gray-400">Fax</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:anfrage@praxis-rosefid.de"
                      className="text-blue-700 font-medium hover:text-blue-900 transition-colors break-all"
                    >
                      anfrage@praxis-rosefid.de
                    </a>
                  </div>
                </div>
              </div>

              {/* Sprechzeiten */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-blue-900 text-xl mb-5 pb-3 border-b border-gray-100">
                  Sprechzeiten
                </h2>
                <table className="w-full text-sm">
                  <tbody>
                    {stunden.map(({ tag, zeiten, offen }) => (
                      <tr key={tag} className="border-b border-gray-50 last:border-0">
                        <td className={`py-2 font-medium ${offen ? 'text-gray-700' : 'text-gray-400'}`}>
                          {tag}
                        </td>
                        <td
                          className={`py-2 text-right ${offen ? 'text-teal-700 font-medium' : 'text-gray-400'}`}
                        >
                          {zeiten}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ÖPNV */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-blue-900 text-xl mb-5 pb-3 border-b border-gray-100">
                  Anfahrt mit ÖPNV
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded">
                      BUS
                    </span>
                    <p className="text-sm text-gray-700">181, 182, 183, 184, 187, 280, 283, X83</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      S
                    </span>
                    <p className="text-sm text-gray-700">S25 – Haltestelle Lankwitz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Karte */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full min-h-96">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-blue-900">Auf der Karte finden</h2>
                  <p className="text-sm text-gray-500">Leonorenstraße 89, 12247 Berlin-Lankwitz</p>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=Leonorenstra%C3%9Fe+89+12247+Berlin&z=15&output=embed"
                  width="100%"
                  height="520"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Facharztpraxis Nazita Rosefid-Vojoud"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
