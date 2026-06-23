import LawbookSidebar from "@/components/lawbook-sidebar";
import PenaltyTable from "@/components/penalty-table";
import {
  criminalArticles,
  criminalCompensationRows,
  excessiveForceRows,
} from "@/data/criminal-law";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strafrecht",
  description:
    "Strafrechtelijke bepalingen, boetes, celstraffen en maatregelen binnen Meridian.",
};

export default function CriminalLawPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Wetboek van Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Strafrecht
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Algemene strafbare feiten binnen de stad, met nadruk op openbare
            orde, gezag, fraude, bedrijfsvoering en misbruik van bevoegdheden.
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-24">
            <LawbookSidebar activeSlug="strafrecht" />
            <div className="mt-5 border-l border-[#c89b45]/50 pl-4 text-sm leading-6 text-[#9ca3af]">
              <p className="font-semibold text-[#e0b85a]">Omrekening celstraf</p>
              <p className="mt-1">1 maand staat gelijk aan 1 minuut celstraf.</p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c89b45]/35 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                  Hoofdstuk S
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Strafrecht</h2>
                <p className="mt-3 max-w-3xl leading-7 text-[#9ca3af]">
                  De genoemde waarden zijn maximumstraffen per feit. Bij
                  verzachtende omstandigheden kan lager worden gestraft; bij
                  meerdere feiten kunnen sancties worden gestapeld.
                </p>
              </div>
              <span className="w-fit rounded-md border border-[#c89b45]/35 bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0b85a]">
                {criminalArticles.length} artikelen
              </span>
            </div>

            <div>
              {criminalArticles.map((article) => (
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

            <section
              id="vergoedingen"
              className="scroll-mt-28 border-b border-[#1f2937] py-8"
            >
              <header className="flex items-start gap-4">
                <span className="mt-1 shrink-0 font-mono text-sm font-semibold text-[#c89b45]">
                  S-28
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-[#f8fafc]">
                    Onterechte inverzekeringstelling of voorlopige hechtenis
                  </h3>
                  <p className="mt-2 leading-7 text-[#9ca3af]">
                    Vergoeding kan alleen worden toegekend wanneer achteraf is
                    vastgesteld dat de ophouding of hechtenis onterecht was.
                  </p>
                </div>
              </header>
              <div className="mt-5">
                <PenaltyTable rows={criminalCompensationRows} />
              </div>
            </section>

            <section
              id="buitensporig-geweld"
              className="scroll-mt-28 border-b border-[#1f2937] py-8"
            >
              <header className="flex items-start gap-4">
                <span className="mt-1 shrink-0 font-mono text-sm font-semibold text-[#c89b45]">
                  S-29
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-[#f8fafc]">
                    Buitensporig geweld door een overheidsmedewerker
                  </h3>
                  <p className="mt-2 leading-7 text-[#9ca3af]">
                    Deze sancties gelden naast eventuele interne disciplinaire
                    maatregelen en kunnen alleen na onderzoek worden opgelegd.
                  </p>
                </div>
              </header>
              <div className="mt-5">
                <PenaltyTable rows={excessiveForceRows} />
              </div>
            </section>

            <footer className="pt-8 text-sm leading-6 text-[#6b7280]">
              Deze strafmaten zijn afgestemd op Nederlandse verhoudingen en
              vertaald naar de speelbare schaal van Meridian. Het wetboek is
              bedoeld als duidelijke RP-richtlijn voor inwoners, politie,
              advocatuur en rechtspraak.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
