import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wetboek",
  description:
    "Het openbare wetboek van Meridian met wetten, overtredingen en bijbehorende straffen.",
};

export default function LawbookPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Rechtssysteem Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Wetboek van Meridian
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Het officiële in-roleplay overzicht van wetten, strafbare feiten,
            boetes, celstraffen en aanvullende maatregelen binnen de stad
            Meridian.
          </p>
        </header>

        <section className="mt-10 border-y border-[#1f2937] py-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                Publicatiestatus
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Wetboek in voorbereiding
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#9ca3af]">
                De categorieën en artikelen worden stapsgewijs gepubliceerd.
                Zodra een onderdeel gereed is, verschijnt het hier in het
                openbare wetboek.
              </p>
            </div>

            <span className="shrink-0 rounded-md border border-[#c89b45]/40 bg-[#09090b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e0b85a]">
              Nog niet gepubliceerd
            </span>
          </div>
        </section>

        <footer className="mt-8 text-sm leading-6 text-[#6b7280]">
          Alleen gepubliceerde artikelen en strafmaten gelden als openbare
          informatie binnen het Meridian Archief.
        </footer>
      </section>
    </main>
  );
}
