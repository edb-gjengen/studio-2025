export const translations = {
  no: {
    nav: {
      home: "Hjem",
      program: "Program",
      volunteer: "Bli frivillig",
      about: "Om",
      langSwitch: "English",
      title: "STUDiO 2025",
    },
    hero: {
      title: "Studentfestivalen i Oslo 2025",
      alt: "Studentfestivalen i Oslo Logo",
    },
    faq: {
      title: "Ofte stilte spørsmål",
      q1: "Hvor arrangeres festivalen?",
      a1: 'På <a href="https://neuf.no/praktisk#adkomst">Chateau Neuf</a>, Majorstuen, Oslo',
      q2: "Hvem er festivalen for?",
      a2: "Alle nye og gamle studenter, men arrangementene er åpne for alle som ønsker å delta.",
      q3: "Koster det penger å delta?",
      a3: "Gratis inngang hver dag og nesten alle arrangementene er gratis. Kun 2 arrangementer krever kjøp av billett.",
      q4: "Må jeg har med student ID for å komme inn?",
      a4: "Nei, men generell legitimasjon er påkrevd.",
      q5: "Hva er alder årsgrensen på festivalen?",
      a5: "Alt er ID18+",
    },
    about: {
      title: "Om STUDiO 2025",
      p1: "STUDiO 2025 er en studentfestival som arrangeres under fadderuka i Oslo fra 11. til 15. august på Chateau Neuf.",
      p2: "Det blir sosiale og spennende arrangementer hver dag! Festivalen er for alle nye og gamle studenter i Oslo. Opplev høydepunktet i semesteret - ta med fadderbarna eller vennegjengen, eller kom alene og møt nye venner.",
      p3: "Ikke gå glipp av den største studiekickoffen i Oslo!",
      p4: "Flere av arrangementene våre er gratis, og alt er ID 18+.",
      p5: 'Dersom du ønsker å lære mer om historien til STUDiO, samt Det Norske Studentersamfund kan du leser mer på <a href="https://viteboka.studentersamfundet.no/Studentfestivalen_i_Oslo">Viteboka</a>',
      photoCredit: "Foto:",
    },
    program: {
      today: "Hva skjer i dag?",
      programMore: "For arrangementer etter STUDiO trykk her",
      noProgram: "Ingenting på programmet i dag :(",
    },
    vors: {
      text: "Sett på låta for litt stemning før dere kommer 🔥",
    },
    footer: {
      address: "Slemdalsveien 15, 0369 Oslo",
      org: "Studentfestivalen<br>i Oslo 2025",
      dnsAlt: "Logo for Det Norske Studentersamfund",
      sponsoredBy: "Sponset av",
    },
  },
  en: {
    nav: {
      home: "Home",
      program: "Program",
      volunteer: "Volunteer",
      about: "About",
      langSwitch: "Norsk",
      title: "STUDiO 2025",
    },
    hero: {
      title: "The Student Festival in Oslo 2025",
      alt: "The Student Festival in Oslo Logo",
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Where is the festival being held?",
      a1: 'At <a href="https://neuf.no/praktisk#adkomst">Chateau Neuf</a>, Majorstuen, Oslo',
      q2: "Who is the festival for?",
      a2: "All new and returning students, but the events are open to everyone who wants to join.",
      q3: "Does it cost money?",
      a3: "Free entry every day and almost all events are free. Only 2 events require a ticket.",
      q4: "Do I need a student ID to enter?",
      a4: "No, but general identification is required.",
      q5: "What is the age limit for the festival?",
      a5: "Everything is 18+",
    },
    about: {
      title: "About STUDiO 2025",
      p1: "STUDiO 2025 is a student festival held during the buddy week in Oslo from August 11 to 15 at Chateau Neuf.",
      p2: "There will be social and exciting events every day for new and old students. Bring your buddies, a group of friends or come alone and experience the highlight of the semester.",
      p3: "Don't miss the biggest buddy and semester kickoff in Oslo!",
      p4: "Several of our events are free and everything is ID18+.",
      p5: 'If you want to learn more about the history of STUDiO, as well as The Norwegian Student Society, you can read more on <a href="https://viteboka.studentersamfundet.no/Studentfestivalen_i_Oslo">Viteboka</a>',
      photoCredit: "Photo:",
    },
    program: {
      today: "What's happening today?",
      programMore: "For events after STUDiO click here",
      noProgram: "No events today :(",
    },
    vors: {
      text: "Play the song to get in the mood before you arrive 🔥",
    },
    footer: {
      address: "Slemdalsveien 15, 0369 Oslo",
      org: "Student Festival<br>in Oslo 2025",
      dnsAlt: "Logo for the Norwegian Student Society",
      sponsoredBy: "Sponsored by",
    },
  },
} as const;

export type Lang = keyof typeof translations;
