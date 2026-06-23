import type { PenaltyRow } from "@/components/penalty-table";

export type TrafficArticle = {
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

export const trafficArticles: TrafficArticle[] = [
  {
    number: "V-01",
    slug: "algemene-verkeersovertreding",
    title: "Verkeersovertreding in algemene zin",
    description:
      "Overtreding van een verkeersregel waarvoor geen afzonderlijke bepaling in dit hoofdstuk is opgenomen.",
    rows: [{ offense: "Eerste constatering", fine: "€ 180" }],
  },
  {
    number: "V-02",
    slug: "gevaar-of-hinder",
    title: "Gevaar of hinder zonder ongeval",
    rows: repeatRows(
      { fine: "€ 400", drivingBan: "12 uur" },
      { fine: "€ 650", drivingBan: "24 uur" },
      { fine: "€ 900", drivingBan: "48 uur" },
    ),
  },
  {
    number: "V-03",
    slug: "opzettelijk-ernstig-gevaar",
    title: "Opzettelijk veroorzaken van ernstig gevaar of hinder",
    rows: repeatRows(
      { detention: "6 maanden", fine: "€ 750", drivingBan: "24 uur" },
      { detention: "10 maanden", fine: "€ 1.250", drivingBan: "48 uur" },
      { detention: "15 maanden", fine: "€ 2.000", drivingBan: "72 uur" },
    ),
  },
  {
    number: "V-04",
    slug: "ongeval-licht-letsel",
    title: "Veroorzaken van een ongeval met licht letsel",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 600", drivingBan: "24 uur" },
      { detention: "8 maanden", fine: "€ 900", drivingBan: "48 uur" },
      { detention: "12 maanden", fine: "€ 1.400", drivingBan: "72 uur" },
    ),
  },
  {
    number: "V-05",
    slug: "ongeval-zwaar-letsel",
    title: "Veroorzaken van een ongeval met zwaar letsel",
    rows: repeatRows(
      { detention: "12 maanden", fine: "€ 1.000", drivingBan: "48 uur" },
      { detention: "18 maanden", fine: "€ 1.500", drivingBan: "72 uur" },
      { detention: "24 maanden", fine: "€ 2.500", drivingBan: "120 uur" },
    ),
  },
  {
    number: "V-06",
    slug: "ongeval-dodelijke-afloop",
    title: "Veroorzaken van een ongeval met dodelijke afloop",
    rows: repeatRows(
      { detention: "24 maanden", fine: "€ 1.500", drivingBan: "72 uur" },
      { detention: "36 maanden", fine: "€ 2.500", drivingBan: "120 uur" },
      { detention: "48 maanden", fine: "€ 4.000", drivingBan: "168 uur" },
    ),
  },
  {
    number: "V-07",
    slug: "verlaten-plaats-ongeval",
    title: "Verlaten van de plaats van een ongeval",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 500", drivingBan: "24 uur" },
      { detention: "8 maanden", fine: "€ 850", drivingBan: "48 uur" },
      { detention: "12 maanden", fine: "€ 1.250", drivingBan: "72 uur" },
    ),
  },
  {
    number: "V-08",
    slug: "rijden-onder-invloed",
    title: "Rijden onder invloed",
    rows: repeatRows(
      { detention: "4 maanden", fine: "€ 500", drivingBan: "24 uur" },
      { detention: "8 maanden", fine: "€ 850", drivingBan: "48 uur" },
      { detention: "12 maanden", fine: "€ 1.250", drivingBan: "96 uur" },
    ),
  },
  {
    number: "V-09",
    slug: "rijden-zonder-bevoegdheid",
    title: "Rijden zonder geldige rijbevoegdheid",
    rows: repeatRows(
      { fine: "€ 430", drivingBan: "24 uur" },
      { detention: "2 maanden", fine: "€ 650", drivingBan: "48 uur" },
      {
        detention: "4 maanden",
        fine: "€ 900",
        drivingBan: "72 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
    ),
  },
  {
    number: "V-10",
    slug: "fout-parkeren",
    title: "Fout parkeren",
    rows: [{ offense: "Per constatering", fine: "€ 120" }],
  },
  {
    number: "V-11",
    slug: "snelheid-binnen-bebouwde-kom",
    title: "Snelheidsovertredingen binnen de bebouwde kom",
    rows: [
      { offense: "6–10 km/u te hard", fine: "€ 60" },
      { offense: "11–20 km/u te hard", fine: "€ 150" },
      { offense: "21–30 km/u te hard", fine: "€ 280" },
      { offense: "31–40 km/u te hard", fine: "€ 420", drivingBan: "12 uur" },
      { offense: "41–50 km/u te hard", fine: "€ 600", drivingBan: "24 uur" },
      { offense: "51–60 km/u te hard", fine: "€ 850", drivingBan: "48 uur" },
      {
        offense: "61–70 km/u te hard",
        detention: "4 maanden",
        fine: "€ 1.100",
        drivingBan: "72 uur",
      },
      {
        offense: "71–80 km/u te hard",
        detention: "6 maanden",
        fine: "€ 1.400",
        drivingBan: "96 uur",
      },
      {
        offense: "81–90 km/u te hard",
        detention: "8 maanden",
        fine: "€ 1.750",
        drivingBan: "120 uur",
      },
      {
        offense: "91–100 km/u te hard",
        detention: "10 maanden",
        fine: "€ 2.100",
        drivingBan: "168 uur",
      },
      {
        offense: "101–125 km/u te hard",
        detention: "15 maanden",
        fine: "€ 2.750",
        drivingBan: "240 uur",
      },
      {
        offense: "126–150 km/u te hard",
        detention: "20 maanden",
        fine: "€ 3.500",
        drivingBan: "336 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
      {
        offense: "Meer dan 150 km/u te hard",
        detention: "30 maanden",
        fine: "€ 4.500",
        drivingBan: "720 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
    ],
  },
  {
    number: "V-12",
    slug: "snelheid-buiten-bebouwde-kom",
    title: "Snelheidsovertredingen buiten de bebouwde kom",
    rows: [
      { offense: "6–10 km/u te hard", fine: "€ 50" },
      { offense: "11–20 km/u te hard", fine: "€ 130" },
      { offense: "21–30 km/u te hard", fine: "€ 250" },
      { offense: "31–40 km/u te hard", fine: "€ 380" },
      { offense: "41–50 km/u te hard", fine: "€ 520", drivingBan: "12 uur" },
      { offense: "51–60 km/u te hard", fine: "€ 700", drivingBan: "24 uur" },
      { offense: "61–70 km/u te hard", fine: "€ 950", drivingBan: "48 uur" },
      {
        offense: "71–80 km/u te hard",
        detention: "4 maanden",
        fine: "€ 1.200",
        drivingBan: "72 uur",
      },
      {
        offense: "81–90 km/u te hard",
        detention: "6 maanden",
        fine: "€ 1.500",
        drivingBan: "96 uur",
      },
      {
        offense: "91–100 km/u te hard",
        detention: "8 maanden",
        fine: "€ 1.850",
        drivingBan: "120 uur",
      },
      {
        offense: "101–125 km/u te hard",
        detention: "12 maanden",
        fine: "€ 2.400",
        drivingBan: "168 uur",
      },
      {
        offense: "126–150 km/u te hard",
        detention: "16 maanden",
        fine: "€ 3.000",
        drivingBan: "240 uur",
      },
      {
        offense: "151–175 km/u te hard",
        detention: "20 maanden",
        fine: "€ 3.600",
        drivingBan: "336 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
      {
        offense: "176–200 km/u te hard",
        detention: "25 maanden",
        fine: "€ 4.200",
        drivingBan: "504 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
      {
        offense: "Meer dan 200 km/u te hard",
        detention: "30 maanden",
        fine: "€ 5.000",
        drivingBan: "720 uur",
        measure: "Voertuig kan in beslag worden genomen",
      },
    ],
  },
  {
    number: "V-13",
    slug: "rijden-met-wok-status",
    title: "Rijden met WOK-status",
    rows: repeatRows(
      { measure: "Waarschuwing en voertuig buiten gebruik" },
      { fine: "€ 250", measure: "Voertuig buiten gebruik" },
      {
        fine: "€ 450",
        drivingBan: "24 uur",
        measure: "Voertuig in beslag",
      },
    ),
  },
  {
    number: "V-14",
    slug: "rijden-zonder-kentekenplaten",
    title: "Rijden zonder kentekenplaten",
    rows: repeatRows(
      { fine: "€ 250", measure: "WOK-status" },
      { fine: "€ 400", measure: "WOK-status" },
      { fine: "€ 650", drivingBan: "24 uur", measure: "Voertuig in beslag" },
    ),
  },
  {
    number: "V-15",
    slug: "te-donker-getinte-ramen",
    title: "Ramen die te donker zijn getint",
    rows: [{ offense: "Per constatering", fine: "€ 180", measure: "WOK-status" }],
  },
  {
    number: "V-16",
    slug: "neonverlichting",
    title: "Niet-toegestane neonverlichting onder een voertuig",
    rows: [{ offense: "Per constatering", fine: "€ 180", measure: "WOK-status" }],
  },
  {
    number: "V-17",
    slug: "verkeerde-kleur-verlichting",
    title: "Voertuigverlichting met een niet-toegestane kleur",
    rows: [{ offense: "Per constatering", fine: "€ 300", measure: "WOK-status" }],
  },
  {
    number: "V-18",
    slug: "blokkeren-weg",
    title: "Blokkeren van de openbare weg",
    rows: [{ offense: "Per constatering", fine: "€ 300", measure: "Voertuig kan worden weggesleept" }],
  },
  {
    number: "V-19",
    slug: "verboden-u-turn",
    title: "Keren waar dit niet is toegestaan",
    rows: [{ offense: "Per constatering", fine: "€ 180" }],
  },
  {
    number: "V-20",
    slug: "niet-toegestaan-voertuig",
    title: "Rijden in een niet-toegestaan voertuig",
    rows: [{ offense: "Per constatering", fine: "€ 500", measure: "Voertuig in beslag" }],
  },
  {
    number: "V-21",
    slug: "burnout",
    title: "Een burnout uitvoeren op de openbare weg",
    rows: [{ offense: "Per constatering", fine: "€ 300" }],
  },
  {
    number: "V-22",
    slug: "onnodig-claxonneren",
    title: "Onnodig claxonneren",
    rows: [{ offense: "Per constatering", fine: "€ 120" }],
  },
  {
    number: "V-23",
    slug: "doorgetrokken-streep",
    title: "Overschrijden van een doorgetrokken streep",
    rows: [{ offense: "Per constatering", fine: "€ 300" }],
  },
  {
    number: "V-24",
    slug: "spookrijden",
    title: "Spookrijden",
    rows: [{ offense: "Per constatering", detention: "2 maanden", fine: "€ 450", drivingBan: "12 uur" }],
  },
  {
    number: "V-25",
    slug: "illegaal-offroad",
    title: "Rijden buiten toegestane wegen of terreinen",
    rows: [{ offense: "Per constatering", fine: "€ 180" }],
  },
  {
    number: "V-26",
    slug: "verboden-stilstaan",
    title: "Stilstaan waar dit niet is toegestaan",
    rows: [{ offense: "Per constatering", fine: "€ 120" }],
  },
  {
    number: "V-27",
    slug: "onnodig-links-rijden",
    title: "Onnodig links rijden",
    rows: [{ offense: "Per constatering", fine: "€ 280" }],
  },
  {
    number: "V-28",
    slug: "stopbord-negeren",
    title: "Een stopbord negeren",
    rows: [{ offense: "Per constatering", fine: "€ 300" }],
  },
];
