import LawbookSidebar from "@/components/lawbook-sidebar";
import { vehicleMeasureTables } from "@/data/vehicle-measures-law";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rijontzeggingen & Inbeslagnames",
  description:
    "Rijontzeggingen, voertuigstrikes, inbeslagnames en voertuigmaatregelen binnen Meridian.",
};

export default function VehicleMeasuresPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Wetboek van Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Rijontzeggingen & Inbeslagnames
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Bestuurlijke en strafrechtelijke voertuigmaatregelen bij gevaarlijk
            rijgedrag, zware verkeersfeiten, vluchtgedrag en crimineel gebruik
            van voertuigen.
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-24">
            <LawbookSidebar activeSlug="rijontzeggingen-en-inbeslagnames" />
            <div className="mt-5 border-l border-[#c89b45]/50 pl-4 text-sm leading-6 text-[#9ca3af]">
              <p className="font-semibold text-[#e0b85a]">Richtlijn</p>
              <p className="mt-1">
                Maatregelen worden vastgelegd op kenteken, bestuurder en reden.
              </p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c89b45]/35 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                  Hoofdstuk R
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Voertuigmaatregelen
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-[#9ca3af]">
                  De maatregelen zijn oplopend naar gevaar, herhaling,
                  alcohol- of drugsgebruik, vluchtgedrag en criminele inzet van
                  het voertuig. Permanente inname vereist een duidelijke
                  registratie en toetsing.
                </p>
              </div>
              <span className="w-fit rounded-md border border-[#c89b45]/35 bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0b85a]">
                {vehicleMeasureTables.length} onderdelen
              </span>
            </div>

            {vehicleMeasureTables.map((table, index) => (
              <article
                key={table.title}
                id={`r-${String(index + 1).padStart(2, "0")}`}
                className="scroll-mt-28 border-b border-[#1f2937] py-8"
              >
                <header className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 font-mono text-sm font-semibold text-[#c89b45]">
                    R-{String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#f8fafc]">
                      {table.title}
                    </h3>
                    {table.description ? (
                      <p className="mt-2 leading-7 text-[#9ca3af]">
                        {table.description}
                      </p>
                    ) : null}
                  </div>
                </header>

                <div className="mt-5 overflow-x-auto rounded-lg border border-[#1f2937]">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead className="bg-[#111827] text-xs uppercase tracking-[0.12em] text-[#9ca3af]">
                      <tr>
                        {table.columns.map((column) => (
                          <th key={column} className="px-4 py-3 font-semibold">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1f2937] bg-[#09090b]/80">
                      {table.rows.map((row) => (
                        <tr
                          key={row.join("-")}
                          className="align-top hover:bg-[#0b1120]"
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${cell}-${cellIndex}`}
                              className={
                                cellIndex === row.length - 1
                                  ? "px-4 py-3 font-semibold text-[#e0b85a]"
                                  : "px-4 py-3 text-[#d1d5db]"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}

            <footer className="pt-8 text-sm leading-6 text-[#6b7280]">
              Deze maatregelen zijn gebaseerd op Nederlandse uitgangspunten rond
              rijbewijsinvordering, verkeersgevaar en beslag, en vertaald naar
              de speelbare schaal van Meridian.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
