import DossierContents from "@/components/dossier-contents";
import DossierInfobox from "@/components/dossier-infobox";
import DossierSection from "@/components/dossier-section";
import FixedDossierSidebar from "@/components/fixed-dossier-sidebar";
import RecognizedName from "@/components/recognized-name";
import ShareDossierButton from "@/components/share-dossier-button";
import { characters } from "@/data/characters";
import Link from "next/link";

const contents = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#verleden", label: "Verleden" },
  { href: "#aankomst", label: "Aankomst in Meridian" },
  { href: "#familie", label: "Familie" },
  { href: "#connecties", label: "Connecties en rivalen" },
  { href: "#ondernemingen", label: "Ondernemingen en werk" },
  { href: "#geruchten", label: "Geruchten" },
];

function displayNames(items: { name: string }[]) {
  return items.length > 0
    ? items.map((item) => item.name).join(", ")
    : "Geen openbaar geregistreerde vermeldingen";
}

export default function BobbyRayPage() {
  const bobby = characters[0];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-7 lg:pr-[412px]">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                Inwonersdossier
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
                <RecognizedName
                  name={bobby.name}
                  recognized={bobby.communityRecognized}
                  badgeSize="large"
                />
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
              <p>{bobby.publicProfile}</p>
            </DossierSection>

            <DossierSection id="verleden" title="Verleden">
              <div className="space-y-4">
                {bobby.past.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DossierSection>

            <DossierSection id="aankomst" title="Aankomst in Meridian">
              <div className="space-y-4">
                {bobby.arrivalInMeridian.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DossierSection>

            <DossierSection id="familie" title="Familie">
              <div className="space-y-4">
                {bobby.familyStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DossierSection>

            <DossierSection id="connecties" title="Connecties en rivalen">
              <dl className="grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-[#e0b85a]">Zakenpartners</dt>
                  <dd className="mt-1">{displayNames(bobby.businessPartners)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#e0b85a]">
                    Bekende connecties
                  </dt>
                  <dd className="mt-1">{displayNames(bobby.knownConnections)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#e0b85a]">
                    Bekende rivalen
                  </dt>
                  <dd className="mt-1">{displayNames(bobby.knownRivals)}</dd>
                </div>
              </dl>
            </DossierSection>

            <DossierSection id="ondernemingen" title="Ondernemingen en werk">
              <div className="space-y-4">
                {bobby.businessStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="flex flex-wrap gap-2 pt-2">
                  {bobby.businesses.map((business) =>
                    business.href ? (
                      <Link
                        key={business.name}
                        href={business.href}
                        className="rounded-md border border-[#c89b45]/45 bg-[#09090b] px-3 py-2 font-semibold text-[#e0b85a] transition hover:border-[#e0b85a] hover:text-[#f8fafc]"
                      >
                        {business.name}
                      </Link>
                    ) : (
                      <span key={business.name}>{business.name}</span>
                    ),
                  )}
                </div>
              </div>
            </DossierSection>

            <DossierSection id="geruchten" title="Geruchten">
              <ul className="space-y-3 italic text-[#9ca3af]">
                {bobby.rumors.map((rumor) => (
                  <li key={rumor} className="border-l border-[#c89b45]/60 pl-4">
                    {rumor}
                  </li>
                ))}
              </ul>
            </DossierSection>
          </div>

          <FixedDossierSidebar>
            <DossierInfobox
              title={
                <RecognizedName
                  name={bobby.name}
                  recognized={bobby.communityRecognized}
                />
              }
              subtitle="Publiek inwonersprofiel"
              image={bobby.image}
              imageAlt={bobby.name}
              sections={[
                {
                  title: "Persoonsgegevens",
                  facts: [
                    {
                      label: "Status",
                      value: (
                        <span className="font-semibold text-[#e0b85a]">
                          {bobby.status}
                        </span>
                      ),
                    },
                    { label: "Alias(es)", value: bobby.aliases.join(", ") },
                    { label: "Volledige naam", value: bobby.fullName },
                    { label: "Leeftijd", value: bobby.age },
                    { label: "Geboortedatum", value: bobby.birthDate },
                    { label: "Nationaliteit", value: bobby.nationality },
                    { label: "Woongebied", value: bobby.residentialArea },
                  ],
                },
                {
                  title: "Uiterlijke kenmerken",
                  facts: [
                    { label: "Lengte", value: bobby.height },
                    { label: "Oogkleur", value: bobby.eyeColor },
                    { label: "Haarkleur", value: bobby.hairColor },
                    {
                      label: "Littekens",
                      value: bobby.distinguishingFeatures.scars.join(", "),
                    },
                    {
                      label: "Tattoos",
                      value: bobby.distinguishingFeatures.tattoos.join(", "),
                    },
                    {
                      label: "Kledingstijl",
                      value:
                        bobby.distinguishingFeatures.clothingStyle.join(", "),
                    },
                  ],
                },
                {
                  title: "Relaties",
                  facts: [
                    { label: "Familie", value: displayNames(bobby.family) },
                    {
                      label: "Zakenpartners",
                      value: displayNames(bobby.businessPartners),
                    },
                    {
                      label: "Connecties",
                      value: displayNames(bobby.knownConnections),
                    },
                    {
                      label: "Rivalen",
                      value: displayNames(bobby.knownRivals),
                    },
                  ],
                },
                {
                  title: "Werk en ondernemingen",
                  facts: [
                    {
                      label: "Ondernemingen",
                      value: (
                        <span className="space-y-1">
                          {bobby.businesses.map((business) =>
                            business.href ? (
                              <Link
                                key={business.name}
                                href={business.href}
                                className="block font-semibold text-[#e0b85a]"
                              >
                                {business.name}
                              </Link>
                            ) : (
                              <span key={business.name} className="block">
                                {business.name}
                              </span>
                            ),
                          )}
                        </span>
                      ),
                    },
                    { label: "Werk", value: bobby.work.join(", ") },
                  ],
                },
              ]}
            />
          </FixedDossierSidebar>
        </div>
      </div>
    </main>
  );
}
