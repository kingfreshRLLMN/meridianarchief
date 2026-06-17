import DossierSection from "@/components/dossier-section";
import { businesses } from "@/data/businesses";
import Image from "next/image";
import Link from "next/link";

export default function FiascoInkPage() {
  const fiascoInk = businesses[0];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Bedrijfsdossier
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-lg border border-[#1f2937] bg-[#09090b] p-5">
            <Image
              src={fiascoInk.image}
              alt={fiascoInk.name}
              width={640}
              height={640}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[#9ca3af]">Status</dt>
                <dd className="mt-1 font-medium text-[#f8fafc]">
                  {fiascoInk.status}
                </dd>
              </div>
              <div>
                <dt className="text-[#9ca3af]">Categorie</dt>
                <dd className="mt-1 font-medium text-[#f8fafc]">
                  {fiascoInk.categorie}
                </dd>
              </div>
              <div>
                <dt className="text-[#9ca3af]">Locatie</dt>
                <dd className="mt-1 font-medium text-[#f8fafc]">
                  {fiascoInk.locatie}
                </dd>
              </div>
            </dl>
          </aside>

          <section>
            <h1 className="text-4xl font-semibold md:text-6xl">
              {fiascoInk.name}
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
              {fiascoInk.beschrijving}
            </p>

            <div className="mt-8 grid gap-4">
              <DossierSection title="Eigenaar">
                <Link
                  href={fiascoInk.eigenaar.href}
                  className="font-medium text-[#e0b85a] transition hover:text-[#f8fafc]"
                >
                  {fiascoInk.eigenaar.name}
                </Link>
              </DossierSection>

              <DossierSection title="Beschrijving">
                <p>{fiascoInk.beschrijving}</p>
              </DossierSection>

              <DossierSection title="Geschiedenis">
                <p>{fiascoInk.geschiedenis}</p>
              </DossierSection>

              <DossierSection title="Werknemers">
                <ul className="space-y-2">
                  {fiascoInk.werknemers.map((employee) => (
                    <li key={employee}>{employee}</li>
                  ))}
                </ul>
              </DossierSection>

              <DossierSection title="Openbare informatie">
                <p>{fiascoInk.openbareInfo}</p>
              </DossierSection>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
