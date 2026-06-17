const timeline = [
  {
    date: "Begin 2026",
    title: "Opening van het publieke stadsarchief",
    description:
      "Meridian krijgt een centraal archief voor publieke dossiers, bedrijfsinformatie en bekende gebeurtenissen.",
  },
  {
    date: "2026",
    title: "Registratie van Fiasco Ink",
    description:
      "Fiasco Ink wordt opgenomen in het bedrijvenarchief als actieve tattoozaak binnen Meridian.",
  },
  {
    date: "2026",
    title: "Uitbreiding inwonersregister",
    description:
      "Het archief start met publieke inwonersdossiers die alleen bekende feiten en geruchten bevatten.",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-12 text-[#f8fafc] md:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
          Tijdlijn
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Belangrijke Meridian gebeurtenissen
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
          Een chronologisch overzicht van publieke momenten die belangrijk zijn
          voor de lore van Meridian.
        </p>

        <div className="mt-10 space-y-4">
          {timeline.map((event) => (
            <article
              key={`${event.date}-${event.title}`}
              className="rounded-lg border border-[#1f2937] bg-[#0b1120] p-5 md:grid md:grid-cols-[180px_1fr] md:gap-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e0b85a]">
                {event.date}
              </p>
              <div>
                <h2 className="mt-3 text-2xl font-semibold text-[#f8fafc] md:mt-0">
                  {event.title}
                </h2>
                <p className="mt-3 leading-7 text-[#9ca3af]">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
