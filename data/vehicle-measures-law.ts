export type LawTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
};

export const vehicleMeasureTables: LawTable[] = [
  {
    title: "Overtredingen die een strike geven",
    description:
      "Een strike is bedoeld voor ernstige of herhaalde voertuigmisstanden. Toekenning moet altijd worden vastgelegd met reden en kenteken.",
    columns: ["Overtreding", "Strike"],
    rows: [
      ["Straatracen op de openbare weg", "+1"],
      ["Vluchten voor politie in een voertuig", "+1"],
      ["Rijden onder zware invloed van alcohol of drugs", "+1"],
      ["Meerdere vluchtpogingen binnen korte periode", "+1"],
      ["Opzettelijk inrijden op een burger of overheidsfunctionaris", "+1"],
      ["Overval waarbij het voertuig als vlucht- of uitvoeringsmiddel is gebruikt", "+1"],
      ["Voertuig gebruikt bij een schietpartij of zwaar geweldsincident", "+1"],
      ["Aanvullende strike door command of hoger bij aantoonbaar zwaar misbruik", "+1"],
    ],
  },
  {
    title: "Gevolgen van strikes",
    description:
      "Strikes horen bij het voertuig, niet alleen bij de bestuurder. Bij verhuur, uitlenen of delen blijft de eigenaar verantwoordelijk voor het gebruik.",
    columns: ["Aantal strikes", "Actie"],
    rows: [
      ["1 strike", "Officiele waarschuwing en registratie"],
      ["2 strikes", "Laatste waarschuwing en verhoogde controle"],
      ["3 strikes", "Voertuig permanent ingenomen en later geveild"],
    ],
  },
  {
    title: "Samenvatting voertuigmaatregelen",
    columns: ["Situatie", "Consequentie"],
    rows: [
      ["3 strikes", "Voertuig permanent ingenomen en later geveild"],
      ["Palm Coin voertuig", "1 week ingenomen en waarde terugbetalen bij vrijgave"],
      ["Echt geld voertuig", "1 week ingenomen; geen terugbetaling van aankoopwaarde"],
      ["1 Palm Coin", "Waarde vastgesteld op € 30.000 binnen de stadseconomie"],
      ["€ 1 donatiewaarde", "Waarde vastgesteld op € 25.000 binnen de stadseconomie"],
    ],
  },
  {
    title: "Rijontzeggingen",
    description:
      "Een rijontzegging wordt zwaarder bij gevaar, letsel, alcohol, drugs, vluchtgedrag of herhaling. De genoemde duur is de richtlijn.",
    columns: ["Categorie", "Reden", "Rijontzegging"],
    rows: [
      ["Licht", "20 tot 40 km/u te hard", "12 tot 24 uur"],
      ["Licht", "Door rood rijden met gevaar of hinder", "24 uur"],
      ["Licht", "Gevaarlijk rijgedrag zonder letsel", "24 uur"],
      ["Middel", "40 tot 80 km/u te hard", "2 dagen"],
      ["Middel", "Straatracen", "3 dagen"],
      ["Middel", "Doorrijden na ongeval zonder zwaar letsel", "3 dagen"],
      ["Middel", "Offroad rijden in druk of kwetsbaar gebied", "1 tot 2 dagen"],
      ["Middel", "Rijden zonder geldig rijbewijs", "3 dagen"],
      ["Zwaar", "80+ km/u te hard", "5 dagen"],
      ["Zwaar", "Roekeloos rijgedrag met letsel", "5 dagen"],
      ["Zwaar", "Vluchten voor politie in een voertuig", "5 tot 7 dagen"],
      ["Zwaar", "Rijden onder lichte invloed van alcohol", "3 dagen"],
      ["Zwaar", "Rijden onder zware invloed van alcohol of drugs", "7 dagen"],
      ["Extreem", "Dodelijk verkeersongeval door schuld", "14 dagen"],
      ["Extreem", "Meerdere vluchtpogingen binnen korte periode", "10 dagen"],
      ["Extreem", "Opzettelijk inrijden op burger of overheidsfunctionaris", "14 dagen"],
      ["Tijdens ontzegging", "Rijden tijdens actieve rijontzegging", "+7 dagen bovenop resterende duur"],
    ],
  },
  {
    title: "Voertuig inbeslagname",
    description:
      "Inbeslagname kan dienen voor verkeersveiligheid, bewijsvoering, onttrekking aan het verkeer of het veiligstellen van crimineel verkregen voordeel.",
    columns: ["Categorie", "Reden of situatie", "Duur inbeslagname"],
    rows: [
      ["Licht", "Illegaal of hinderlijk parkeren", "1 uur of tot wegsleepkosten zijn voldaan"],
      ["Licht", "Geen duidelijk kenteken of ongeldige registratie", "24 uur of tot registratie is hersteld"],
      ["Licht", "20 tot 40 km/u te hard met staandehouding", "1 tot 2 uur"],
      ["Middel", "40 tot 80 km/u te hard", "8 uur"],
      ["Middel", "Straatracen", "24 tot 48 uur"],
      ["Middel", "Doorrijden na ongeval", "24 uur"],
      ["Middel", "Rijden zonder geldig rijbewijs", "24 uur"],
      ["Zwaar", "Vluchten voor politie", "24 tot 48 uur"],
      ["Zwaar", "Rijden onder invloed van alcohol of drugs", "24 tot 48 uur"],
      ["Zwaar", "Rijden tijdens actieve rijontzegging", "48 uur"],
      ["Zwaar", "Drugsverkoop of transport vanuit voertuig", "48 tot 72 uur"],
      ["Crimineel", "Winkeloverval", "24 tot 48 uur"],
      ["Crimineel", "Woningoverval", "24 tot 48 uur"],
      ["Crimineel", "Banktruckoverval", "3 dagen"],
      ["Crimineel", "Bank of juwelier", "4 dagen"],
      ["Crimineel", "Paleto Bank", "5 dagen"],
      ["Crimineel", "Pacific Bank", "7 dagen"],
      ["Extreem", "Voertuig gebruikt bij schietpartij of geweld tijdens overval", "5 tot 7 dagen"],
      ["Extreem", "Opzettelijk inrijden op burger of overheidsfunctionaris", "7 dagen"],
      ["Extreem", "Voertuig gebruikt bij moord of zware liquidatie", "7 dagen of langer na rechterlijke toetsing"],
      ["Administratief", "Illegale straatrace, drag race of stuntlocatie", "12 tot 24 uur"],
      ["Administratief", "Voertuig zwaar beschadigd of onveilig voor verkeer", "12 tot 24 uur of tot herstel"],
      ["Administratief", "Bewijsvoering of lopend onderzoek", "24 tot 72 uur, verlengbaar bij onderzoek"],
    ],
  },
];
