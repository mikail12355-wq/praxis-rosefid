import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Herzlich Willkommen | Facharztpraxis Nazita Rosefid-Vojoud Berlin',
  description:
    'Ihre Facharztpraxis für Allgemein- und Sportmedizin in Berlin-Lankwitz. Jetzt Termin vereinbaren: (030) 774 10 44.',
};

const services = [
  {
    title: 'Allgemeinmedizin',
    description:
      'Umfassende hausärztliche Versorgung für alle Altersgruppen – Vorsorge, Diagnose und Therapie akuter und chronischer Erkrankungen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Sportmedizin',
    description:
      'Sportmedizinische Untersuchungen und Behandlungen – von der Tauglichkeitsuntersuchung bis zur Therapie von Sportverletzungen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Unfallchirurgie',
    description:
      'Primärversorgung von Unfällen und orthopädische Behandlungen – mit Erfahrung aus dem Benjamin Franklin Krankenhaus Berlin.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Häusliche Versorgung',
    description:
      'Auf Wunsch kommen wir zu Ihnen nach Hause – für eine medizinische Betreuung in vertrauter Umgebung.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Allgemein- & Sportmedizin · Berlin-Lankwitz
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Herzlich willkommen in unserer Praxis
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ihre Fachärztin{' '}
              <strong className="text-white">Nazita Rosefid-Vojoud</strong> –
              kompetente und persönliche medizinische Betreuung für Sie und Ihre Familie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+49307741044"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (030) 774 10 44
              </a>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-800 hover:border-blue-300 transition-colors text-lg"
              >
                Unsere Leistungen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Telefon</p>
                <a
                  href="tel:+49307741044"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  (030) 774 10 44
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-teal-100">Leonorenstraße 89, 12247 Berlin-Lankwitz</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Sprechzeiten</p>
                <p className="text-teal-100">Mo–Fr: 8–12 Uhr</p>
                <p className="text-teal-100">Mo, Di, Do: 15–18 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Ihre Praxis
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Persönliche Betreuung in Berlin-Lankwitz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Willkommen in der Facharztpraxis von{' '}
                  <strong className="text-gray-800">Dr. Nazita Rosefid-Vojoud</strong> in der
                  Leonorenstraße 89 in Berlin-Lankwitz. Als Fachärztin für Allgemeinmedizin und
                  Sportmedizin ist es mein Ziel, Ihnen eine umfassende und persönliche medizinische
                  Versorgung zu bieten.
                </p>
                <p>
                  Die primäre Versorgung von Unfällen und die orthopädische Behandlung bilden
                  Schwerpunkte unserer Arbeit. Meine Kompetenz in der Unfallchirurgie erwarb ich
                  während meiner jahrelangen Tätigkeit im{' '}
                  <strong className="text-gray-800">
                    Benjamin Franklin Krankenhaus (CBF)
                  </strong>{' '}
                  in Berlin bei Prof. Dr. med. Rahim Rahmanzadeh.
                </p>
                <p>
                  Zu meinen weiteren Kenntnissen gehört auch die Radiologie und Urologie. Auf
                  Wunsch biete ich zudem häusliche Versorgung an.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="font-bold text-blue-900 text-xl mb-6">Unsere Fachgebiete</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Allgemeinmedizin', detail: 'Hausärztliche Vollversorgung' },
                  { label: 'Sportmedizin', detail: 'Sport- & Tauglichkeitsuntersuchungen' },
                  { label: 'Unfallchirurgie', detail: 'Primärversorgung & Orthopädie' },
                  { label: 'Radiologie', detail: 'Bildgebende Diagnostik' },
                  { label: 'Urologie', detail: 'Urologische Grundversorgung' },
                  { label: 'Hausbesuche', detail: 'Häusliche Versorgung auf Anfrage' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-teal-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-blue-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Was wir bieten
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Unsere Leistungen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="text-teal-600 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors"
            >
              Alle Leistungen ansehen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Termin vereinbaren</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns, Ihnen zu helfen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+49307741044"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 font-bold px-6 py-3.5 rounded-xl hover:bg-teal-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (030) 774 10 44
            </a>
            <a
              href="mailto:anfrage@praxis-rosefid.de"
              className="inline-flex items-center justify-center gap-2 border-2 border-teal-400 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-teal-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              anfrage@praxis-rosefid.de
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
