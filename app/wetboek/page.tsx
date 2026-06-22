import { lawbookCategories } from "@/data/lawbook-categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wetboek",
  description:
    "Het openbare wetboek van Meridian, geordend per juridische categorie.",
};

export default function LawbookPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Openbare regelgeving
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Wetboek van Meridian
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Het centrale openbare overzicht van geldende bepalingen binnen
            Meridian. Het wetboek wordt per categorie opgebouwd en zorgvuldig
            uitgebreid.
          </p>
        </header>

        <div className="mt-8 flex items-center justify-between gap-4 border-b border-[#1f2937] pb-4">
          <h2 className="text-xl font-semibold">Categorieën</h2>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ca3af]">
            Publieke versie
          </span>
        </div>

        <div className="divide-y divide-[#1f2937]">
          {lawbookCategories.map((category, index) => (
            <article
              key={category.slug}
              className="grid gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center"
            >
              <span className="text-sm font-semibold tabular-nums text-[#c89b45]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-semibold text-[#f8fafc]">
                  {category.title}
                </h3>
                <p className="mt-2 max-w-3xl leading-7 text-[#9ca3af]">
                  {category.description}
                </p>
              </div>

              <span className="w-fit rounded-md border border-[#1f2937] bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9ca3af]">
                {category.articleCount > 0
                  ? `${category.articleCount} artikelen`
                  : "In voorbereiding"}
              </span>
            </article>
          ))}
        </div>

        <footer className="mt-8 border-t border-[#c89b45]/30 pt-5 text-sm leading-6 text-[#9ca3af]">
          Alleen gepubliceerde bepalingen gelden als openbare informatie binnen
          het Meridian Archief.
        </footer>
      </section>
    </main>
  );
}
