import type { PenaltyRow } from "@/components/penalty-table";

export type CriminalArticle = {
  number: string;
  slug: string;
  title: string;
  description?: string;
  rows: PenaltyRow[];
};

const repeatRows = (
  first: Omit<PenaltyRow, "offense">,
  second: Omit<PenaltyRow, "offense">,
  repeat: Omit<PenaltyRow, "offense">,
): PenaltyRow[] => [
  { offense: "Eerste veroordeling", ...first },
  { offense: "Tweede veroordeling", ...second },
  { offense: "Derde en volgende veroordeling", ...repeat },
];

export const criminalArticles: CriminalArticle[] = [
  {
    number: "S-01",
    slug: "niet-voldoen-aan-bevel",
    title: "Niet voldoen aan een bevel of vordering",
    description:
      "Het negeren van een duidelijke en rechtmatige aanwijzing van een bevoegde overheidsfunctionaris.",
    rows: repeatRows(
      { fine: "€ 150" },
      { fine: "€ 250" },
      { fine: "€ 400", measure: "Aanhouding mogelijk bij herhaald weigeren" },
    ),
  },
  {
    number: "S-02",
    slug: "omkoping-overheidsfunctionaris",
    title: "Omkoping van een overheidsfunctionaris",
    description:
      "Het aanbieden, beloven of geven van geld, goederen of diensten met als doel een overheidsfunctionaris te beïnvloeden.",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 1.500" },
      { detention: "12 maanden", fine: "€ 3.000" },
      {
        detention: "18 maanden",
        fine: "€ 5.000",
        measure: "Inbeslagname van het aangeboden voordeel",
      },
    ),
  },
  {
    number: "S-03",
    slug: "identiteitsfraude",
    title: "Identiteitsfraude",
    description:
      "Het gebruiken, uitlenen of presenteren van identiteitsgegevens van een ander zonder rechtmatige grond.",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 750" },
      { detention: "4 maanden", fine: "€ 1.250" },
      { detention: "8 maanden", fine: "€ 2.000" },
    ),
  },
  {
    number: "S-04",
    slug: "misbruik-noodsysteem",
    title: "Misbruik van het noodsysteem",
    rows: repeatRows(
      { fine: "€ 250" },
      { fine: "€ 500" },
      { detention: "2 maanden", fine: "€ 1.000" },
    ),
  },
  {
    number: "S-05",
    slug: "valse-aangifte",
    title: "Valse aangifte",
    description:
      "Het bewust melden van een strafbaar feit waarvan men weet of redelijkerwijs moet weten dat het niet heeft plaatsgevonden.",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 500" },
      { detention: "5 maanden", fine: "€ 1.000" },
      { detention: "8 maanden", fine: "€ 1.750" },
    ),
  },
  {
    number: "S-06",
    slug: "belemmering-rechtsgang-licht",
    title: "Belemmering van de rechtsgang, licht",
    rows: repeatRows(
      { fine: "€ 300" },
      { fine: "€ 600" },
      { detention: "2 maanden", fine: "€ 1.000" },
    ),
  },
  {
    number: "S-07",
    slug: "belemmering-rechtsgang-zwaar",
    title: "Belemmering van de rechtsgang, zwaar",
    description:
      "Bijvoorbeeld het actief wegmaken van bewijs, intimideren van getuigen of bewust tegenwerken van een lopend onderzoek.",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 1.000" },
      { detention: "8 maanden", fine: "€ 2.000" },
      { detention: "14 maanden", fine: "€ 3.500" },
    ),
  },
  {
    number: "S-08",
    slug: "opgeven-valse-gegevens",
    title: "Opgeven van valse gegevens",
    rows: repeatRows(
      { fine: "€ 150" },
      { fine: "€ 300" },
      { fine: "€ 500" },
    ),
  },
  {
    number: "S-09",
    slug: "niet-tonen-id",
    title: "Niet tonen van identiteitsbewijs op vordering",
    rows: repeatRows(
      { fine: "€ 110" },
      { fine: "€ 160" },
      { fine: "€ 240" },
    ),
  },
  {
    number: "S-10",
    slug: "openbare-dronkenschap",
    title: "Openbare dronkenschap",
    rows: repeatRows(
      { fine: "€ 120" },
      { fine: "€ 200" },
      {
        fine: "€ 350",
        measure: "Overbrenging ter ontnuchtering mogelijk bij gevaar of overlast",
      },
    ),
  },
  {
    number: "S-11",
    slug: "gezichtsbedekkende-kleding",
    title: "Dragen van gezichtsbedekkende kleding",
    rows: repeatRows(
      { fine: "€ 150", measure: "Verwijderen op vordering" },
      { fine: "€ 250", measure: "Verwijderen op vordering" },
      { fine: "€ 400", measure: "Aanhouding mogelijk bij weigering" },
    ),
  },
  {
    number: "S-12",
    slug: "identiteitsfraude-zwaar",
    title: "Identiteitsfraude, zwaar",
    description:
      "Identiteitsfraude met financieel voordeel, officiële documenten of aantoonbare schade voor derden.",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 2.000" },
      { detention: "12 maanden", fine: "€ 3.500" },
      { detention: "18 maanden", fine: "€ 5.000" },
    ),
  },
  {
    number: "S-13",
    slug: "criminele-organisatie",
    title: "Deelname aan een criminele organisatie",
    rows: repeatRows(
      { detention: "12 maanden", fine: "€ 5.000" },
      { detention: "24 maanden", fine: "€ 10.000" },
      { detention: "36 maanden", fine: "€ 15.000" },
    ),
  },
  {
    number: "S-14",
    slug: "lokaalvredebreuk",
    title: "Lokaalvredebreuk",
    rows: repeatRows(
      { fine: "€ 250", measure: "Verwijdering uit het pand" },
      { fine: "€ 450", measure: "Tijdelijk locatieverbod mogelijk" },
      { detention: "2 maanden", fine: "€ 750", measure: "Locatieverbod mogelijk" },
    ),
  },
  {
    number: "S-15",
    slug: "huisvredebreuk",
    title: "Huisvredebreuk",
    rows: repeatRows(
      { detention: "3 maanden", fine: "€ 500" },
      { detention: "6 maanden", fine: "€ 1.000" },
      { detention: "10 maanden", fine: "€ 1.750" },
    ),
  },
  {
    number: "S-16",
    slug: "verboden-domein",
    title: "Betreden van verboden domein",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 1.500", measure: "Verwijdering" },
      { detention: "12 maanden", fine: "€ 3.000", measure: "Gebiedsverbod mogelijk" },
      { detention: "18 maanden", fine: "€ 5.000", measure: "Gebiedsverbod mogelijk" },
    ),
  },
  {
    number: "S-17",
    slug: "illegaal-jagen",
    title: "Illegaal jagen",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 1.500", measure: "Inbeslagname jachtmiddelen" },
      { detention: "8 maanden", fine: "€ 3.000", measure: "Inbeslagname jachtmiddelen" },
      { detention: "12 maanden", fine: "€ 5.000", measure: "Inbeslagname jachtmiddelen" },
    ),
  },
  {
    number: "S-18",
    slug: "corruptie",
    title: "Corruptie",
    description:
      "Het misbruiken van een publieke functie, bevoegdheid of vertrouwenspositie voor persoonlijk of zakelijk voordeel.",
    rows: repeatRows(
      { detention: "12 maanden", fine: "€ 5.000" },
      { detention: "24 maanden", fine: "€ 10.000" },
      { detention: "36 maanden", fine: "€ 20.000", measure: "Ontzetting uit functie mogelijk" },
    ),
  },
  {
    number: "S-19",
    slug: "stalking",
    title: "Stalking",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 750", measure: "Contactverbod mogelijk" },
      { detention: "8 maanden", fine: "€ 1.500", measure: "Contactverbod mogelijk" },
      { detention: "14 maanden", fine: "€ 3.000", measure: "Contact- of gebiedsverbod mogelijk" },
    ),
  },
  {
    number: "S-20",
    slug: "beschermde-diersoorten-licht",
    title: "Bescherming van wilde dieren, 1 tot en met 5 dieren",
    rows: [
      {
        offense: "1 tot en met 5 dieren",
        fine: "€ 750",
        measure: "Inbeslagname van dieren en gebruikte middelen",
      },
    ],
  },
  {
    number: "S-21",
    slug: "beschermde-diersoorten-middel",
    title: "Bescherming van wilde dieren, 6 tot en met 40 dieren",
    rows: [
      {
        offense: "6 tot en met 40 dieren",
        detention: "6 maanden",
        fine: "€ 5.000",
        measure: "Inbeslagname van dieren en gebruikte middelen",
      },
    ],
  },
  {
    number: "S-22",
    slug: "beschermde-diersoorten-zwaar",
    title: "Bescherming van wilde dieren, meer dan 40 dieren",
    rows: [
      {
        offense: "Meer dan 40 dieren",
        detention: "18 maanden",
        fine: "€ 12.500",
        measure: "Inbeslagname van dieren en gebruikte middelen",
      },
    ],
  },
  {
    number: "S-23",
    slug: "vergunningloze-voertuighandel",
    title: "Vergunningloze voertuighandelaar",
    rows: repeatRows(
      { fine: "€ 1.500", measure: "Staken van handelsactiviteiten" },
      { fine: "€ 3.000", measure: "Staken van handelsactiviteiten" },
      { detention: "4 maanden", fine: "€ 6.000", measure: "Sluiting of inbeslagname mogelijk" },
    ),
  },
  {
    number: "S-24",
    slug: "bedrijf-zonder-kvk",
    title: "Werkzaam bedrijf zonder KVK-inschrijving",
    rows: repeatRows(
      { fine: "€ 750", measure: "Inschrijving verplicht voor voortzetting" },
      { fine: "€ 1.500", measure: "Tijdelijke sluiting mogelijk" },
      { detention: "4 maanden", fine: "€ 3.000", measure: "Sluiting mogelijk" },
    ),
  },
  {
    number: "S-25",
    slug: "onjuiste-vergunningen",
    title: "Niet in bezit zijn van de juiste vergunningen",
    rows: repeatRows(
      { fine: "€ 1.000", measure: "Activiteit direct staken" },
      { fine: "€ 2.500", measure: "Tijdelijke sluiting mogelijk" },
      { detention: "4 maanden", fine: "€ 5.000", measure: "Sluiting mogelijk" },
    ),
  },
  {
    number: "S-26",
    slug: "openbare-orde",
    title: "Misdrijven tegen de openbare orde",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 500" },
      { detention: "6 maanden", fine: "€ 1.000" },
      { detention: "12 maanden", fine: "€ 2.500", measure: "Gebiedsverbod mogelijk" },
    ),
  },
  {
    number: "S-27",
    slug: "openbaar-gezag",
    title: "Misdrijven tegen het openbaar gezag",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 1.500" },
      { detention: "12 maanden", fine: "€ 3.000" },
      { detention: "24 maanden", fine: "€ 7.500", measure: "Zwaardere vervolging mogelijk bij geweld of bedreiging" },
    ),
  },
];

