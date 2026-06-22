export type LawbookCategory = {
  title: string;
  slug: string;
  description: string;
  articleCount: number;
};

export const lawbookCategories: LawbookCategory[] = [
  {
    title: "Algemene bepalingen",
    slug: "algemene-bepalingen",
    description:
      "Begrippen, toepassingsgebied en algemene juridische bepalingen binnen Meridian.",
    articleCount: 0,
  },
  {
    title: "Strafrecht",
    slug: "strafrecht",
    description:
      "Strafbare feiten tegen personen, eigendommen en de openbare veiligheid.",
    articleCount: 0,
  },
  {
    title: "Verkeersrecht",
    slug: "verkeersrecht",
    description:
      "Verkeersovertredingen, rijbevoegdheden, boetes en andere verkeerssancties.",
    articleCount: 0,
  },
  {
    title: "Wapenwetgeving",
    slug: "wapenwetgeving",
    description:
      "Verboden wapenbezit, vergunningen en straffen voor wapengerelateerde feiten.",
    articleCount: 0,
  },
  {
    title: "Verdovende middelen",
    slug: "verdovende-middelen",
    description:
      "Strafbare feiten rond bezit, productie, handel en vervoer van verdovende middelen.",
    articleCount: 0,
  },
  {
    title: "Boetes en strafmaten",
    slug: "boetes-en-strafmaten",
    description:
      "Het openbare overzicht van geldboetes, celstraffen en aanvullende maatregelen.",
    articleCount: 0,
  },
];
