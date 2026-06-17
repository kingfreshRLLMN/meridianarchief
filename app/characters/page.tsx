import Link from "next/link";
import RecognizedName from "@/components/recognized-name";
import { characters } from "@/data/characters";

export default function CharactersPage() {
  const sortedCharacters = [...characters].sort((a, b) =>
    a.name.localeCompare(b.name, "nl"),
  );

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Inwonersregister
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Publieke dossiers van Meridian
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
          Selecteer een inwoner uit de alfabetische index om het publieke dossier
          te openen.
        </p>

        <div className="mt-10 rounded-lg border border-[#1f2937] bg-[#0b1120]">
          <div className="border-b border-[#1f2937] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">
              Alfabetische index
            </p>
          </div>

          <div className="divide-y divide-[#1f2937]">
            {sortedCharacters.map((character) => (
              <Link
                key={character.slug}
                href={`/characters/${character.slug}`}
                className="block px-5 py-4 text-lg font-medium text-[#f8fafc] transition hover:bg-[#111827] hover:text-[#e0b85a]"
              >
                <RecognizedName
                  name={character.name}
                  recognized={character.communityRecognized}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
