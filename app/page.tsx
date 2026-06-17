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

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-[6vh] pt-4 md:px-8 lg:pb-[9vh]">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Meridian logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-lg border border-[#1f2937] bg-[#09090b]/80 object-contain p-2 shadow-[0_0_34px_rgba(200,155,69,0.18)] md:h-24 md:w-24"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
                Publiek stadsarchief
              </p>
              <h1 className="mt-2 max-w-4xl text-5xl font-semibold text-[#f8fafc] md:text-7xl">
                Meridian Archief
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-[#d1d5db] md:text-lg">
            Het publieke stadsarchief van Meridian: inwonersdossiers,
            ondernemingsregisters en openbare informatie die de stad vormgeeft.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {portals.map((portal) => (
              <Link
                key={portal.href}
                href={portal.href}
                className="group rounded-lg border border-[#1f2937] bg-[#0b1120]/92 p-6 shadow-[0_0_32px_rgba(2,6,23,0.45)] transition hover:border-[#c89b45] hover:bg-[#111827] hover:shadow-[0_0_34px_rgba(200,155,69,0.16)]"
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
      </section>
    </main>
  );
}
