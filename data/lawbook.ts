export type LawbookCategory = {
  title: string;
  slug: string;
  published: boolean;
  href: string;
};

export const lawbookCategories: LawbookCategory[] = [
  { title: "Algemeen", slug: "algemeen", published: true, href: "/wetboek" },
  {
    title: "Verkeersdelicten",
    slug: "verkeersdelicten",
    published: true,
    href: "/wetboek/verkeersdelicten",
  },
  {
    title: "Strafrecht",
    slug: "strafrecht",
    published: true,
    href: "/wetboek/strafrecht",
  },
  { title: "Opiumwet", slug: "opiumwet", published: false, href: "#" },
  {
    title: "Vermogensdelicten",
    slug: "vermogensdelicten",
    published: false,
    href: "#",
  },
  {
    title: "Geweldsdelicten",
    slug: "geweldsdelicten",
    published: false,
    href: "#",
  },
  {
    title: "Wet Wapens en Munitie",
    slug: "wet-wapens-en-munitie",
    published: false,
    href: "#",
  },
  {
    title: "Rijontzeggingen & Inbeslagnames",
    slug: "rijontzeggingen-en-inbeslagnames",
    published: false,
    href: "#",
  },
];

export const generalArticleLinks = [
  { number: "A-01", title: "Rechtsbeginselen", href: "#rechtsbeginselen" },
  { number: "A-02", title: "Strafbepaling", href: "#strafbepaling" },
  { number: "A-03", title: "Verdachte", href: "#verdachte" },
  { number: "A-04", title: "Consultatierecht", href: "#consultatierecht" },
  { number: "A-05", title: "Inbeslagname", href: "#inbeslagname" },
  { number: "A-06", title: "Verjaring", href: "#verjaring" },
  { number: "A-07", title: "Strafblad", href: "#strafblad" },
  { number: "A-08", title: "Uitsluitingsgronden", href: "#uitsluitingsgronden" },
  { number: "A-09", title: "Goederen", href: "#goederen" },
  { number: "A-10", title: "Vormfouten", href: "#vormfouten" },
];
