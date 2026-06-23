import type { PenaltyRow } from "@/components/penalty-table";

export type PropertyArticle = {
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

export const propertyArticles: PropertyArticle[] = [
  {
    number: "P-01",
    slug: "diefstal",
    title: "Diefstal",
    description:
      "Het wegnemen van goederen die aan een ander toebehoren, zonder geweld, bedreiging of braak.",
    rows: repeatRows(
      {
        detention: "4 maanden",
        fine: "€ 400",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "8 maanden",
        fine: "€ 800",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "14 maanden",
        fine: "€ 1.500",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
    ),
  },
  {
    number: "P-02",
    slug: "gekwalificeerde-diefstal",
    title: "Gekwalificeerde diefstal",
    description:
      "Diefstal met strafverzwarende omstandigheden, zoals braak, inklimming, samenwerking, nachtelijke uren of misbruik van toegang.",
    rows: repeatRows(
      {
        detention: "8 maanden",
        fine: "€ 900",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "14 maanden",
        fine: "€ 1.500",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "24 maanden",
        fine: "€ 2.500",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
    ),
  },
  {
    number: "P-03",
    slug: "diefstal-met-geweld-overval",
    title: "Diefstal met geweld of overval",
    description:
      "Het wegnemen van goederen met geweld, bedreiging of direct gevaar voor slachtoffers.",
    rows: repeatRows(
      {
        detention: "18 maanden",
        fine: "€ 1.500",
        measure: "Schadevergoeding en inbeslagname van buit",
      },
      {
        detention: "32 maanden",
        fine: "€ 3.000",
        measure: "Schadevergoeding en inbeslagname van buit",
      },
      {
        detention: "50 maanden",
        fine: "€ 5.000",
        measure: "Schadevergoeding en inbeslagname van buit",
      },
    ),
  },
  {
    number: "P-04",
    slug: "afpersing",
    title: "Afpersing",
    description:
      "Het dwingen van een persoon tot afgifte van geld, goederen of diensten door geweld, bedreiging of ernstige druk.",
    rows: repeatRows(
      {
        detention: "20 maanden",
        fine: "€ 2.000",
        measure: "Schadevergoeding en inbeslagname van verkregen voordeel",
      },
      {
        detention: "35 maanden",
        fine: "€ 3.500",
        measure: "Schadevergoeding en inbeslagname van verkregen voordeel",
      },
      {
        detention: "55 maanden",
        fine: "€ 6.000",
        measure: "Schadevergoeding en inbeslagname van verkregen voordeel",
      },
    ),
  },
  {
    number: "P-05",
    slug: "afdreiging-chantage",
    title: "Afdreiging of chantage",
    description:
      "Het afdwingen van geld, goederen, diensten of gedragingen door dreiging met openbaarmaking of reputatieschade.",
    rows: repeatRows(
      {
        detention: "12 maanden",
        fine: "€ 1.500",
        measure: "Schadevergoeding en contactverbod mogelijk",
      },
      {
        detention: "24 maanden",
        fine: "€ 3.000",
        measure: "Schadevergoeding en contactverbod mogelijk",
      },
      {
        detention: "40 maanden",
        fine: "€ 5.000",
        measure: "Schadevergoeding en contactverbod mogelijk",
      },
    ),
  },
  {
    number: "P-06",
    slug: "verduistering",
    title: "Verduistering",
    description:
      "Het zich toe-eigenen van geld of goederen die men rechtmatig onder zich had, maar niet mocht houden.",
    rows: repeatRows(
      {
        detention: "5 maanden",
        fine: "€ 750",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "10 maanden",
        fine: "€ 1.500",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
      {
        detention: "18 maanden",
        fine: "€ 3.000",
        measure: "Teruggave of schadevergoeding aan benadeelde",
      },
    ),
  },
  {
    number: "P-07",
    slug: "heling",
    title: "Heling",
    description:
      "Het kopen, bewaren, verkopen of doorgeven van goederen waarvan men weet of redelijkerwijs moet vermoeden dat deze gestolen zijn.",
    rows: repeatRows(
      {
        detention: "4 maanden",
        fine: "€ 500",
        measure: "Inbeslagname van gestolen goederen",
      },
      {
        detention: "8 maanden",
        fine: "€ 1.000",
        measure: "Inbeslagname van gestolen goederen",
      },
      {
        detention: "16 maanden",
        fine: "€ 2.000",
        measure: "Inbeslagname van gestolen goederen",
      },
    ),
  },
  {
    number: "P-08",
    slug: "witwassen",
    title: "Witwassen",
    description:
      "Het verhullen, omzetten, bewaren of gebruiken van geld of goederen waarvan de criminele herkomst bekend is of redelijkerwijs vermoed moet worden.",
    rows: repeatRows(
      {
        detention: "18 maanden",
        fine: "€ 5.000",
        measure: "Inbeslagname van witwasbedrag en verkregen voordeel",
      },
      {
        detention: "36 maanden",
        fine: "€ 10.000",
        measure: "Inbeslagname van witwasbedrag en verkregen voordeel",
      },
      {
        detention: "60 maanden",
        fine: "€ 20.000",
        measure: "Inbeslagname van witwasbedrag en verkregen voordeel",
      },
    ),
  },
];
