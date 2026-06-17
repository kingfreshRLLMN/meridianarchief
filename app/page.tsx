import ArchiveSearchBar from "@/components/archive-search-bar";
import SocialConnectButtons from "@/components/social-connect-buttons";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";

const portals = [
  {
    href: "/businesses",
    eyebrow: "Register",
    title: "Bedrijven",
  },
  {
    href: "/characters",
    eyebrow: "Dossiers",
    title: "Inwoners",
  },
];

const searchItems = [
  ...businesses.map((business) => ({
    name: business.name,
    href: `/businesses/${business.slug}`,
    type: "Bedrijf" as const,
  })),
  ...characters.map((character) => ({
    name: character.name,
    href: `/characters/${character.slug}`,
    type: "Inwoner" as const,
  })),
];

export default function Home() {
  return (
    <main className="h-[calc(100svh-116px)] overflow-hidden bg-[#020617] text-[#f8fafc] sm:h-[calc(100svh-73px)]">
      <section className="relative h-full overflow-hidden border-b border-[#1f2937]">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Meridian stadsbanner"
            fill
            priority
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 via-[#020617]/68 to-[#020617]/92" />
        </div>

        <div className="absolute left-1/2 top-5 z-20 w-full max-w-2xl -translate-x-1/2 px-4">
          <ArchiveSearchBar items={searchItems} />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-6 pt-24 md:px-8 md:pt-28">
          <div className="mx-auto w-full max-w-5xl text-center">
            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Image
                src="/logo.png"
                alt="Meridian logo"
                width={88}
                height={88}
                className="h-20 w-20 rounded-lg border border-[#1f2937] bg-[#09090b]/80 object-contain p-2 shadow-[0_0_34px_rgba(200,155,69,0.18)] md:h-24 md:w-24"
              />
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                  Publiek stadsarchief
                </p>
                <h1 className="mt-2 max-w-4xl text-5xl font-semibold text-[#f8fafc] md:text-7xl">
                  Meridian Archief
                </h1>
              </div>
            </div>

            <p className="mx-auto max-w-3xl text-base leading-7 text-[#d1d5db] md:text-lg">
              Het publieke stadsarchief van Meridian: inwonersdossiers,
              ondernemingsregisters en openbare informatie die de stad vormgeeft.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {portals.map((portal) => (
                <Link
                  key={portal.href}
                  href={portal.href}
                  className="group rounded-lg border border-[#1f2937] bg-[#0b1120]/92 p-6 shadow-[0_0_30px_rgba(200,155,69,0.10)] transition hover:border-[#c89b45] hover:bg-[#111827] hover:shadow-[0_0_42px_rgba(200,155,69,0.24)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b85a]">
                    {portal.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-[#f8fafc] md:text-4xl">
                    {portal.title}
                  </h2>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">
                Verbind met Meridian
              </p>
              <SocialConnectButtons />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
