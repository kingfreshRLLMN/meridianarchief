import LawbookSidebar from "@/components/lawbook-sidebar";
import PenaltyTable from "@/components/penalty-table";
import { trafficArticles } from "@/data/traffic-law";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verkeersdelicten",
  description:
    "Verkeersdelicten, boetes, celstraffen en rijontzeggingen binnen Meridian.",
};

export default function TrafficLawPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Wetboek van Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Verkeersdelicten
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Overtredingen en misdrijven in het verkeer, inclusief geldboetes,
            celstraffen, rijontzeggingen en voertuigmaatregelen.
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-24">
            <LawbookSidebar activeSlug="verkeersdelicten" />
            <div className="mt-5 border-l border-[#c89b45]/50 pl-4 text-sm leading-6 text-[#9ca3af]">
              <p className="font-semibold text-[#e0b85a]">Omrekening celstraf</p>
              <p className="mt-1">1 maand staat gelijk aan 1 minuut celstraf.</p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c89b45]/35 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                  Hoofdstuk V
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Verkeersdelicten
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-[#9ca3af]">
                  De genoemde waarden zijn maximumstraffen per feit.
                  Verzachtende of verzwarende omstandigheden kunnen binnen de
                  algemene bepalingen worden meegewogen.
                </p>
              </div>
              <span className="w-fit rounded-md border border-[#c89b45]/35 bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0b85a]">
                {trafficArticles.length} artikelen
              </span>
            </div>

            <div>
              {trafficArticles.map((article) => (
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
                      <h3 className="text-2xl font-semibold text-[#f8fafc]">
                        {article.title}
                      </h3>
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
            </div>

            <footer className="pt-8 text-sm leading-6 text-[#6b7280]">
              Boetes zijn gebaseerd op Nederlandse verhoudingen en vertaald
              naar de speelbare schaal van Meridian. De combinatie van
              meerdere feiten kan leiden tot stapeling van sancties.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
