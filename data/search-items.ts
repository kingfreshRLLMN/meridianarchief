import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";

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
];
