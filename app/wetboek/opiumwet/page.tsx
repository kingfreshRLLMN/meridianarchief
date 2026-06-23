import LawbookSidebar from "@/components/lawbook-sidebar";
import PenaltyTable from "@/components/penalty-table";
import { opiumArticles, opiumCategories } from "@/data/opium-law";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opiumwet",
  description:
    "Opiumwet, drugshoeveelheden, boetes, celstraffen en inbeslagnames binnen Meridian.",
};

export default function OpiumLawPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Wetboek van Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Opiumwet
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Strafbare feiten rond bezit, productie, handel en voorbereiding van
            softdrugs en harddrugs. De schaal maakt onderscheid tussen
            ingredienten en eindproducten.
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-24">
            <LawbookSidebar activeSlug="opiumwet" />
            <div className="mt-5 border-l border-[#c89b45]/50 pl-4 text-sm leading-6 text-[#9ca3af]">
              <p className="font-semibold text-[#e0b85a]">Omrekening celstraf</p>
              <p className="mt-1">1 maand staat gelijk aan 1 minuut celstraf.</p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c89b45]/35 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                  Hoofdstuk O
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Opiumwet</h2>
                <p className="mt-3 max-w-3xl leading-7 text-[#9ca3af]">
                  Gebruik op zichzelf wordt niet bestraft. Bezit, productie,
                  verkoop, vervoer en voorbereiding zijn wel strafbaar. Kleine
                  hoeveelheden worden lichter beoordeeld dan handelshoeveelheden
                  of georganiseerde productie.
                </p>
              </div>
              <span className="w-fit rounded-md border border-[#c89b45]/35 bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0b85a]">
                {opiumArticles.length} artikelen
              </span>
            </div>

            {opiumCategories.map((category) => {
              const articles = opiumArticles.filter(
                (article) => article.category === category,
              );

              return (
                <section key={category} className="pt-8">
                  <div className="mb-2 rounded-lg border border-[#c89b45]/30 bg-[#09090b]/80 px-5 py-4">
                    <h3 className="text-xl font-semibold text-[#f8fafc]">
                      {category}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#9ca3af]">
                      Harddrugs worden zwaarder bestraft dan softdrugs.
                      Eindproducten wegen zwaarder dan losse ingredienten,
                      omdat zij direct klaar zijn voor verkoop of gebruik.
                    </p>
                  </div>

                  {articles.map((article) => (
                    <article
                      key={article.slug}
                      id={article.slug}
                      className="scroll-mt-28 border-b border-[#1f2937] py-8"
                    >
                      <header className="flex items-start gap-4">
                        <span className="mt-1 shrink-0 font-mono text-sm font-semibold text-[#c89b45]">
                          {article.number}
                        </span>
                        <div>
                          <h4 className="text-2xl font-semibold text-[#f8fafc]">
                            {article.title}
                          </h4>
                          {article.description ? (
                            <p className="mt-2 leading-7 text-[#9ca3af]">
                              {article.description}
                            </p>
                          ) : null}
                        </div>
                      </header>

                      <div className="mt-5">
                        <PenaltyTable rows={article.rows} />
                      </div>
                    </article>
                  ))}
                </section>
              );
            })}

            <footer className="pt-8 text-sm leading-6 text-[#6b7280]">
              De bedragen en celstraffen zijn gebaseerd op Nederlandse
              strafrechtelijke verhoudingen en vertaald naar de speelbare schaal
              van Meridian. Inbeslagname of onttrekking aan het verkeer blijft
              mogelijk naast de genoemde straf.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
