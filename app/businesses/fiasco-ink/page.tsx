import DossierContents from "@/components/dossier-contents";
import DossierInfobox from "@/components/dossier-infobox";
import DossierSection from "@/components/dossier-section";
import ShareDossierButton from "@/components/share-dossier-button";
import { businesses } from "@/data/businesses";
import Link from "next/link";

const contents = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#geschiedenis", label: "Geschiedenis" },
  { href: "#eigenaar", label: "Eigenaar" },
  { href: "#werknemers", label: "Werknemers" },
  { href: "#openbaar", label: "Openbare informatie" },
];

export default function FiascoInkPage() {
  const fiascoInk = businesses[0];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-7">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                Bedrijfsdossier
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
                {fiascoInk.name}
              </h1>
              <p className="mt-4 max-w-3xl leading-8 text-[#9ca3af]">
                Openbaar bedrijfsprofiel met registratiegegevens, bekende
                geschiedenis en publieke verbindingen binnen Meridian.
              </p>
            </div>
            <div className="shrink-0 sm:pt-1">
              <ShareDossierButton />
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <DossierContents items={contents} />

            <DossierSection id="overzicht" title="Overzicht">
              <p>{fiascoInk.beschrijving}</p>
            </DossierSection>

            <DossierSection id="geschiedenis" title="Geschiedenis">
              <p>{fiascoInk.geschiedenis}</p>
            </DossierSection>

            <DossierSection id="eigenaar" title="Eigenaar">
              <Link
                href={fiascoInk.eigenaar.href}
                className="font-semibold text-[#e0b85a] transition hover:text-[#f8fafc]"
              >
                {fiascoInk.eigenaar.name}
              </Link>
            </DossierSection>

            <DossierSection id="werknemers" title="Werknemers">
              <ul className="space-y-2">
                {fiascoInk.werknemers.map((employee) => (
                  <li key={employee}>{employee}</li>
                ))}
              </ul>
            </DossierSection>

            <DossierSection id="openbaar" title="Openbare informatie">
              <p>{fiascoInk.openbareInfo}</p>
            </DossierSection>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <DossierInfobox
              title={fiascoInk.name}
              subtitle="Publiek bedrijfsprofiel"
              image={fiascoInk.image}
              imageAlt={fiascoInk.name}
              sections={[
                {
                  title: "Bedrijfsinformatie",
                  facts: [
                    { label: "Status", value: fiascoInk.status },
                    { label: "Categorie", value: fiascoInk.categorie },
                    { label: "Opgericht", value: fiascoInk.opgericht },
                    { label: "Locatie", value: fiascoInk.locatie },
                  ],
                },
                {
                  title: "Organisatie",
                  facts: [
                    {
                      label: "Eigenaar",
                      value: (
                        <Link
                          href={fiascoInk.eigenaar.href}
                          className="font-semibold text-[#e0b85a]"
                        >
                          {fiascoInk.eigenaar.name}
                        </Link>
                      ),
                    },
                    {
                      label: "Werknemers",
                      value: fiascoInk.werknemers.join(", "),
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
