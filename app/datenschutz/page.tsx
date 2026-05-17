import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Facharztpraxis Nazita Rosefid-Vojoud gemäß DSGVO.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-gray-500 mb-10">Gemäß Art. 13 DSGVO</p>

          <div className="space-y-10 text-gray-700">

            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">1. Verantwortlicher</h2>
              <p className="leading-relaxed">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-gray-800">Nazita Rosefid-Vojoud</p>
                <p>Leonorenstraße 89</p>
                <p>12247 Berlin-Lankwitz</p>
                <p>
                  Telefon: (030) 774 10 44
                </p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:anfrage@praxis-rosefid.de" className="text-blue-700 hover:text-blue-900">
                    anfrage@praxis-rosefid.de
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Allgemeines */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="leading-relaxed">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer
                Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen)
                erhoben werden, erfolgt dies stets auf freiwilliger Basis.
              </p>
              <p className="leading-relaxed mt-3">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </section>

            {/* 3. Server-Logfiles */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">3. Server-Logfiles</h2>
              <p className="leading-relaxed">
                Der Provider dieser Website erhebt und speichert automatisch Informationen in
                sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies
                sind:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser
                Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb
                der Website). Die Daten werden nach spätestens 7 Tagen gelöscht.
              </p>
            </section>

            {/* 4. Google Maps */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">4. Google Maps</h2>
              <p className="leading-relaxed">
                Diese Website verwendet Google Maps zur Darstellung von Karten und Anfahrtswegen.
                Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                Irland. Zur Nutzung der Google-Maps-Funktionen ist es notwendig, Ihre IP-Adresse
                zu speichern. Diese Informationen werden in der Regel an einen Server von Google
                in den USA übertragen und dort gespeichert.
              </p>
              <p className="leading-relaxed mt-3">
                Die Nutzung von Google Maps erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einer ansprechenden Darstellung des Praxisstandorts und
                der einfachen Auffindbarkeit). Mehr Informationen zum Umgang mit Nutzerdaten finden
                Sie in der Datenschutzerklärung von Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
              <p className="leading-relaxed mt-3">
                Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert, das ein
                angemessenes Datenschutzniveau bei Übermittlungen in die USA sicherstellt
                (Art. 45 DSGVO).
              </p>
            </section>

            {/* 5. Kontaktaufnahme */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                5. Kontaktaufnahme per E-Mail oder Telefon
              </h2>
              <p className="leading-relaxed">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="leading-relaxed mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="leading-relaxed mt-3">
                Die von Ihnen im Kontakt übersandten Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
                Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
              <p className="leading-relaxed mt-3 font-medium text-red-700 bg-red-50 p-3 rounded-lg">
                Hinweis: Bitte übermitteln Sie uns per E-Mail keine medizinisch sensiblen
                Informationen. E-Mail ist kein sicheres Kommunikationsmedium für medizinische
                Anfragen.
              </p>
            </section>

            {/* 6. Betroffenenrechte */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                6. Ihre Rechte als betroffene Person
              </h2>
              <p className="mb-3">Sie haben gegenüber uns folgende Rechte:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über die
                  von uns gespeicherten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Sie können die
                  Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong>Löschungsrecht</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer
                  Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.
                </li>
                <li>
                  <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die
                  Einschränkung der Verarbeitung verlangen.
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können die
                  Übertragung Ihrer Daten in einem maschinenlesbaren Format verlangen.
                </li>
                <li>
                  <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der
                  Verarbeitung auf Basis eines berechtigten Interesses widersprechen.
                </li>
                <li>
                  <strong>Widerrufsrecht</strong>: Eine erteilte Einwilligung können Sie
                  jederzeit mit Wirkung für die Zukunft widerrufen.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:anfrage@praxis-rosefid.de" className="text-blue-700 hover:text-blue-900">
                  anfrage@praxis-rosefid.de
                </a>
              </p>
            </section>

            {/* 7. Beschwerderecht */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                7. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p className="leading-relaxed">
                Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde über
                die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren
                (Art. 77 DSGVO). Die zuständige Aufsichtsbehörde für Berlin ist:
              </p>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-gray-800">
                  Berliner Beauftragte für Datenschutz und Informationsfreiheit
                </p>
                <p>Friedrichstr. 219</p>
                <p>10969 Berlin</p>
                <p>
                  Web:{' '}
                  <a
                    href="https://www.datenschutz-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    www.datenschutz-berlin.de
                  </a>
                </p>
              </div>
            </section>

            {/* 8. Aktualität */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer
                Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
                notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
                Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
              </p>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
