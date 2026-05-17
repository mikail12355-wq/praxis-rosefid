import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Facharztpraxis Nazita Rosefid-Vojoud in Berlin-Lankwitz.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-10">Impressum</h1>

          <div className="space-y-10 text-gray-700">

            {/* § 5 TMG */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1">
                <p className="font-semibold text-gray-800">Nazita Rosefid-Vojoud</p>
                <p>Fachärztin für Allgemein- und Sportmedizin</p>
                <p>Leonorenstraße 89</p>
                <p>12247 Berlin-Lankwitz</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Kontakt</h2>
              <div className="space-y-1">
                <p>Telefon: (030) 774 10 44</p>
                <p>Fax: (030) 766 77 047</p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:anfrage@praxis-rosefid.de" className="text-blue-700 hover:text-blue-900">
                    anfrage@praxis-rosefid.de
                  </a>
                </p>
                <p>
                  Web:{' '}
                  <a href="https://www.praxis-rosefid.de" className="text-blue-700 hover:text-blue-900">
                    www.praxis-rosefid.de
                  </a>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{' '}
                <span className="font-medium">46800597133</span>
              </p>
            </section>

            {/* Berufsrechtliche Angaben – § 2 Abs. 1 Nr. 8 TMG */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Berufsrechtliche Angaben gemäß § 2 Abs. 1 Nr. 8 TMG
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Berufsbezeichnung:</strong> Ärztin (verliehen in der Bundesrepublik Deutschland)
                </li>
                <li>
                  <strong>Zuständige Aufsichtsbehörde / Ärztekammer:</strong>{' '}
                  <a
                    href="https://www.aerztekammer-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    Ärztekammer Berlin
                  </a>
                </li>
                <li>
                  <strong>Zuständige Kassenärztliche Vereinigung:</strong>{' '}
                  <a
                    href="https://www.kvberlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    KV Berlin
                  </a>
                </li>
                <li>
                  <strong>Anwendbare berufsrechtliche Regelungen:</strong> Berufsordnung für die
                  Ärztinnen und Ärzte in Berlin sowie die Approbationsordnung für Ärzte (ÄApprO) –
                  abrufbar auf der Website der{' '}
                  <a
                    href="https://www.aerztekammer-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    Ärztekammer Berlin
                  </a>
                </li>
              </ul>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <div className="space-y-1">
                <p className="font-semibold text-gray-800">Nazita Rosefid-Vojoud</p>
                <p>Leonorenstraße 89</p>
                <p>12247 Berlin-Lankwitz</p>
              </div>
            </section>

            {/* Haftung für Inhalte – § 7 TMG */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Haftung für Inhalte</h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links – § 8–10 TMG */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Haftung für Links</h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
              </p>
            </section>

            {/* Online-Streitbeilegung – EU-Verordnung 524/2013 */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">Online-Streitbeilegung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="leading-relaxed mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
