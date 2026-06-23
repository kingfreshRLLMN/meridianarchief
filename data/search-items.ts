import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { criminalArticles } from "@/data/criminal-law";
import {
  generalArticleLinks,
  lawbookCategories,
} from "@/data/lawbook";
import { opiumArticles } from "@/data/opium-law";
import { propertyArticles } from "@/data/property-law";
import { trafficArticles } from "@/data/traffic-law";
import { vehicleMeasureTables } from "@/data/vehicle-measures-law";
import { violenceArticles } from "@/data/violence-law";
import { weaponsArticles } from "@/data/weapons-law";

const publishedLawbookCategories = lawbookCategories
  .filter((category) => category.published)
  .map((category) => ({
    name: category.title,
    href: category.href,
    type: "Wetboek" as const,
    keywords: `wetboek regels wetten ${category.slug}`,
  }));

const generalLawItems = generalArticleLinks.map((article) => ({
  name: article.title,
  href: `/wetboek${article.href}`,
  type: "Wetboek" as const,
  keywords: `algemeen wetboek regels ${article.number}`,
}));

const lawArticleItems = [
  ...trafficArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/verkeersdelicten#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `verkeer verkeersdelicten wetboek regels ${article.number} ${article.description ?? ""}`,
  })),
  ...criminalArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/strafrecht#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `strafrecht wetboek regels ${article.number} ${article.description ?? ""}`,
  })),
  ...opiumArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/opiumwet#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `opiumwet drugs softdrugs harddrugs wetboek regels ${article.number} ${article.category}`,
  })),
  ...propertyArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/vermogensdelicten#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `vermogensdelicten diefstal geld goederen wetboek regels ${article.number} ${article.description ?? ""}`,
  })),
  ...violenceArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/geweldsdelicten#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `geweldsdelicten geweld bedreiging mishandeling wetboek regels ${article.number} ${article.description ?? ""}`,
  })),
  ...weaponsArticles.map((article) => ({
    name: article.title,
    href: `/wetboek/wet-wapens-en-munitie#${article.slug}`,
    type: "Wetboek" as const,
    keywords: `wapens munitie vuurwapen explosief wetboek regels ${article.number} ${article.description ?? ""}`,
  })),
  ...vehicleMeasureTables.map((table, index) => ({
    name: table.title,
    href: `/wetboek/rijontzeggingen-en-inbeslagnames#r-${String(index + 1).padStart(2, "0")}`,
    type: "Wetboek" as const,
    keywords: `rijontzegging inbeslagname voertuig strikes wetboek regels ${table.description ?? ""} ${table.rows.flat().join(" ")}`,
  })),
];

export const searchItems = [
  ...businesses.map((business) => ({
    name: business.name,
    href: `/businesses/${business.slug}`,
    type: "Bedrijf" as const,
  })),
  ...characters.map((character) => ({
    name: character.name,
    href: `/characters/${character.slug}`,
    type: "Inwoner" as const,
  })),
  ...publishedLawbookCategories,
  ...generalLawItems,
  ...lawArticleItems,
];