export const criminalCompensationRows: PenaltyRow[] = [
  {
    offense: "Onterechte ophouding op het politiebureau",
    fine: "€ 50 per uur",
    measure: "Alleen na vaststelling door bevoegde instantie",
  },
  {
    offense: "Onterechte voorlopige hechtenis of detentie",
    fine: "€ 100 per uur",
    measure: "Alleen na vaststelling door bevoegde instantie",
  },
  {
    offense: "Advocaatkosten",
    fine: "Variabel",
    measure: "Redelijke en aantoonbare kosten",
  },
];

export const excessiveForceRows: PenaltyRow[] = [
  {
    offense: "Onterecht gebruik van wapenstok",
    fine: "€ 500",
    measure: "Intern onderzoek",
  },
  {
    offense: "Onterecht gebruik van stroomstootwapen",
    fine: "€ 1.500",
    measure: "Intern onderzoek en tijdelijke schorsing mogelijk",
  },
  {
    offense: "Onterecht gebruik van vuurwapen, categorie 1",
    fine: "€ 3.000",
    measure: "Intern onderzoek en schorsing mogelijk",
  },
  {
    offense: "Onterecht inzetten van surveillancehond",
    fine: "€ 4.000",
    measure: "Intern onderzoek en schorsing mogelijk",
  },
  {
    offense: "Onterecht gebruik van vuurwapen, categorie 2",
    fine: "€ 5.000",
    measure: "Ontzetting uit functie mogelijk",
  },
];
