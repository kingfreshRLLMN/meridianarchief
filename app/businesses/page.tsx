import ArchiveCard from "@/components/archive-card";
import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Bedrijvenarchief
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Ondernemingen in Meridian
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
          Een openbaar register van bedrijven, eigenaren en bekende geschiedenis
          binnen de stad. Bedrijfsinformatie blijft bewust publiek en RP-safe.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {businesses.map((business) => (
            <ArchiveCard
              key={business.slug}
              href={`/businesses/${business.slug}`}
              eyebrow={business.status}
              title={business.name}
              description={business.beschrijving}
              meta={`${business.categorie} / Eigenaar: ${business.eigenaar.name}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
