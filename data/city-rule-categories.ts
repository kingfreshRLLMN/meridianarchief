export type CityRuleCategory = {
  title: string;
  slug: string;
  description: string;
  ruleCount: number;
};

export const cityRuleCategories: CityRuleCategory[] = [
  {
    title: "Algemene regels",
    slug: "algemene-regels",
    description:
      "De basisregels voor roleplay, gedrag, communicatie en deelname aan Meridian.",
    ruleCount: 0,
  },
  {
    title: "Onderwereldregels",
    slug: "onderwereldregels",
    description:
      "Aanvullende regels voor criminele roleplay, conflicten, groeperingen en onderwereldactiviteiten.",
    ruleCount: 0,
  },
  {
    title: "Overheidsregels",
    slug: "overheidsregels",
    description:
      "Regels voor spelers binnen overheidsdiensten, bevoegdheden en publieke functies.",
    ruleCount: 0,
  },
  {
    title: "Streamregels",
    slug: "streamregels",
    description:
      "Afspraken rond livestreams, beeldmateriaal, privacy en verantwoord streamen in de stad.",
    ruleCount: 0,
  },
];
