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
    aliases: ["King"],
    fullName: "Bobby Ray Fiasco",
    age: "30",
    birthDate: "28-07-1995",
    nationality: "Nederlands",
    residentialArea: "Onbekend",
    height: "194 cm",
    eyeColor: "Geel",
    hairColor: "Blond",
    distinguishingFeatures: {
      scars: ["Geen openbaar bekende littekens"],
      tattoos: [
        "Zwaardtattoo in het gezicht",
        "Keeltattoo",
        "Volledig Japanse tattoosuit",
      ],
      clothingStyle: ["Niet openbaar geregistreerd"],
    },
    family: [{ name: "Hugo Fiasco (Broer)" }],
    businessPartners: [],
    knownConnections: [],
    knownRivals: [],
    businesses: [
      { name: "Fiasco Ink", href: "/businesses/fiasco-ink" },
    ],
    work: ["Fiasco Ink / Eigenaar"],
    past: [
      "Bobby Ray Fiasco groeide op in een harde omgeving waar loyaliteit, overleven en familie centraal stonden. Samen met zijn oudere broer Hugo Fiasco bracht hij zijn jeugd door tussen straatraces, het sleutelen aan voertuigen en kleine overvallen om rond te komen.",
      "Hun vader kampte jarenlang met alcoholproblemen en overleed uiteindelijk aan zijn verslaving. Hun moeder deed alles wat binnen haar vermogen lag om het gezin overeind te houden, maar overleed jaren later toen Bobby volwassen was. Het verlies van beide ouders maakte de band tussen de broers alleen maar sterker.",
      "Al op jonge leeftijd bleek Bobby over uitzonderlijk talent en discipline binnen de vechtsport te beschikken. Op zijn negentiende begon hij aan een professionele bokscarrière waarin hij snel naam maakte. Zijn agressieve stijl, knock-outkracht en onbreekbare mentaliteit leverden hem een ongeslagen status en meerdere titels in verschillende gewichtsklassen op.",
      "Tijdens zijn carrière verbleef Bobby een periode in het buitenland, waar hij verder bouwde aan zijn reputatie en vermogen. Ondanks de afstand bleef de band met zijn roots en zijn broer bestaan. Uiteindelijk besloot hij zijn focus te verleggen van de vechtsport naar het ondernemerschap.",
    ],
    arrivalInMeridian: [
      "Bij zijn aankomst in Meridian gebruikte Bobby de discipline, vastberadenheid en ervaring uit zijn eerdere leven om een nieuwe positie binnen de stad op te bouwen. Hij koos ervoor zijn aandacht te richten op legale ondernemingen en een toekomst waarin zijn naam niet alleen met de straat of de vechtsport verbonden zou zijn.",
      "Opvallend is dat Bobby alleen in Meridian verscheen. Zijn oudere broer Hugo, met wie hij jarenlang vrijwel onafscheidelijk was, is voor zover publiek bekend nog niet in de stad gespot. Waarom Bobby zonder hem naar Meridian kwam en wat er aan die keuze voorafging, is niet openbaar bekend.",
      "De oprichting en opening van Fiasco Ink vormden een belangrijk keerpunt. Vanuit de zaak bouwde Bobby verder aan zijn reputatie als ondernemer en raakte zijn naam verbonden aan creatieve dienstverlening, custom tattoo designs en een groeiend netwerk binnen Meridian.",
      "Binnen Meridian staat Bobby bekend als een gerespecteerde ondernemer, eigenaar van Fiasco Ink en een man met een sterke reputatie op straat. Zijn verleden vormt nog altijd een belangrijk onderdeel van hoe anderen hem zien, maar zijn huidige publieke leven draait voornamelijk om familie, ondernemerschap en het verder opbouwen van de naam Fiasco.",
    ],
    familyStory: [
      "Hugo Fiasco is de oudere broer van Bobby Ray Fiasco en speelde vanaf het begin een grote rol in hun gezamenlijke levenspad. Waar Bobby bekendstond om zijn fysieke kracht en discipline, ontwikkelde Hugo een reputatie vanwege zijn strategische inzicht, scherpe blik en vermogen om situaties vooruit te lezen.",
      "Vanaf jonge leeftijd was Hugo vaak degene die plannen maakte en kansen herkende die anderen misten. Samen met Bobby bouwde hij al vroeg aan hun naam, eerst op straat en later in de zakelijke wereld. Na jaren van opbouwen, verliezen en opnieuw beginnen bleef Hugo de stabiele factor binnen de familie.",
      "De band tussen Bobby en Hugo is gebouwd op verlies, strijd en loyaliteit. Vanaf hun jeugd stonden zij samen tegenover de wereld. Armoede, het verlies van hun ouders, successen, tegenslagen en wederopbouw vormden hun relatie tot een vrijwel onbreekbare broederschap.",
      "Binnen Meridian worden de Fiasco-broers gezien als mannen die hun woord houden, hun familie beschermen en hun naam met trots dragen. Hugo staat bekend als een invloedrijke ondernemer met sterke connecties en een scherpe zakelijke mentaliteit. Hun broederschap symboliseert voor velen discipline, loyaliteit en de kracht om opnieuw op te bouwen wanneer alles verloren lijkt.",
      "Toch is Hugo tot op heden niet bevestigd gezien binnen Meridian. Dat Bobby wel in de stad opdook terwijl zijn broer afwezig bleef, vormt een van de grotere open vragen rond de familie. Er is geen publieke verklaring voor hun tijdelijke scheiding en het is onbekend of Hugo van plan is Bobby naar Meridian te volgen.",
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
      "Hoewel Bobby's bokscarrière bekend is, blijven veel verhalen over wat hij tijdens zijn jaren in het buitenland heeft meegemaakt onbevestigd.",
    ],
    image: "/characters/bobby-ray.png",
  },
];
