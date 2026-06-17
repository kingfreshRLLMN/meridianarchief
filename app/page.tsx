import SocialConnectButtons from "@/components/social-connect-buttons";
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
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/72 to-[#020617]" />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 py-6 md:px-8 lg:py-10">
          <div className="mb-5 flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Meridian logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-lg border border-[#1f2937] bg-[#09090b]/80 object-contain p-2"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                Publiek stadsarchief
              </p>
              <h1 className="mt-2 max-w-4xl text-4xl font-semibold text-[#f8fafc] md:text-6xl">
                Meridian Archief
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-[#d1d5db] md:text-lg">
            Het publieke stadsarchief van Meridian: inwonersdossiers,
            ondernemingsregisters en openbare informatie die de stad vormgeeft.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {portals.map((portal) => (
              <Link
                key={portal.href}
                href={portal.href}
                className="group rounded-lg border border-[#1f2937] bg-[#0b1120]/92 p-4 transition hover:border-[#c89b45] hover:bg-[#111827]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b85a]">
                  {portal.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#f8fafc]">
                  {portal.title}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#1f2937] pt-5">
            <p className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af] sm:block">
              Verbind met Meridian
            </p>
            <SocialConnectButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
