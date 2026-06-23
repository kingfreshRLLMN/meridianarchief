import type { PenaltyRow } from "@/components/penalty-table";

export type WeaponsArticle = {
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

const seizure = "Wapen, munitie of explosief wordt in beslag genomen";

export const weaponsArticles: WeaponsArticle[] = [
  {
    number: "W-01",
    slug: "tasers",
    title: "Tasers en stroomstootwapens",
    description:
      "Het onbevoegd bezitten, dragen of gebruiken van een stroomstootwapen.",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 1.000", measure: seizure },
      { detention: "8 maanden", fine: "€ 2.000", measure: seizure },
      { detention: "14 maanden", fine: "€ 3.500", measure: seizure },
    ),
  },
  {
    number: "W-02",
    slug: "vuurwapens-explosieven-cat-1",
    title: "Vuurwapens en explosieven, categorie 1",
    description:
      "Bezit of dragen van een vuurwapen, zwaar wapenonderdeel of explosief zonder vergunning of rechtmatige bevoegdheid.",
    rows: repeatRows(
      { detention: "24 maanden", fine: "€ 7.500", measure: seizure },
      { detention: "42 maanden", fine: "€ 12.500", measure: seizure },
      { detention: "60 maanden", fine: "€ 20.000", measure: seizure },
    ),
  },
  {
    number: "W-03",
    slug: "vuurwapens-explosieven-cat-2",
    title: "Vuurwapens en explosieven, categorie 2",
    description:
      "Zwaardere vuurwapens, automatische wapens, militaire explosieven of wapens met duidelijk verhoogd maatschappelijk gevaar.",
    rows: repeatRows(
      { detention: "40 maanden", fine: "€ 12.500", measure: seizure },
      { detention: "60 maanden", fine: "€ 20.000", measure: seizure },
      { detention: "84 maanden", fine: "€ 30.000", measure: seizure },
    ),
  },
  {
    number: "W-04",
    slug: "steek-en-slagwapens",
    title: "Steek- en slagwapens",
    description:
      "Verboden messen, boksbeugels, knuppels of andere voorwerpen die als wapen worden gedragen of gebruikt.",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 350", measure: seizure },
      { detention: "4 maanden", fine: "€ 750", measure: seizure },
      { detention: "8 maanden", fine: "€ 1.500", measure: seizure },
    ),
  },
  {
    number: "W-05",
    slug: "nepwapens-holsters-replicas",
    title: "Nepwapens, holsters en replica's",
    description:
      "Voorwerpen die niet van echt te onderscheiden zijn, dreigend worden gedragen of geschikt zijn om verwarring of paniek te veroorzaken.",
    rows: repeatRows(
      { fine: "€ 350", measure: seizure },
      { detention: "2 maanden", fine: "€ 750", measure: seizure },
      { detention: "5 maanden", fine: "€ 1.500", measure: seizure },
    ),
  },
  {
    number: "W-06",
    slug: "wapenhandel",
    title: "Wapenhandel",
    description:
      "Het verkopen, leveren, vervoeren, inkopen of bemiddelen bij illegale wapens, explosieven of onderdelen daarvan.",
    rows: repeatRows(
      {
        detention: "48 maanden",
        fine: "€ 25.000",
        measure: "Inbeslagname van wapens, munitie, voertuigen en verkregen voordeel",
      },
      {
        detention: "72 maanden",
        fine: "€ 40.000",
        measure: "Inbeslagname van wapens, munitie, voertuigen en verkregen voordeel",
      },
      {
        detention: "100 maanden",
        fine: "€ 60.000",
        measure: "Inbeslagname van wapens, munitie, voertuigen en verkregen voordeel",
      },
    ),
  },
  {
    number: "W-07",
    slug: "munitiebezit-cat-1",
    title: "Munitiebezit, categorie 1",
    description:
      "Onbevoegd bezit van munitie die hoort bij lichtere of gangbare vuurwapens.",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 750", measure: seizure },
      { detention: "8 maanden", fine: "€ 1.500", measure: seizure },
      { detention: "12 maanden", fine: "€ 2.500", measure: seizure },
    ),
  },
  {
    number: "W-08",
    slug: "munitiebezit-cat-2",
    title: "Munitiebezit, categorie 2",
    description:
      "Onbevoegd bezit van zwaardere munitie, grote hoeveelheden munitie of munitie passend bij zwaardere vuurwapens.",
    rows: repeatRows(
      { detention: "8 maanden", fine: "€ 1.500", measure: seizure },
      { detention: "14 maanden", fine: "€ 3.000", measure: seizure },
      { detention: "22 maanden", fine: "€ 5.000", measure: seizure },
    ),
  },
  {
    number: "W-09",
    slug: "vuurwerkbezit",
    title: "Vuurwerkbezit",
    description:
      "Onbevoegd bezit van illegaal, professioneel of gevaarzettend vuurwerk.",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 500", measure: seizure },
      { detention: "5 maanden", fine: "€ 1.250", measure: seizure },
      { detention: "10 maanden", fine: "€ 2.500", measure: seizure },
    ),
  },
  {
    number: "W-10",
    slug: "vuurwerkhandel",
    title: "Vuurwerkhandel",
    description:
      "Het verkopen, leveren, vervoeren of opslaan van illegaal of professioneel vuurwerk buiten de geldende regels.",
    rows: repeatRows(
      {
        detention: "8 maanden",
        fine: "€ 2.500",
        measure: "Inbeslagname van vuurwerk en gebruikte vervoersmiddelen mogelijk",
      },
      {
        detention: "16 maanden",
        fine: "€ 6.000",
        measure: "Inbeslagname van vuurwerk en gebruikte vervoersmiddelen mogelijk",
      },
      {
        detention: "28 maanden",
        fine: "€ 10.000",
        measure: "Inbeslagname van vuurwerk en gebruikte vervoersmiddelen mogelijk",
      },
    ),
  },
];
