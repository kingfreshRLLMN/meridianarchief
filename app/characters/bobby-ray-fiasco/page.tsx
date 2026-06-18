import DossierContents from "@/components/dossier-contents";
import DossierInfobox from "@/components/dossier-infobox";
import DossierNarrative from "@/components/dossier-narrative";
import DossierSection from "@/components/dossier-section";
import FixedDossierSidebar from "@/components/fixed-dossier-sidebar";
import RecognizedName from "@/components/recognized-name";
import ShareDossierButton from "@/components/share-dossier-button";
import { characters } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";

const contents = [
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
              <DossierNarrative paragraphs={bobby.connectionStory} />
            </DossierSection>

            <DossierSection id="ondernemingen" title="Ondernemingen en werk">
              <DossierNarrative paragraphs={bobby.businessStory} />
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
              footer={
                bobby.influencerLinks?.length ? (
                  <section>
                    <h3 className="border-b border-[#c89b45]/35 bg-[#111827] px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#e0b85a]">
                      Influencer
                    </h3>
                    <div className="space-y-2 p-4">
                      {bobby.influencerLinks.map((social) => (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-md border border-[#c89b45]/40 bg-[#0b1120] px-4 py-3 transition hover:border-[#e0b85a] hover:bg-[#111827] hover:shadow-[0_0_22px_rgba(200,155,69,0.16)]"
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <Image
                              src="/twitch.png"
                              alt="Twitch logo"
                              width={48}
                              height={48}
                              className="size-8 shrink-0 object-contain drop-shadow-[0_0_7px_rgba(200,155,69,0.4)] transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(224,184,90,0.7)]"
                            />
                            <span className="min-w-0">
                              <span className="block text-xs uppercase tracking-[0.16em] text-[#9ca3af]">
                                {social.platform}
                              </span>
                              <span className="block truncate font-semibold text-[#c89b45] transition group-hover:text-[#e0b85a]">
                                {social.label}
                              </span>
                            </span>
                          </span>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4 shrink-0 text-[#9ca3af] transition group-hover:text-[#e0b85a]"
                          >
                            <path d="M15 3h6v6" />
                            <path d="M10 14 21 3" />
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </section>
                ) : undefined
              }
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
