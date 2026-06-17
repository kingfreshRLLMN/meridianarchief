import DossierContents from "@/components/dossier-contents";
import DossierInfobox from "@/components/dossier-infobox";
import DossierSection from "@/components/dossier-section";
import ShareDossierButton from "@/components/share-dossier-button";
import { characters } from "@/data/characters";
import Link from "next/link";

const contents = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#familie", label: "Familie" },
  { href: "#ondernemingen", label: "Bekende ondernemingen" },
  { href: "#gebeurtenissen", label: "Bekende gebeurtenissen" },
  { href: "#geruchten", label: "Geruchten" },
];

export default function BobbyRayPage() {
  const bobby = characters[0];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-7">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                Inwonersdossier
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
                {bobby.name}
              </h1>
              <p className="mt-4 max-w-3xl leading-8 text-[#9ca3af]">
                Een openbaar Meridian-dossier met bekende feiten, publieke
                verbanden en duidelijk gemarkeerde geruchten.
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
              <p>{bobby.openbareDossier}</p>
            </DossierSection>

            <DossierSection id="familie" title="Familie">
              <ul className="space-y-2">
                {bobby.familie.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </DossierSection>

            <DossierSection id="ondernemingen" title="Bekende ondernemingen">
              <ul className="space-y-2">
                {bobby.ondernemingen.map((business) => (
                  <li key={business.href}>
                    <Link
                      href={business.href}
                      className="font-semibold text-[#e0b85a] transition hover:text-[#f8fafc]"
                    >
                      {business.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </DossierSection>

            <DossierSection id="gebeurtenissen" title="Bekende gebeurtenissen">
              <ul className="space-y-3">
                {bobby.gebeurtenissen.map((event) => (
                  <li key={event} className="border-l border-[#c89b45]/60 pl-4">
                    {event}
                  </li>
                ))}
              </ul>
            </DossierSection>

            <DossierSection id="geruchten" title="Geruchten">
              <p className="italic text-[#9ca3af]">{bobby.geruchten}</p>
            </DossierSection>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <DossierInfobox
              title={bobby.name}
              subtitle="Publiek inwonersprofiel"
              image={bobby.image}
              imageAlt={bobby.name}
              sections={[
                {
                  title: "Dossierinformatie",
                  facts: [
                    { label: "Status", value: bobby.status },
                    { label: "Beroep", value: bobby.beroep.join(" / ") },
                    { label: "Woonplaats", value: "Meridian" },
                  ],
                },
                {
                  title: "Relaties",
                  facts: [
                    { label: "Familie", value: bobby.familie.join(", ") },
                    {
                      label: "Onderneming",
                      value: (
                        <Link
                          href="/businesses/fiasco-ink"
                          className="font-semibold text-[#e0b85a]"
                        >
                          Fiasco Ink
                        </Link>
                      ),
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
