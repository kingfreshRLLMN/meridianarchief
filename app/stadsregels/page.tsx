import { cityRuleCategories } from "@/data/city-rule-categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadsregels",
  description:
    "De officiële community- en serverregels voor deelname aan Meridian.",
};

export default function CityRulesPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Communityreglement
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Stadsregels van Meridian
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            De regels voor deelname aan de Meridian-community en roleplaystad.
            Overtredingen kunnen leiden tot waarschuwingen, tijdelijke
            uitsluitingen of permanente bans.
          </p>
        </header>

        <div className="mt-8 flex items-center justify-between gap-4 border-b border-[#1f2937] pb-4">
          <h2 className="text-xl font-semibold">Regelcategorieën</h2>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ca3af]">
            Officieel reglement
          </span>
        </div>

        <div className="divide-y divide-[#1f2937]">
          {cityRuleCategories.map((category, index) => (
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
                {category.ruleCount > 0
                  ? `${category.ruleCount} regels`
                  : "In voorbereiding"}
              </span>
            </article>
          ))}
        </div>

        <footer className="mt-8 border-t border-[#c89b45]/30 pt-5 text-sm leading-6 text-[#9ca3af]">
          Stadsregels vallen onder communityhandhaving. Strafbare feiten en
          juridische sancties binnen roleplay staan afzonderlijk in het Wetboek.
        </footer>
      </section>
    </main>
  );
}
