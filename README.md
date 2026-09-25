# Planning de classe — un emploi du temps vivant

Un emploi du temps qui sait quel jour on est : le cours en cours, le suivant, et **le temps
restant avant la sonnerie**, en gros. Pour élèves, parents et enseignants. Sans compte, sans
application à installer, sans serveur.

**Démo : https://engob.github.io/planning-classe/** (établissement, classes et professeurs fictifs).

## Ce que ça fait

- **Bandeau du moment** : cours en cours, suivant, compte à rebours avant la fin du cours,
  la reprise ou le prochain cours, mis à jour chaque seconde.
- **Semaines A / B** déduites du calendrier, **groupes A / B**, vacances et jours fériés de la zone.
- **Deux plannings dans une page** (ex. un lycéen et un écolier), avec bascule mémorisée :
  grille à créneaux fixes ou journées en blocs de durées variables.
- **Vue semaine** et **vue jour** pour le téléphone, thème clair / sombre.
- **Affaires à préparer** par matière et récapitulatif des enseignements.
- **Changements ponctuels** (cours annulé, salle changée, devoir) à une date précise, sans toucher à la grille.
- **Mode modification** puis **Publier sur GitHub** : un changement fait sur un appareil apparaît
  sur les autres en moins d'une minute.

## L'adapter

- `data.js` : le planning à créneaux (horaires, jours, cours, professeurs, salles, calendrier).
- `data-cm1.js` : le planning en blocs horaires.
- Ou directement dans la page : **Options → Mode modification**, puis **Publier** avec un jeton
  GitHub fine-grained limité au dépôt (*Contents : Read and write*), ou **Enregistrer** pour
  télécharger le fichier corrigé.

## Confidentialité

Les données restent dans le dépôt de la famille ou de l'enseignant. Le jeton GitHub reste dans le
navigateur et n'est jamais publié.

---

Conçu et développé par [Sébastien Khai](https://engob.github.io/portofolio/) — tous droits réservés.
