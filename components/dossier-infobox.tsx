import Image from "next/image";

type DossierFact = {
  label: string;
  value: React.ReactNode;
};

type DossierInfoboxProps = {
  title: React.ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  sections: {
    title: string;
    facts: DossierFact[];
  }[];
};

export default function DossierInfobox({
  title,
  subtitle,
  image,
  imageAlt,
  sections,
}: DossierInfoboxProps) {
  return (
    <aside className="overflow-hidden rounded-lg border border-[#c89b45]/45 bg-[#09090b]/94 shadow-[0_0_38px_rgba(200,155,69,0.16)]">
      <div className="border-b border-[#c89b45]/35 bg-gradient-to-r from-[#6f4f1e] via-[#c89b45] to-[#e0b85a] px-5 py-4 text-center">
        <h2 className="text-xl font-semibold text-[#020617]">{title}</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]">
          {subtitle}
        </p>
      </div>

      <div className="p-5">
        <Image
          src={image}
          alt={imageAlt}
          width={720}
          height={720}
          className="aspect-square w-full rounded-lg border border-[#1f2937] object-cover"
        />
      </div>

      <div className="divide-y divide-[#1f2937]">
        {sections.map((section) => (
          <section key={section.title}>
            <h3 className="border-y border-[#c89b45]/35 bg-[#111827] px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#e0b85a]">
              {section.title}
            </h3>
            <dl>
              {section.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[42%_minmax(0,1fr)] gap-3 border-b border-[#1f2937] px-4 py-3 text-sm last:border-b-0"
                >
                  <dt className="font-semibold text-[#f8fafc]">{fact.label}</dt>
                  <dd className="min-w-0 break-words border-l border-[#c89b45]/60 pl-3 text-[#d1d5db]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </aside>
  );
}
