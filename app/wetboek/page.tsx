import LawbookArticle from "@/components/lawbook-article";
import {
  generalArticleLinks,
  lawbookCategories,
} from "@/data/lawbook";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wetboek",
  description:
    "Het openbare wetboek van Meridian met wetten, overtredingen en bijbehorende straffen.",
};

export default function LawbookPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-[#f8fafc] md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-[#1f2937] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e0b85a]">
            Rechtssysteem Meridian
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Wetboek van Meridian
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-[#9ca3af]">
            Het officiële in-roleplay overzicht van wetten, procedures,
            strafbare feiten en bijbehorende sancties binnen Meridian.
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-24">
            <nav
              aria-label="Wetboekcategorieën"
              className="overflow-hidden rounded-lg border border-[#1f2937] bg-[#09090b]"
            >
              <div className="border-b border-[#1f2937] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0b85a]">
                  Wetboek
                </p>
              </div>

              <ul className="py-2">
                {lawbookCategories.map((category) => (
                  <li key={category.slug}>
                    {category.published ? (
                      <a
                        href={`#${category.slug}`}
                        className="flex items-center justify-between border-l-2 border-[#c89b45] bg-[#0b1120] px-4 py-3 text-sm font-semibold text-[#e0b85a]"
                      >
                        <span>{category.title}</span>
                        <span aria-hidden="true">›</span>
                      </a>
                    ) : (
                      <span className="flex items-center justify-between border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#9ca3af]">
                        <span>{category.title}</span>
                        <span className="text-[10px] uppercase tracking-[0.12em] text-[#4b5563]">
                          Volgt
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Artikelen binnen algemeen"
              className="mt-5 hidden border-l border-[#1f2937] pl-4 lg:block"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Op deze pagina
              </p>
              <ul className="space-y-2">
                {generalArticleLinks.map((article) => (
                  <li key={article.href}>
                    <a
                      href={article.href}
                      className="flex gap-2 text-xs leading-5 text-[#9ca3af] transition hover:text-[#e0b85a]"
                    >
                      <span className="font-mono text-[#c89b45]">
                        {article.number}
                      </span>
                      <span>{article.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <section id="algemeen" className="min-w-0">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c89b45]/35 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89b45]">
                  Hoofdstuk A
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Algemeen</h2>
                <p className="mt-3 max-w-3xl leading-7 text-[#9ca3af]">
                  Algemene rechtsbeginselen, procedures en begrippen die van
                  toepassing zijn op het volledige wetboek.
                </p>
              </div>
              <span className="w-fit rounded-md border border-[#c89b45]/35 bg-[#09090b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0b85a]">
                10 bepalingen
              </span>
            </div>

            <LawbookArticle
              id="rechtsbeginselen"
              number="A-01"
              title="Rechtsbeginselen"
            >
              <p>
                Een gedraging is alleen strafbaar wanneer deze op het moment van
                plegen als strafbaar feit in de wet is opgenomen.
              </p>
              <p>
                Een verdachte wordt als onschuldig beschouwd totdat schuld
                wettig en overtuigend is bewezen. Onderzoek vindt plaats op
                basis van hoor en wederhoor. Een wettelijke bepaling mag alleen
                worden toegepast voor het doel waarvoor deze is opgesteld.
              </p>
              <p>
                Niemand mag tweemaal worden vervolgd of veroordeeld voor
                hetzelfde strafbare feit wanneer daarover al onherroepelijk is
                beslist.
              </p>
            </LawbookArticle>

            <LawbookArticle
              id="strafbepaling"
              number="A-02"
              title="Strafbepaling"
            >
              <p>
                De maximale straf is per artikel vastgesteld. Een sanctie kan
                bestaan uit een waarschuwing, celstraf in maanden,
                rijontzegging in uren, inbeslagname of invordering van goederen,
                een geldboete of een combinatie hiervan.
              </p>
              <p>
                Een afzonderlijke straf mag niet hoger zijn dan de waarde die
                bij het betreffende artikel is opgenomen. De totale straf kan
                wel hoger uitvallen wanneer meerdere overtredingen worden
                gestapeld.
              </p>
              <p>
                Verzachtende omstandigheden kunnen leiden tot strafvermindering.
                Wanneer een strafuitsluitingsgrond van toepassing is, kan een
                sanctie geheel of gedeeltelijk worden kwijtgescholden.
              </p>
            </LawbookArticle>

            <LawbookArticle id="verdachte" number="A-03" title="Verdachte">
              <p>
                Als verdachte wordt aangemerkt: een persoon ten aanzien van wie
                uit feiten en omstandigheden een redelijk vermoeden van schuld
                aan een strafbaar feit voortvloeit.
              </p>
            </LawbookArticle>

            <LawbookArticle
              id="consultatierecht"
              number="A-04"
              title="Consultatierecht"
            >
              <p>
                Voorafgaand aan een politieverhoor heeft een verdachte recht op
                consultatie door een voorkeursadvocaat, overeenkomstig artikel 6
                van het Europees Verdrag voor de Rechten van de Mens.
              </p>
              <p>
                Wanneer de voorkeursadvocaat niet beschikbaar is, kan een
                vervangend advocaat de consultatie verzorgen. Daarmee is aan
                het consultatierecht voldaan.
              </p>
            </LawbookArticle>

            <LawbookArticle
              id="inbeslagname"
              number="A-05"
              title="Inbeslagname"
            >
              <p>
                Een goed kan in beslag worden genomen wanneer daarmee een
                strafbaar feit is gepleegd, wanneer het uit een strafbaar feit
                is verkregen of wanneer het van belang kan zijn voor het
                onderzoek.
              </p>
              <p>
                De politie mag, binnen de daarvoor geldende wettelijke
                voorwaarden, plaatsen betreden met als doel goederen in beslag
                te nemen. De verdere verwerking vindt plaats volgens de
                richtlijnen van de politie.
              </p>

              <dl className="divide-y divide-[#1f2937] border-y border-[#1f2937]">
                <div className="py-4">
                  <dt className="font-semibold text-[#e0b85a]">
                    Wederrechtelijk verkregen voordeel
                  </dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    Goederen waarvan onomstotelijk en feitelijk is bewezen dat
                    zij door een strafbaar feit zijn verworven, illegaal zijn
                    verkregen of zijn gebruikt bij crimineel handelen.
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-semibold text-[#e0b85a]">
                    Waarheidsvinding
                  </dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    Goederen die mogelijk verband houden met een strafbaar feit
                    en kunnen bijdragen aan het vaststellen van de waarheid.
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-semibold text-[#e0b85a]">
                    Verbeurdverklaring
                  </dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    Goederen die na een rechterlijke uitspraak definitief aan
                    de eigenaar worden ontnomen en kunnen worden vervreemd,
                    bijvoorbeeld door verkoop.
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-semibold text-[#e0b85a]">
                    Onttrekking aan het verkeer
                  </dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    Goederen die niet in het maatschappelijk verkeer mogen
                    terugkeren en daarom ter vernietiging worden aangeboden.
                  </dd>
                </div>
              </dl>
            </LawbookArticle>

            <LawbookArticle id="verjaring" number="A-06" title="Verjaring">
              <p>Het recht tot strafvordering vervalt door verjaring:</p>
              <ul className="space-y-3">
                <li className="border-l border-[#c89b45]/60 pl-4">
                  Een misdrijf met een strafeis van 1 tot en met 19 maanden
                  verjaart na 15 dagen.
                </li>
                <li className="border-l border-[#c89b45]/60 pl-4">
                  Een misdrijf met een strafeis van 20 maanden of meer verjaart
                  na 30 dagen.
                </li>
              </ul>
            </LawbookArticle>

            <LawbookArticle id="strafblad" number="A-07" title="Strafblad">
              <p>
                Een opgelegde straf die enige vorm van celstraf bevat, kan
                leiden tot een vermelding op het strafblad.
              </p>
              <p>
                Een strafblad vervalt na 30 dagen, mits binnen die periode geen
                nieuw strafbaar feit wordt gepleegd.
              </p>
            </LawbookArticle>

            <LawbookArticle
              id="uitsluitingsgronden"
              number="A-08"
              title="Uitsluitingsgronden"
            >
              <p>
                Volledige vrijspraak op basis van een strafuitsluitingsgrond is
                uitsluitend mogelijk in de volgende gevallen:
              </p>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="border-l border-[#c89b45]/60 pl-4">
                  <dt className="font-semibold text-[#f8fafc]">Noodweer</dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    De noodzakelijke verdediging tegen onmiddellijk geweld dat
                    door een ander wordt veroorzaakt.
                  </dd>
                </div>
                <div className="border-l border-[#c89b45]/60 pl-4">
                  <dt className="font-semibold text-[#f8fafc]">Overmacht</dt>
                  <dd className="mt-1 text-[#9ca3af]">
                    Het plegen van een strafbaar feit onder een dwang waaraan de
                    betrokkene redelijkerwijs geen weerstand kon bieden.
                  </dd>
                </div>
              </dl>
            </LawbookArticle>

            <LawbookArticle id="goederen" number="A-09" title="Goederen">
              <p>
                Onder goederen wordt verstaan: alles wat tussen twee personen
                kan worden uitgewisseld.
              </p>
              <p>
                Onderzoek naar goederen duurt, tenzij uitdrukkelijk anders is
                bepaald, maximaal twee dagen. Wanneer binnen die termijn geen
                conclusie is of kan worden getrokken, is de overheid verplicht
                de onderzochte goederen te retourneren.
              </p>
            </LawbookArticle>

            <LawbookArticle id="vormfouten" number="A-10" title="Vormfouten">
              <p>
                Wanneer de politie de voor haar geldende wetten of richtlijnen
                niet naleeft, kan de rechter één of meer van de volgende
                gevolgen verbinden aan dit vormverzuim:
              </p>
              <ol className="space-y-3">
                <li className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="font-mono text-[#c89b45]">01</span>
                  <span>
                    Verlaging van de straf wanneer het veroorzaakte nadeel
                    daarmee kan worden gecompenseerd.
                  </span>
                </li>
                <li className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="font-mono text-[#c89b45]">02</span>
                  <span>
                    Uitsluiting van onderzoeksresultaten die door de vormfout
                    zijn verkregen.
                  </span>
                </li>
                <li className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="font-mono text-[#c89b45]">03</span>
                  <span>Uitsluiting van de verdachte van rechtsvervolging.</span>
                </li>
              </ol>
              <p>
                Deze bepaling kan alleen worden toegepast wanneer de zaak door
                de politie of een burger aan de rechter wordt voorgelegd.
              </p>
              <p>Onder onherstelbaar vormverzuim wordt onder meer verstaan:</p>
              <ul className="space-y-3">
                <li className="border-l border-[#c89b45]/60 pl-4">
                  Een vooringenomen, sturende of druk uitoefenende wijze van
                  verhoren.
                </li>
                <li className="border-l border-[#c89b45]/60 pl-4">
                  Het verzwijgen van ontlastende informatie of het vernietigen
                  van bewijsmateriaal.
                </li>
                <li className="border-l border-[#c89b45]/60 pl-4">
                  Het tappen van een professional met geheimhoudingsplicht,
                  zoals een arts, notaris, geestelijke, apotheker, advocaat of
                  rechter, tenzij aantoonbaar zwaarwegende redenen bestaan.
                </li>
              </ul>
            </LawbookArticle>

            <footer className="pt-8 text-sm leading-6 text-[#6b7280]">
              Alleen gepubliceerde artikelen en strafmaten gelden als openbare
              informatie binnen het Meridian Archief.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
