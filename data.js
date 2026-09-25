/* Emploi du temps 3e B (démonstration) — données
   Ce fichier est le seul endroit à modifier pour corriger le contenu.
   Le bouton « Enregistrer » de la page régénère ce fichier : il suffit de le
   remplacer dans le dépôt pour publier les corrections.

   Une case peut prendre trois formes :
     null                          → créneau libre
     "SUITE"                       → occupée par le cours de la case du dessus
     { m, p, s, c, span, n }       → cours pour la classe entière
     { gr: true, span, A: …, B: … }→ cours dédoublé : une version par groupe,
                                     chaque version étant un objet { m, p, s, c, n }
                                     ou null si le groupe n'a pas cours.

   m = matière · p = professeur · s = salle · c = famille (couleur)
   span = nombre de créneaux occupés · n = note libre
   Familles : lettres, maths, hg, langues, bph (SVT), sciences (physique-chimie), stss (technologie), arts, eps, accomp
*/

window.EDT_DATA = {
  // Noms des familles de couleurs affichés dans la légende et l'éditeur
  familles: {
    lettres: "Français", maths: "Mathématiques", hg: "Histoire-géo & EMC", langues: "Langues vivantes",
    bph: "SVT", sciences: "Physique-chimie", stss: "Technologie", arts: "Arts & musique",
    eps: "EPS", accomp: "Accompagnement & vie de classe"
  },

  meta: {
    etablissement: "Collège des Petits Génies — démo",
    classe: "3e B",
    profPrincipal: "M. PYTHAGORE",
    groupe: "Groupe A",
    maj: "Rentrée 2026"
  },

  creneaux: [
    ["08h15", "09h10"],
    ["09h10", "10h05"],
    ["10h25", "11h20"],
    ["11h20", "12h15"],
    ["13h35", "14h30"],
    ["14h30", "15h25"],
    ["15h40", "16h35"],
    ["16h35", "17h30"]
  ],

  jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],

  pause: { debut: "12h15", fin: "13h35", libelle: "Pause méridienne" },

  // Calendrier officiel zone A — académie de Bordeaux, année 2026-2027.
  // « debut » et « fin » sont les premier et dernier jours sans cours.
  calendrier: {
    zone: "Zone A — académie de Bordeaux",
    rentree: "2026-09-01",
    finAnnee: "2027-07-02",
    vacances: [
      { nom: "Vacances de la Toussaint", debut: "2026-10-17", fin: "2026-11-01" },
      { nom: "Vacances de Noël", debut: "2026-12-19", fin: "2027-01-03" },
      { nom: "Vacances d’hiver", debut: "2027-02-13", fin: "2027-02-28" },
      { nom: "Vacances de printemps", debut: "2027-04-10", fin: "2027-04-25" },
      { nom: "Pont de l’Ascension", debut: "2027-05-06", fin: "2027-05-09" },
      { nom: "Vacances d’été", debut: "2027-07-03", fin: "2027-08-31" }
    ],
    feries: [
      { nom: "Armistice 1918", date: "2026-11-11" },
      { nom: "Lundi de Pâques", date: "2027-03-29" },
      { nom: "Lundi de Pentecôte", date: "2027-05-17" }
    ]
  },

  // Affaires à prévoir, par matière. Modifiable depuis le bouton « Affaires ».
  affaires: {
    "EPS": ["Tenue de sport", "Baskets propres", "Gourde"],
    "TP Physique-chimie": ["Blouse en coton"],
    "Mathématiques": ["Calculatrice", "Équerre et compas"],
    "Arts plastiques": ["Tablier ou vieux t-shirt"],
    "Devoir surveillé": ["Copies doubles", "Stylo qui marche"]
  },

  // Changements ponctuels, par date : { slot, type: "annule" | "remplace" | "ajout", … }
  exceptions: {},

  recap: [
    {
      "titre": "Enseignements",
      "lignes": [
        {
          "m": "Français",
          "p": "Mme Bescherelle",
          "h": 4.5,
          "c": "lettres"
        },
        {
          "m": "Mathématiques",
          "p": "M. Pythagore",
          "h": 5,
          "c": "maths"
        },
        {
          "m": "Histoire-géographie",
          "p": "M. Vercingétorix",
          "h": 3,
          "c": "hg"
        },
        {
          "m": "Enseignement moral et civique",
          "p": "M. Vercingétorix",
          "h": 0.5,
          "c": "hg"
        },
        {
          "m": "SVT",
          "p": "Mme Darwin",
          "h": 1.5,
          "c": "bph"
        },
        {
          "m": "Physique-chimie",
          "p": "M. Bunsen",
          "h": 1.5,
          "c": "sciences"
        },
        {
          "m": "Technologie",
          "p": "M. Gadget",
          "h": 1.5,
          "c": "stss"
        },
        {
          "m": "EPS",
          "p": "M. Sprint",
          "h": 3,
          "c": "eps"
        }
      ],
      "note": "SVT, technologie et TP de physique-chimie se font en demi-groupes (A et B)."
    },
    {
      "titre": "Langues vivantes",
      "lignes": [
        {
          "m": "Anglais",
          "p": "Mme Shakespeare",
          "h": 3,
          "c": "langues"
        },
        {
          "m": "Espagnol",
          "p": "Mme Tapas",
          "h": 2.5,
          "c": "langues"
        }
      ]
    },
    {
      "titre": "Arts, accompagnement et vie de classe",
      "lignes": [
        {
          "m": "Arts plastiques",
          "p": "Mme Gouache",
          "h": 1,
          "c": "arts"
        },
        {
          "m": "Éducation musicale",
          "p": "M. Solfège",
          "h": 1,
          "c": "arts"
        },
        {
          "m": "Accompagnement personnalisé",
          "p": "Mme Coup-de-Pouce",
          "h": 1,
          "c": "accomp"
        },
        {
          "m": "Vie de classe",
          "p": "M. Pythagore",
          "h": 0.5,
          "c": "accomp"
        }
      ],
      "note": "Toutes les personnes et l'établissement de cette démo sont imaginaires."
    }
  ],

  semaines: {
    A: {
      Lundi: [
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"gr": true, "A": {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"}, "B": {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"}},
        {"gr": true, "A": {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"}, "B": {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"}},
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"},
        {"m": "EPS", "p": "M. Sprint", "s": "Gymnase", "c": "eps", "span": 2},
        "SUITE"
      ],
      Mardi: [
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Espagnol", "p": "Mme Tapas", "s": "S08", "c": "langues"},
        {"m": "Arts plastiques", "p": "Mme Gouache", "s": "Atelier d'art", "c": "arts"},
        {"m": "Éducation musicale", "p": "M. Solfège", "s": "Salle de musique", "c": "arts"},
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"},
        null
      ],
      Mercredi: [
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"},
        null,
        null,
        null,
        null
      ],
      Jeudi: [
        {"gr": true, "A": {"m": "TP Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"}, "B": null},
        {"gr": true, "A": null, "B": {"m": "TP Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"}},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Enseignement moral et civique", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Espagnol", "p": "Mme Tapas", "s": "S08", "c": "langues"},
        {"m": "Accompagnement personnalisé", "p": "Mme Coup-de-Pouce", "s": "CDI", "c": "accomp", "n": "Méthodologie et aide aux devoirs"},
        {"m": "Vie de classe", "p": "M. Pythagore", "s": "S12", "c": "accomp"}
      ],
      Vendredi: [
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"},
        {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "EPS", "p": "M. Sprint", "s": "Gymnase", "c": "eps", "span": 2},
        "SUITE",
        null
      ]
    },

    B: {
      Lundi: [
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"gr": true, "A": {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"}, "B": {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"}},
        {"gr": true, "A": {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"}, "B": {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"}},
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"},
        {"m": "EPS", "p": "M. Sprint", "s": "Gymnase", "c": "eps", "span": 2},
        "SUITE"
      ],
      Mardi: [
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Espagnol", "p": "Mme Tapas", "s": "S08", "c": "langues"},
        {"m": "Arts plastiques", "p": "Mme Gouache", "s": "Atelier d'art", "c": "arts"},
        {"m": "Éducation musicale", "p": "M. Solfège", "s": "Salle de musique", "c": "arts"},
        {"m": "Devoir surveillé", "p": "", "s": "S12", "c": "accomp"},
        {"m": "Devoir surveillé", "p": "", "s": "S12", "c": "accomp"}
      ],
      Mercredi: [
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"},
        null,
        null,
        null,
        null
      ],
      Jeudi: [
        {"gr": true, "A": {"m": "TP Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"}, "B": null},
        {"gr": true, "A": null, "B": {"m": "TP Physique-chimie", "p": "M. Bunsen", "s": "Labo 2", "c": "sciences"}},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Enseignement moral et civique", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "Espagnol", "p": "Mme Tapas", "s": "S08", "c": "langues"},
        {"m": "Accompagnement personnalisé", "p": "Mme Coup-de-Pouce", "s": "CDI", "c": "accomp", "n": "Méthodologie et aide aux devoirs"},
        {"m": "Éducation musicale", "p": "M. Solfège", "s": "Salle de musique", "c": "arts"}
      ],
      Vendredi: [
        {"m": "Histoire-géographie", "p": "M. Vercingétorix", "s": "S12", "c": "hg"},
        {"m": "SVT", "p": "Mme Darwin", "s": "Labo 1", "c": "bph"},
        {"m": "Technologie", "p": "M. Gadget", "s": "Atelier", "c": "stss"},
        {"m": "Mathématiques", "p": "M. Pythagore", "s": "S12", "c": "maths"},
        {"m": "Français", "p": "Mme Bescherelle", "s": "S12", "c": "lettres"},
        {"m": "EPS", "p": "M. Sprint", "s": "Gymnase", "c": "eps", "span": 2},
        "SUITE",
        {"m": "Anglais", "p": "Mme Shakespeare", "s": "S07", "c": "langues"}
      ]
    }
  }
};
