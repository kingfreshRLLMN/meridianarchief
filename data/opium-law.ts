import type { PenaltyRow } from "@/components/penalty-table";

export type OpiumArticle = {
  number: string;
  slug: string;
  category: "Harddrugs - Ingredienten" | "Harddrugs - Eindproducten" | "Softdrugs - Ingredienten" | "Softdrugs - Eindproducten";
  title: string;
  description?: string;
  rows: PenaltyRow[];
};

export const opiumCategories: OpiumArticle["category"][] = [
  "Harddrugs - Ingredienten",
  "Harddrugs - Eindproducten",
  "Softdrugs - Ingredienten",
  "Softdrugs - Eindproducten",
];

const repeatRows = (
  first: Omit<PenaltyRow, "offense">,
  second: Omit<PenaltyRow, "offense">,
  repeat: Omit<PenaltyRow, "offense">,
): PenaltyRow[] => [
  { offense: "Eerste veroordeling", ...first },
  { offense: "Tweede veroordeling", ...second },
  { offense: "Derde en volgende veroordeling", ...repeat },
];

const seizure = "Verdovende middelen en gebruikte productiemiddelen worden in beslag genomen";

export const opiumArticles: OpiumArticle[] = [
  {
    number: "O-01",
    slug: "harddrugs-ingredienten-1-25",
    category: "Harddrugs - Ingredienten",
    title: "1 tot en met 25 ingredienten",
    rows: repeatRows(
      { detention: "2 maanden", fine: "€ 750", measure: seizure },
      { detention: "4 maanden", fine: "€ 1.250", measure: seizure },
      { detention: "8 maanden", fine: "€ 2.000", measure: seizure },
    ),
  },
  {
    number: "O-02",
    slug: "harddrugs-ingredienten-26-200",
    category: "Harddrugs - Ingredienten",
    title: "26 tot en met 200 ingredienten",
    rows: repeatRows(
      { detention: "8 maanden", fine: "€ 2.000", measure: seizure },
      { detention: "12 maanden", fine: "€ 3.500", measure: seizure },
      { detention: "18 maanden", fine: "€ 5.000", measure: seizure },
    ),
  },
  {
    number: "O-03",
    slug: "harddrugs-ingredienten-201-250",
    category: "Harddrugs - Ingredienten",
    title: "201 tot en met 250 ingredienten",
    rows: repeatRows(
      { detention: "14 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "20 maanden", fine: "€ 6.000", measure: seizure },
      { detention: "28 maanden", fine: "€ 8.000", measure: seizure },
    ),
  },
  {
    number: "O-04",
    slug: "harddrugs-ingredienten-251-500",
    category: "Harddrugs - Ingredienten",
    title: "251 tot en met 500 ingredienten",
    rows: repeatRows(
      { detention: "20 maanden", fine: "€ 6.000", measure: seizure },
      { detention: "28 maanden", fine: "€ 8.500", measure: seizure },
      { detention: "38 maanden", fine: "€ 12.000", measure: seizure },
    ),
  },
  {
    number: "O-05",
    slug: "harddrugs-ingredienten-501-750",
    category: "Harddrugs - Ingredienten",
    title: "501 tot en met 750 ingredienten",
    rows: repeatRows(
      { detention: "28 maanden", fine: "€ 8.000", measure: seizure },
      { detention: "38 maanden", fine: "€ 12.000", measure: seizure },
      { detention: "50 maanden", fine: "€ 16.000", measure: seizure },
    ),
  },
  {
    number: "O-06",
    slug: "harddrugs-ingredienten-751-1000",
    category: "Harddrugs - Ingredienten",
    title: "751 tot en met 1.000 ingredienten",
    rows: repeatRows(
      { detention: "36 maanden", fine: "€ 11.000", measure: seizure },
      { detention: "48 maanden", fine: "€ 15.000", measure: seizure },
      { detention: "60 maanden", fine: "€ 20.000", measure: seizure },
    ),
  },
  {
    number: "O-07",
    slug: "harddrugs-ingredienten-1001-1500",
    category: "Harddrugs - Ingredienten",
    title: "1.001 tot en met 1.500 ingredienten",
    rows: repeatRows(
      { detention: "45 maanden", fine: "€ 15.000", measure: seizure },
      { detention: "58 maanden", fine: "€ 20.000", measure: seizure },
      { detention: "72 maanden", fine: "€ 27.500", measure: seizure },
    ),
  },
  {
    number: "O-08",
    slug: "harddrugs-ingredienten-1501-2500",
    category: "Harddrugs - Ingredienten",
    title: "1.501 tot en met 2.500 ingredienten",
    rows: repeatRows(
      { detention: "55 maanden", fine: "€ 20.000", measure: seizure },
      { detention: "70 maanden", fine: "€ 27.500", measure: seizure },
      { detention: "85 maanden", fine: "€ 35.000", measure: seizure },
    ),
  },
  {
    number: "O-09",
    slug: "harddrugs-ingredienten-2501-5000",
    category: "Harddrugs - Ingredienten",
    title: "2.501 tot en met 5.000 ingredienten",
    rows: repeatRows(
      { detention: "70 maanden", fine: "€ 30.000", measure: seizure },
      { detention: "85 maanden", fine: "€ 40.000", measure: seizure },
      { detention: "100 maanden", fine: "€ 55.000", measure: seizure },
    ),
  },
  {
    number: "O-10",
    slug: "harddrugs-ingredienten-5001-en-meer",
    category: "Harddrugs - Ingredienten",
    title: "5.001 of meer ingredienten",
    rows: repeatRows(
      { detention: "85 maanden", fine: "€ 45.000", measure: seizure },
      { detention: "105 maanden", fine: "€ 60.000", measure: seizure },
      { detention: "120 maanden", fine: "€ 75.000", measure: seizure },
    ),
  },
  {
    number: "O-11",
    slug: "harddrugs-eindproducten-1-5",
    category: "Harddrugs - Eindproducten",
    title: "1 tot en met 5 eindproducten",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 1.500", measure: seizure },
      { detention: "10 maanden", fine: "€ 2.500", measure: seizure },
      { detention: "16 maanden", fine: "€ 4.000", measure: seizure },
    ),
  },
  {
    number: "O-12",
    slug: "harddrugs-eindproducten-6-40",
    category: "Harddrugs - Eindproducten",
    title: "6 tot en met 40 eindproducten",
    rows: repeatRows(
      { detention: "14 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "22 maanden", fine: "€ 6.500", measure: seizure },
      { detention: "32 maanden", fine: "€ 10.000", measure: seizure },
    ),
  },
  {
    number: "O-13",
    slug: "harddrugs-eindproducten-41-50",
    category: "Harddrugs - Eindproducten",
    title: "41 tot en met 50 eindproducten",
    rows: repeatRows(
      { detention: "22 maanden", fine: "€ 7.500", measure: seizure },
      { detention: "32 maanden", fine: "€ 10.000", measure: seizure },
      { detention: "42 maanden", fine: "€ 14.000", measure: seizure },
    ),
  },
  {
    number: "O-14",
    slug: "harddrugs-eindproducten-51-100",
    category: "Harddrugs - Eindproducten",
    title: "51 tot en met 100 eindproducten",
    rows: repeatRows(
      { detention: "30 maanden", fine: "€ 10.000", measure: seizure },
      { detention: "42 maanden", fine: "€ 14.000", measure: seizure },
      { detention: "54 maanden", fine: "€ 18.000", measure: seizure },
    ),
  },
  {
    number: "O-15",
    slug: "harddrugs-eindproducten-101-150",
    category: "Harddrugs - Eindproducten",
    title: "101 tot en met 150 eindproducten",
    rows: repeatRows(
      { detention: "38 maanden", fine: "€ 13.000", measure: seizure },
      { detention: "50 maanden", fine: "€ 18.000", measure: seizure },
      { detention: "65 maanden", fine: "€ 24.000", measure: seizure },
    ),
  },
  {
    number: "O-16",
    slug: "harddrugs-eindproducten-151-250",
    category: "Harddrugs - Eindproducten",
    title: "151 tot en met 250 eindproducten",
    rows: repeatRows(
      { detention: "48 maanden", fine: "€ 18.000", measure: seizure },
      { detention: "62 maanden", fine: "€ 24.000", measure: seizure },
      { detention: "78 maanden", fine: "€ 32.000", measure: seizure },
    ),
  },
  {
    number: "O-17",
    slug: "harddrugs-eindproducten-251-500",
    category: "Harddrugs - Eindproducten",
    title: "251 tot en met 500 eindproducten",
    rows: repeatRows(
      { detention: "60 maanden", fine: "€ 25.000", measure: seizure },
      { detention: "78 maanden", fine: "€ 35.000", measure: seizure },
      { detention: "96 maanden", fine: "€ 45.000", measure: seizure },
    ),
  },
  {
    number: "O-18",
    slug: "harddrugs-eindproducten-501-1000",
    category: "Harddrugs - Eindproducten",
    title: "501 tot en met 1.000 eindproducten",
    rows: repeatRows(
      { detention: "75 maanden", fine: "€ 35.000", measure: seizure },
      { detention: "95 maanden", fine: "€ 50.000", measure: seizure },
      { detention: "115 maanden", fine: "€ 65.000", measure: seizure },
    ),
  },
  {
    number: "O-19",
    slug: "harddrugs-eindproducten-1001-2500",
    category: "Harddrugs - Eindproducten",
    title: "1.001 tot en met 2.500 eindproducten",
    rows: repeatRows(
      { detention: "90 maanden", fine: "€ 50.000", measure: seizure },
      { detention: "115 maanden", fine: "€ 70.000", measure: seizure },
      { detention: "140 maanden", fine: "€ 90.000", measure: seizure },
    ),
  },
  {
    number: "O-20",
    slug: "harddrugs-eindproducten-2501-en-meer",
    category: "Harddrugs - Eindproducten",
    title: "2.501 of meer eindproducten",
    rows: repeatRows(
      { detention: "110 maanden", fine: "€ 75.000", measure: seizure },
      { detention: "140 maanden", fine: "€ 100.000", measure: seizure },
      { detention: "160 maanden", fine: "€ 125.000", measure: seizure },
    ),
  },
  {
    number: "O-21",
    slug: "softdrugs-ingredienten-6-25",
    category: "Softdrugs - Ingredienten",
    title: "6 tot en met 25 ingredienten",
    rows: repeatRows(
      { fine: "€ 250", measure: seizure },
      { fine: "€ 500", measure: seizure },
      { detention: "2 maanden", fine: "€ 750", measure: seizure },
    ),
  },
  {
    number: "O-22",
    slug: "softdrugs-ingredienten-26-200",
    category: "Softdrugs - Ingredienten",
    title: "26 tot en met 200 ingredienten",
    rows: repeatRows(
      { detention: "3 maanden", fine: "€ 750", measure: seizure },
      { detention: "6 maanden", fine: "€ 1.250", measure: seizure },
      { detention: "10 maanden", fine: "€ 2.000", measure: seizure },
    ),
  },
  {
    number: "O-23",
    slug: "softdrugs-ingredienten-201-250",
    category: "Softdrugs - Ingredienten",
    title: "201 tot en met 250 ingredienten",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 1.500", measure: seizure },
      { detention: "10 maanden", fine: "€ 2.500", measure: seizure },
      { detention: "15 maanden", fine: "€ 3.500", measure: seizure },
    ),
  },
  {
    number: "O-24",
    slug: "softdrugs-ingredienten-251-500",
    category: "Softdrugs - Ingredienten",
    title: "251 tot en met 500 ingredienten",
    rows: repeatRows(
      { detention: "10 maanden", fine: "€ 2.500", measure: seizure },
      { detention: "16 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "24 maanden", fine: "€ 6.000", measure: seizure },
    ),
  },
  {
    number: "O-25",
    slug: "softdrugs-ingredienten-501-750",
    category: "Softdrugs - Ingredienten",
    title: "501 tot en met 750 ingredienten",
    rows: repeatRows(
      { detention: "16 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "24 maanden", fine: "€ 6.000", measure: seizure },
      { detention: "32 maanden", fine: "€ 8.500", measure: seizure },
    ),
  },
  {
    number: "O-26",
    slug: "softdrugs-ingredienten-751-1000",
    category: "Softdrugs - Ingredienten",
    title: "751 tot en met 1.000 ingredienten",
    rows: repeatRows(
      { detention: "22 maanden", fine: "€ 5.500", measure: seizure },
      { detention: "32 maanden", fine: "€ 8.000", measure: seizure },
      { detention: "42 maanden", fine: "€ 11.000", measure: seizure },
    ),
  },
  {
    number: "O-27",
    slug: "softdrugs-ingredienten-1001-1500",
    category: "Softdrugs - Ingredienten",
    title: "1.001 tot en met 1.500 ingredienten",
    rows: repeatRows(
      { detention: "30 maanden", fine: "€ 8.000", measure: seizure },
      { detention: "42 maanden", fine: "€ 11.000", measure: seizure },
      { detention: "55 maanden", fine: "€ 15.000", measure: seizure },
    ),
  },
  {
    number: "O-28",
    slug: "softdrugs-ingredienten-1501-2500",
    category: "Softdrugs - Ingredienten",
    title: "1.501 tot en met 2.500 ingredienten",
    rows: repeatRows(
      { detention: "38 maanden", fine: "€ 11.000", measure: seizure },
      { detention: "52 maanden", fine: "€ 15.000", measure: seizure },
      { detention: "65 maanden", fine: "€ 20.000", measure: seizure },
    ),
  },
  {
    number: "O-29",
    slug: "softdrugs-ingredienten-2501-5000",
    category: "Softdrugs - Ingredienten",
    title: "2.501 tot en met 5.000 ingredienten",
    rows: repeatRows(
      { detention: "50 maanden", fine: "€ 16.000", measure: seizure },
      { detention: "65 maanden", fine: "€ 22.000", measure: seizure },
      { detention: "80 maanden", fine: "€ 30.000", measure: seizure },
    ),
  },
  {
    number: "O-30",
    slug: "softdrugs-ingredienten-5001-en-meer",
    category: "Softdrugs - Ingredienten",
    title: "5.001 of meer ingredienten",
    rows: repeatRows(
      { detention: "65 maanden", fine: "€ 25.000", measure: seizure },
      { detention: "82 maanden", fine: "€ 35.000", measure: seizure },
      { detention: "100 maanden", fine: "€ 50.000", measure: seizure },
    ),
  },
  {
    number: "O-31",
    slug: "softdrugs-eindproducten-2-5",
    category: "Softdrugs - Eindproducten",
    title: "2 tot en met 5 eindproducten",
    rows: repeatRows(
      { fine: "€ 250", measure: seizure },
      { fine: "€ 500", measure: seizure },
      { detention: "2 maanden", fine: "€ 1.000", measure: seizure },
    ),
  },
  {
    number: "O-32",
    slug: "softdrugs-eindproducten-6-40",
    category: "Softdrugs - Eindproducten",
    title: "6 tot en met 40 eindproducten",
    rows: repeatRows(
      { detention: "5 maanden", fine: "€ 1.500", measure: seizure },
      { detention: "9 maanden", fine: "€ 2.500", measure: seizure },
      { detention: "14 maanden", fine: "€ 4.000", measure: seizure },
    ),
  },
  {
    number: "O-33",
    slug: "softdrugs-eindproducten-41-50",
    category: "Softdrugs - Eindproducten",
    title: "41 tot en met 50 eindproducten",
    rows: repeatRows(
      { detention: "9 maanden", fine: "€ 2.500", measure: seizure },
      { detention: "14 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "20 maanden", fine: "€ 6.000", measure: seizure },
    ),
  },
  {
    number: "O-34",
    slug: "softdrugs-eindproducten-51-100",
    category: "Softdrugs - Eindproducten",
    title: "51 tot en met 100 eindproducten",
    rows: repeatRows(
      { detention: "14 maanden", fine: "€ 4.000", measure: seizure },
      { detention: "22 maanden", fine: "€ 6.500", measure: seizure },
      { detention: "30 maanden", fine: "€ 9.000", measure: seizure },
    ),
  },
  {
    number: "O-35",
    slug: "softdrugs-eindproducten-101-150",
    category: "Softdrugs - Eindproducten",
    title: "101 tot en met 150 eindproducten",
    rows: repeatRows(
      { detention: "20 maanden", fine: "€ 6.000", measure: seizure },
      { detention: "30 maanden", fine: "€ 9.000", measure: seizure },
      { detention: "40 maanden", fine: "€ 13.000", measure: seizure },
    ),
  },
  {
    number: "O-36",
    slug: "softdrugs-eindproducten-151-250",
    category: "Softdrugs - Eindproducten",
    title: "151 tot en met 250 eindproducten",
    rows: repeatRows(
      { detention: "28 maanden", fine: "€ 8.500", measure: seizure },
      { detention: "40 maanden", fine: "€ 13.000", measure: seizure },
      { detention: "52 maanden", fine: "€ 18.000", measure: seizure },
    ),
  },
  {
    number: "O-37",
    slug: "softdrugs-eindproducten-251-500",
    category: "Softdrugs - Eindproducten",
    title: "251 tot en met 500 eindproducten",
    rows: repeatRows(
      { detention: "36 maanden", fine: "€ 12.000", measure: seizure },
      { detention: "50 maanden", fine: "€ 18.000", measure: seizure },
      { detention: "65 maanden", fine: "€ 25.000", measure: seizure },
    ),
  },
  {
    number: "O-38",
    slug: "softdrugs-eindproducten-501-1000",
    category: "Softdrugs - Eindproducten",
    title: "501 tot en met 1.000 eindproducten",
    rows: repeatRows(
      { detention: "48 maanden", fine: "€ 18.000", measure: seizure },
      { detention: "65 maanden", fine: "€ 25.000", measure: seizure },
      { detention: "82 maanden", fine: "€ 35.000", measure: seizure },
    ),
  },
  {
    number: "O-39",
    slug: "softdrugs-eindproducten-1001-2500",
    category: "Softdrugs - Eindproducten",
    title: "1.001 tot en met 2.500 eindproducten",
    rows: repeatRows(
      { detention: "65 maanden", fine: "€ 30.000", measure: seizure },
      { detention: "85 maanden", fine: "€ 45.000", measure: seizure },
      { detention: "105 maanden", fine: "€ 60.000", measure: seizure },
    ),
  },
  {
    number: "O-40",
    slug: "softdrugs-eindproducten-2501-en-meer",
    category: "Softdrugs - Eindproducten",
    title: "2.501 of meer eindproducten",
    rows: repeatRows(
      { detention: "80 maanden", fine: "€ 45.000", measure: seizure },
      { detention: "105 maanden", fine: "€ 65.000", measure: seizure },
      { detention: "130 maanden", fine: "€ 85.000", measure: seizure },
    ),
  },
];
