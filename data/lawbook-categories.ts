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
      "Begrippen, toepassingsgebied en algemene uitgangspunten van het Meridian wetboek.",
    articleCount: 0,
  },
  {
    title: "Strafrecht",
    slug: "strafrecht",
    description:
      "Strafbare feiten, bijbehorende bepalingen en openbare richtlijnen.",
    articleCount: 0,
  },
  {
    title: "Verkeersrecht",
    slug: "verkeersrecht",
    description:
      "Regels voor voertuigen, verkeersgedrag en gebruik van de openbare weg.",
    articleCount: 0,
  },
  {
    title: "Ondernemingsrecht",
    slug: "ondernemingsrecht",
    description:
      "Publieke regels voor ondernemingen, werkgevers en commerciële activiteiten.",
    articleCount: 0,
  },
  {
    title: "Openbare orde",
    slug: "openbare-orde",
    description:
      "Bepalingen voor veiligheid, leefbaarheid en gedrag in de openbare ruimte.",
    articleCount: 0,
  },
  {
    title: "Hulpdiensten",
    slug: "hulpdiensten",
    description:
      "Regels rond overheidsdiensten, bevoegdheden en hulpverlening binnen Meridian.",
    articleCount: 0,
  },
];
