export type CharacterStatus = "Levend" | "Vermist" | "Overleden";

export type CharacterLink = {
  name: string;
  href?: string;
};

export type NarrativePart =
  | {
      text: string;
    }
  | {
      name: string;
      href: string;
    };

export type NarrativeParagraph = NarrativePart[];

export type Character = {
  name: string;
  slug: string;
  communityRecognized?: boolean;
  status: CharacterStatus;
  aliases: string[];
  fullName: string;
  age: string;
  birthDate: string;
  nationality: string;
  residentialArea: string;
  height: string;
  eyeColor: string;
  hairColor: string;
  distinguishingFeatures: {
    scars: string[];
    tattoos: string[];
    clothingStyle: string[];
  };
  family: CharacterLink[];
  businessPartners: CharacterLink[];
  knownConnections: CharacterLink[];
  knownRivals: CharacterLink[];
  businesses: CharacterLink[];
  work: string[];
  past: string[];
  arrivalInMeridian: string[];
  familyStory: string[];
  connectionStory: NarrativeParagraph[];
  businessStory: NarrativeParagraph[];
  rumors: string[];
  image: string;
};

export const characters: Character[] = [
  {
    name: "Bobby Ray Fiasco",
    slug: "bobby-ray-fiasco",
    communityRecognized: true,
    status: "Levend",
    aliases: ["Geen publiek bekende aliassen"],
    fullName: "Bobby Ray Fiasco",
    age: "Niet openbaar geregistreerd",
    birthDate: "Niet openbaar geregistreerd",
    nationality: "Niet openbaar geregistreerd",
    residentialArea: "Meridian",
    height: "Niet openbaar geregistreerd",
    eyeColor: "Niet openbaar geregistreerd",
    hairColor: "Niet openbaar geregistreerd",
    distinguishingFeatures: {
      scars: ["Niet openbaar geregistreerd"],
      tattoos: ["Niet openbaar geregistreerd"],
      clothingStyle: ["Niet openbaar geregistreerd"],
    },
    family: [{ name: "Hugo Fiasco" }],
    businessPartners: [],
    knownConnections: [],
    knownRivals: [],
    businesses: [
      { name: "Fiasco Ink", href: "/businesses/fiasco-ink" },
    ],
    work: ["Eigenaar van Fiasco Ink", "Ondernemer"],
    past: [
      "Over de periode vóór zijn komst naar Meridian is weinig verifieerbare informatie opgenomen in het publieke archief. Bobby heeft zijn voorgeschiedenis niet uitgebreid openbaar gemaakt en officiële documenten geven geen volledig beeld van zijn eerdere woonplaatsen of werkzaamheden.",
      "In informele gesprekken wordt een mogelijke achtergrond in de vechtsport genoemd. Daarvoor ontbreekt binnen het publieke stadsarchief echter voldoende bevestiging. Deze informatie wordt daarom niet als vastgesteld onderdeel van zijn levensloop beschouwd.",
    ],
    arrivalInMeridian: [
      "Na zijn verschijning in Meridian begon Bobby zichtbaar te werken aan een eigen positie binnen de stad. Zijn publieke activiteiten kregen vooral vorm rond ondernemerschap en de ontwikkeling van een creatieve werkplek.",
      "De registratie en opening van Fiasco Ink vormden het duidelijkste publieke keerpunt in zijn Meridian-periode. Sindsdien is zijn naam nauw verbonden geraakt met de zaak en met de klanten en contacten die daar over de vloer komen.",
      "Zijn huidige reputatie berust voornamelijk op zijn aanwezigheid als ondernemer. Verdere persoonlijke ontwikkelingen worden alleen aan dit dossier toegevoegd wanneer ze publiek bekend en voldoende verifieerbaar zijn.",
    ],
    familyStory: [
      "Hugo Fiasco staat in het openbare dossier vermeld als familie van Bobby Ray Fiasco. Over de precieze aard en geschiedenis van hun familieband is weinig publiek vastgelegd.",
      "Andere familieleden of aanvullende familieverbanden zijn momenteel niet openbaar geregistreerd.",
    ],
    connectionStory: [
      [
        {
          text: "Binnen het openbare archief zijn momenteel geen vaste zakenpartners van Bobby bevestigd. Ook over bekende connecties buiten zijn onderneming is weinig betrouwbare informatie beschikbaar.",
        },
      ],
      [
        {
          text: "Er zijn op dit moment geen publiek geregistreerde rivalen. Wanneer een samenwerking, connectie of rivaliteit openbaar bekend wordt, kan de betreffende naam hier rechtstreeks naar het bijbehorende inwoners- of bedrijfsdossier linken.",
        },
      ],
    ],
    businessStory: [
      [
        {
          name: "Fiasco Ink",
          href: "/businesses/fiasco-ink",
        },
        {
          text: " is de voornaamste bekende onderneming die aan Bobby wordt gekoppeld. Hij geldt publiekelijk als eigenaar en is het herkenbare gezicht van de zaak.",
        },
      ],
      [
        {
          text: "Zijn werkzaamheden bestaan uit het leiden van de onderneming, het onderhouden van de publieke reputatie en het ondersteunen van de creatieve dienstverlening rond custom tattoo designs.",
        },
      ],
      [
        {
          text: "Er zijn op dit moment geen andere officieel geregistreerde ondernemingen of vaste zakenpartners aan zijn openbare profiel toegevoegd.",
        },
      ],
    ],
    rumors: [
      "Er gaan verhalen rond over een verleden in de vechtsportwereld, maar dit is niet officieel bevestigd in het publieke archief.",
    ],
    image: "/characters/bobby-ray.png",
  },
];
