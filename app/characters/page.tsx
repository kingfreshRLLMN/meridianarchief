import ArchiveCard from "@/components/archive-card";
import { characters } from "@/data/characters";

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Inwonersregister
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Publieke dossiers van Meridian
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
          Dit register bevat alleen publieke kennis, bekende feiten en duidelijk
          gemarkeerde geruchten. Er wordt geen metagame informatie opgenomen.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {characters.map((character) => (
            <ArchiveCard
              key={character.slug}
              href={`/characters/${character.slug}`}
              eyebrow={character.status}
              title={character.name}
              description={character.openbareDossier}
              meta={character.beroep.join(" / ")}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
