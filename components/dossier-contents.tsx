type DossierContentsProps = {
  items: {
    href: string;
    label: string;
  }[];
};

export default function DossierContents({ items }: DossierContentsProps) {
  return (
    <nav className="rounded-lg border border-[#c89b45]/35 bg-[#09090b]/82 p-5 shadow-[0_0_32px_rgba(200,155,69,0.12)]">
      <div className="flex items-center justify-between border-b border-[#1f2937] pb-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e0b85a]">
          Inhoud
        </h2>
        <span className="text-xs text-[#9ca3af]">Publiek dossier</span>
      </div>
      <ol className="mt-4 space-y-3 text-left text-sm font-medium text-[#d1d5db]">
        {items.map((item, index) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex gap-3 transition hover:text-[#e0b85a]"
            >
              <span className="w-6 shrink-0 text-right text-[#9ca3af]">
                {index + 1}.
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
