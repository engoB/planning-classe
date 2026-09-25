/* Emploi du temps CM1 — données
   Second planning de la page. Les journées sont décrites en blocs horaires :
     { d: début, f: fin, m: intitulé, c: famille (couleur), s: repère, n: note }
     { pause: true, d, f, m } pour une récréation ou la pause méridienne.
   Familles : lettres (rituels) · fr (français) · sciences (maths) · bph (sciences
   et technologies) · hg (histoire-géo, EMC) · stss (langues vivantes) ·
   arts (arts et HDA) · eps · accomp (organisation) */

window.EDT_DATA_CM1 = {
  id: "cm1",
  nom: "CM1",
  kind: "blocs",

  meta: {
    etablissement: "Classe de CM1",
    classe: "CM1",
    profPrincipal: "",
    maj: "Rentrée 2026"
  },

  familles: {
    lettres: "Rituels",
    fr: "Français, lecture, écriture",
    sciences: "Numération, calcul, géométrie",
    bph: "Sciences et technologies",
    hg: "Histoire, géographie, EMC",
    stss: "Langues vivantes",
    arts: "Arts et histoire des arts",
    eps: "EPS",
    accomp: "Organisation"
  },

  jours: ["Lundi", "Mardi", "Jeudi", "Vendredi"],
  amplitude: ["08h30", "16h05"],

  // Calendrier officiel zone A — académie de Bordeaux, année 2026-2027.
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

  affaires: {
    "Éducation physique et sportive": ["Tenue de sport", "Baskets"],
    "Arts plastiques": ["Trousse à peinture", "Blouse ou vieux tee-shirt"],
    "Sciences et technologies": ["Cahier de sciences"]
  },

  exceptions: {},

  semaine: {
    Lundi: [
      { d: "08h30", f: "08h45", m: "Rituel — Copie de devoirs", c: "lettres" },
      { d: "08h45", f: "09h00", m: "Correction dictée S7", c: "fr" },
      { d: "09h00", f: "09h45", m: "EDL J1", c: "fr", s: "CM1" },
      { d: "09h45", f: "10h00", m: "Calcul mental", c: "sciences" },
      { pause: true, d: "10h00", f: "10h15", m: "Récréation" },
      { d: "10h15", f: "10h25", m: "Lecture offerte", c: "fr" },
      { d: "10h25", f: "10h45", m: "Dictée flash 1 S4", c: "fr" },
      { d: "10h45", f: "11h25", m: "Numération", c: "sciences", s: "CM1" },
      { d: "11h25", f: "11h45", m: "Productions d’écrits", c: "fr", s: "CM1" },
      { pause: true, d: "11h45", f: "13h20", m: "Pause méridienne" },
      { d: "13h20", f: "14h25", m: "Sciences et technologies", c: "bph" },
      { pause: true, d: "14h25", f: "14h40", m: "Récréation" },
      { d: "14h40", f: "14h55", m: "Silence on lit", c: "fr" },
      { d: "14h55", f: "15h35", m: "Problèmes", c: "sciences", s: "CM1" },
      { d: "15h35", f: "16h05", m: "Ceintures — Plan de travail", c: "sciences" }
    ],
    Mardi: [
      { d: "08h30", f: "08h45", m: "Rituel — Géométrie", c: "lettres" },
      { d: "08h45", f: "09h45", m: "Vocabulaire", c: "fr", s: "CM1" },
      { d: "09h45", f: "10h00", m: "Calcul mental", c: "sciences" },
      { pause: true, d: "10h00", f: "10h15", m: "Récréation" },
      { d: "10h15", f: "10h25", m: "Lecture offerte", c: "fr" },
      { d: "10h25", f: "10h45", m: "Dictée flash 2 S5", c: "fr" },
      { d: "10h45", f: "11h45", m: "Géométrie — Grandeur et mesure", c: "sciences", s: "CM1" },
      { pause: true, d: "11h45", f: "13h20", m: "Pause méridienne" },
      { d: "13h20", f: "14h20", m: "Langues vivantes", c: "stss" },
      { pause: true, d: "14h20", f: "14h35", m: "Récréation" },
      { d: "14h35", f: "14h55", m: "HDA — découverte de l’œuvre S1", c: "arts" },
      { d: "14h55", f: "15h15", m: "Production écrits HDA", c: "fr" },
      { d: "15h15", f: "16h05", m: "Arts plastiques", c: "arts" }
    ],
    Jeudi: [
      { d: "08h30", f: "08h45", m: "Rituel — mon petit rituel", c: "lettres" },
      { d: "08h45", f: "09h00", m: "Rituel — Correction cahier du jour", c: "lettres" },
      { d: "09h00", f: "09h45", m: "EDL J2", c: "fr", s: "CM1" },
      { d: "09h45", f: "10h00", m: "Calcul mental", c: "sciences" },
      { pause: true, d: "10h00", f: "10h15", m: "Récréation" },
      { d: "10h15", f: "10h25", m: "Lecture offerte", c: "fr" },
      { d: "10h25", f: "11h20", m: "Géographie", c: "hg" },
      { d: "11h20", f: "11h45", m: "Enseignement moral et civique", c: "hg" },
      { pause: true, d: "11h45", f: "13h20", m: "Pause méridienne" },
      { d: "13h20", f: "14h25", m: "Histoire", c: "hg" },
      { pause: true, d: "14h25", f: "14h40", m: "Récréation" },
      { d: "14h40", f: "15h15", m: "Données et probabilités", c: "sciences", s: "CM1" },
      { d: "15h15", f: "16h05", m: "Littérature", c: "fr", s: "CM1" }
    ],
    Vendredi: [
      { d: "08h30", f: "08h45", m: "Rituel — Phrase du jour", c: "lettres" },
      { d: "08h45", f: "09h15", m: "Dictée bilan S6", c: "fr" },
      { d: "09h15", f: "10h00", m: "Num / calcul", c: "sciences", s: "CM1" },
      { pause: true, d: "10h00", f: "10h15", m: "Récréation" },
      { d: "10h15", f: "10h25", m: "Lecture offerte", c: "fr" },
      { d: "10h25", f: "10h40", m: "Calcul mental", c: "sciences" },
      { d: "10h40", f: "11h45", m: "Orthographe — Nouvelle notion", c: "fr", s: "CM1" },
      { pause: true, d: "11h45", f: "13h20", m: "Pause méridienne" },
      { d: "13h20", f: "13h45", m: "Silence on lit", c: "fr" },
      { d: "13h45", f: "14h00", m: "Appropriation des mots S3", c: "fr" },
      { d: "14h00", f: "14h30", m: "Problèmes", c: "sciences" },
      { pause: true, d: "14h30", f: "14h45", m: "Récréation" },
      { d: "14h45", f: "16h05", m: "Éducation physique et sportive", c: "eps" }
    ]
  }
};
