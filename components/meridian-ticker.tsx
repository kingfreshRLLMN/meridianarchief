const tickerItems = [
  "Nieuwe inschrijvingen worden verwerkt door het stadsarchief",
  "Openbare dossiers blijven beschikbaar voor iedere inwoner van Meridian",
  "Ondernemingsregister bijgewerkt na controle van actieve bedrijven",
  "Wetboek geraadpleegd bij lopende zaken binnen de stad",
  "Havengebied meldt verhoogde handelsactiviteit in de avonduren",
  "Archiefdienst ontvangt nieuwe verklaringen uit verschillende wijken",
  "Meridian bewaart wat de stad vormt: namen, zaken en gebeurtenissen",
];

export default function MeridianTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 border-y border-[#c89b45]/20 bg-[#050505]/72 py-3 shadow-[0_-12px_38px_rgba(2,6,23,0.55)] backdrop-blur-md">
      <div className="meridian-ticker-track flex w-max items-center gap-8">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#d1d5db]"
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#c89b45] shadow-[0_0_12px_rgba(224,184,90,0.72)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
