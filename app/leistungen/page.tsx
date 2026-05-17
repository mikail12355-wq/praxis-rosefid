import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leistungen – Allgemeinmedizin & Sportmedizin',
  description:
    'Unsere medizinischen Leistungen: Allgemeinmedizin, Sportmedizin, Unfallchirurgie, Radiologie, Urologie und häusliche Versorgung in Berlin-Lankwitz.',
};

const leistungen = [
  {
    title: 'Allgemeinmedizin',
    description:
      'Im Bereich der Allgemeinmedizin liegt der tägliche Umgang mit unseren Patienten. Wir bieten umfassende hausärztliche Versorgung für alle Altersgruppen – von der Vorsorgeuntersuchung bis zur Behandlung akuter und chronischer Erkrankungen.',
    details: [
      'Vorsorgeuntersuchungen und Check-ups',
      'Behandlung akuter Erkrankungen',
      'Betreuung chronischer Erkrankungen',
      'Impfungen und Reisemedizin',
      'Blutentnahme und Labordiagnostik',
      'Überweisungen und Koordination',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      'Sportmedizinische Fragen und Behandlungen liegen in unserem Fachgebiet. Ob Leistungsdiagnostik, Tauglichkeitsuntersuchungen oder die Behandlung von Sportverletzungen – wir helfen Ihnen, gesund und aktiv zu bleiben.',
    details: [
      'Sportärztliche Tauglichkeitsuntersuchungen',
      'Leistungsdiagnostik und Trainingsberatung',
      'Behandlung von Sportverletzungen',
      'Ernährungs- und Bewegungsberatung',
      'Prävention und Rehabilitation',
      'Sportmedizinische Atteste',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    title: 'Unfallchirurgie & Orthopädie',
    description:
      'Die primäre Versorgung von Unfällen und die orthopädische Behandlung bilden wichtige Schwerpunkte unserer Arbeit. Die Kompetenz in der Unfallchirurgie wurde durch jahrelange Tätigkeit im Benjamin Franklin Krankenhaus (CBF) bei Prof. Dr. med. Rahim Rahmanzadeh erworben.',
    details: [
      'Erstversorgung von Verletzungen und Unfällen',
      'Wundversorgung und Naht',
      'Orthopädische Behandlungen',
      'Gelenkbeschwerden und Rückenschmerzen',
      'Nachsorge und Rehabilitation',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      'Auf Wunsch bieten wir Hausbesuche an – für Patienten, die die Praxis nicht aufsuchen können. Eine persönliche medizinische Betreuung in der vertrauten Umgebung des eigenen Zuhauses.',
    details: [
      'Hausbesuche auf Anfrage',
      'Medizinische Versorgung zu Hause',
      'Für pflegebedürftige Patienten',
      'Für mobilitätseingeschränkte Patienten',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: 'Radiologie',
    description:
      'Mit Kenntnissen in der Radiologie können wir bildgebende Befunde beurteilen und die Diagnostik gezielt einsetzen, um eine präzise Diagnose zu stellen und die beste Behandlung für Sie zu finden.',
    details: [
      'Beurteilung radiologischer Befunde',
      'Veranlassung bildgebender Diagnostik',
      'Koordination mit Radiologen',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Urologie',
    description:
      'Urologische Grundversorgung gehört ebenfalls zu unserem Leistungsspektrum. Wir betreuen Sie bei urologischen Beschwerden und koordinieren bei Bedarf die Weiterbehandlung durch einen Spezialisten.',
    details: [
      'Urologische Grunddiagnostik',
      'Behandlung häufiger urologischer Erkrankungen',
      'Urinuntersuchungen',
      'Überweisung zum Urologen bei Bedarf',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Was wir bieten
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Leistungen</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Umfassende medizinische Versorgung durch langjährige Erfahrung und Fachkompetenz –
            für Ihre Gesundheit in Berlin-Lankwitz.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leistungen.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-teal-600 mb-5">{item.icon}</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-teal-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Fragen zu unseren Leistungen?</h2>
          <p className="text-blue-200 mb-8">Kontaktieren Sie uns – wir beraten Sie gerne.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+49307741044"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
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
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Zur Kontaktseite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
