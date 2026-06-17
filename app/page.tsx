import ArchiveCard from "@/components/archive-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
      <section className="relative overflow-hidden border-b border-[#1f2937]">
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

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 py-16 md:px-8 lg:py-24">
          <div className="mb-8 flex items-center gap-4">
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
              <h1 className="mt-2 max-w-4xl text-5xl font-semibold text-[#f8fafc] md:text-7xl">
                Meridian Archief
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#d1d5db] md:text-xl">
            Het publieke stadsarchief van Meridian: inwonersdossiers,
            ondernemingsregisters en openbare informatie die de stad vormgeeft.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <ArchiveCard
              href="/businesses"
              eyebrow="Register"
              title="Bedrijven"
              description="Bekijk openbare bedrijfsdossiers, eigenaren, statussen en bekende geschiedenis."
              meta="Officieel ondernemingsregister"
            />
            <ArchiveCard
              href="/characters"
              eyebrow="Dossiers"
              title="Inwoners"
              description="Publieke profielen van bekende inwoners, met feiten en zorgvuldig gemarkeerde geruchten."
              meta="RP-safe informatie"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
