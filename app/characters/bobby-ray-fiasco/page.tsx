import DossierSection from "@/components/dossier-section";
import { characters } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";

export default function BobbyRayPage() {
  const bobby = characters[0];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Inwonersdossier
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-lg border border-[#1f2937] bg-[#09090b] p-5">
          <Image
              src={bobby.image}
              alt={bobby.name}
              width={640}
              height={640}
              className="aspect-square w-full rounded-lg object-cover"
          />
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[#9ca3af]">Status</dt>
                <dd className="mt-1 font-medium text-[#f8fafc]">{bobby.status}</dd>
              </div>
              <div>
                <dt className="text-[#9ca3af]">Beroep</dt>
                <dd className="mt-1 font-medium text-[#f8fafc]">
                  {bobby.beroep.join(" / ")}
                </dd>
              </div>
            </dl>
          </aside>

          <section>
            <h1 className="text-4xl font-semibold md:text-6xl">
              {bobby.name}
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
              Dit dossier bevat uitsluitend openbare informatie, bekende feiten
              en geruchten die binnen de stad rondgaan.
            </p>

            <div className="mt-8 grid gap-4">
              <DossierSection title="Openbare informatie">
                <p>{bobby.openbareDossier}</p>
              </DossierSection>

              <DossierSection title="Familie">
                <ul className="space-y-2">
                  {bobby.familie.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </DossierSection>

              <DossierSection title="Bekende ondernemingen">
                <ul className="space-y-2">
                  {bobby.ondernemingen.map((business) => (
                    <li key={business.href}>
                      <Link
                        href={business.href}
                        className="font-medium text-[#e0b85a] transition hover:text-[#f8fafc]"
                      >
                        {business.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DossierSection>

              <DossierSection title="Bekende gebeurtenissen">
                <ul className="space-y-2">
                  {bobby.gebeurtenissen.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              </DossierSection>

              <DossierSection title="Geruchten">
                <p>{bobby.geruchten}</p>
              </DossierSection>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
