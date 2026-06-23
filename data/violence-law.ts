import type { PenaltyRow } from "@/components/penalty-table";

export type ViolenceArticle = {
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

export const violenceArticles: ViolenceArticle[] = [
  {
    number: "G-01",
    slug: "wederspannigheid-verzet",
    title: "Wederspannigheid of verzet",
    description:
      "Fysiek verzet tegen een bevoegde overheidsfunctionaris tijdens een rechtmatige aanhouding, controle of vordering.",
    rows: repeatRows(
      { detention: "3 maanden", fine: "€ 250" },
      { detention: "6 maanden", fine: "€ 500" },
      {
        detention: "10 maanden",
        fine: "€ 750",
        measure: "Zwaarder indien letsel ontstaat bij een functionaris",
      },
    ),
  },
  {
    number: "G-02",
    slug: "gijzeling",
    title: "Gijzeling",
    description:
      "Het opzettelijk vasthouden van een persoon met dwang, dreiging of geweld om een doel af te dwingen.",
    rows: repeatRows(
      {
        detention: "45 maanden",
        fine: "€ 2.500",
        measure: "Inbeslagname van gebruikte middelen en contactverbod mogelijk",
      },
      {
        detention: "70 maanden",
        fine: "€ 5.000",
        measure: "Inbeslagname van gebruikte middelen en contactverbod mogelijk",
      },
      {
        detention: "100 maanden",
        fine: "€ 8.000",
        measure: "Inbeslagname van gebruikte middelen en contactverbod mogelijk",
      },
    ),
  },
  {
    number: "G-03",
    slug: "bedreiging",
    title: "Bedreiging",
    description:
      "Het dreigen met geweld, zware mishandeling, brandstichting, levensdelicten of andere ernstige aantasting van veiligheid.",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 500", measure: "Contactverbod mogelijk" },
      { detention: "8 maanden", fine: "€ 900", measure: "Contactverbod mogelijk" },
      {
        detention: "14 maanden",
        fine: "€ 1.500",
        measure: "Contact- of gebiedsverbod mogelijk",
      },
    ),
  },
  {
    number: "G-04",
    slug: "doodslag",
    title: "Doodslag",
    description:
      "Het opzettelijk doden van een ander zonder bewezen voorbedachte raad.",
    rows: repeatRows(
      { detention: "80 maanden", fine: "€ 7.500", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "115 maanden", fine: "€ 10.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "150 maanden", fine: "€ 15.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
    ),
  },
  {
    number: "G-05",
    slug: "moord",
    title: "Moord",
    description:
      "Het opzettelijk en met voorbedachte raad doden van een ander. Dit is een van de zwaarste delicten binnen het wetboek.",
    rows: repeatRows(
      { detention: "110 maanden", fine: "€ 10.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "150 maanden", fine: "€ 15.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "200 maanden", fine: "€ 25.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
    ),
  },
  {
    number: "G-06",
    slug: "eenvoudige-mishandeling",
    title: "Eenvoudige mishandeling",
    description:
      "Fysiek geweld zonder zwaar lichamelijk letsel, zoals slaan, schoppen of duwen met letsel of pijn tot gevolg.",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 500", measure: "Schadevergoeding mogelijk" },
      { detention: "8 maanden", fine: "€ 1.000", measure: "Schadevergoeding mogelijk" },
      { detention: "14 maanden", fine: "€ 1.750", measure: "Schadevergoeding mogelijk" },
    ),
  },
  {
    number: "G-07",
    slug: "zware-mishandeling",
    title: "Zware mishandeling",
    description:
      "Geweld met zwaar lichamelijk letsel, blijvende schade, gebruik van een wapen of gericht geweld tegen kwetsbare personen.",
    rows: repeatRows(
      { detention: "12 maanden", fine: "€ 1.500", measure: "Schadevergoeding mogelijk" },
      { detention: "24 maanden", fine: "€ 3.000", measure: "Schadevergoeding mogelijk" },
      { detention: "40 maanden", fine: "€ 5.000", measure: "Schadevergoeding mogelijk" },
    ),
  },
  {
    number: "G-08",
    slug: "vernieling",
    title: "Vernieling",
    description:
      "Het opzettelijk beschadigen, onbruikbaar maken of vernietigen van goederen die aan een ander toebehoren.",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 350", measure: "Herstel of schadevergoeding" },
      { detention: "5 maanden", fine: "€ 750", measure: "Herstel of schadevergoeding" },
      { detention: "10 maanden", fine: "€ 1.500", measure: "Herstel of schadevergoeding" },
    ),
  },
  {
    number: "G-09",
    slug: "brandstichting-en-ontploffingen",
    title: "Brandstichting en ontploffingen",
    description:
      "Het veroorzaken van brand of ontploffing waarbij gevaar ontstaat voor personen, gebouwen, voertuigen of openbare veiligheid.",
    rows: repeatRows(
      { detention: "24 maanden", fine: "€ 3.000", measure: "Schadevergoeding en inbeslagname gebruikte middelen" },
      { detention: "45 maanden", fine: "€ 6.000", measure: "Schadevergoeding en inbeslagname gebruikte middelen" },
      { detention: "75 maanden", fine: "€ 10.000", measure: "Schadevergoeding en inbeslagname gebruikte middelen" },
    ),
  },
  {
    number: "G-10",
    slug: "terroristisch-misdrijf",
    title: "Terroristisch misdrijf",
    description:
      "Een misdrijf met het doel ernstige vrees aan te jagen, de samenleving te ontwrichten of overheidsbesluiten af te dwingen.",
    rows: repeatRows(
      { detention: "130 maanden", fine: "€ 15.000", measure: "Inbeslagname en gebiedsverbod mogelijk" },
      { detention: "180 maanden", fine: "€ 25.000", measure: "Inbeslagname en gebiedsverbod mogelijk" },
      { detention: "240 maanden", fine: "€ 40.000", measure: "Inbeslagname en langdurige beperkingen mogelijk" },
    ),
  },
  {
    number: "G-11",
    slug: "dood-door-schuld",
    title: "Dood door schuld",
    description:
      "Het veroorzaken van iemands overlijden door ernstige nalatigheid of roekeloos gedrag, zonder opzet op de dood.",
    rows: repeatRows(
      { detention: "24 maanden", fine: "€ 3.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "40 maanden", fine: "€ 5.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
      { detention: "60 maanden", fine: "€ 8.000", measure: "Schadevergoeding aan nabestaanden mogelijk" },
    ),
  },
];
