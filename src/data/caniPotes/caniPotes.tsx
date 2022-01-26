import { Project } from '../../interfaces/Project';
import img from './caniPotes.png';

export const canipotes: Project = {
  name: "Cani' Potes",
  year: 2021,
  coverImg: img,
  coverImgAlt: "Cani' Potes project",
  stack: ['React', 'Redux', 'Sass', 'NodeJs', 'Leaflet'],
  ghLink: 'https://github.com/RaphaelCharousset/cani-potes',
  urlLink: 'http://cani-potes.surge.sh/',
  description: <p>Projet de fin d'études, réalisé sur 1 mois dans une équipe de 5 développeurs en méthode Scrum (j'avais le rôle de Lead Dev Front). Site de rencontre pour les propriétaires canins via une carte interactive. <a href="https://youtu.be/jrl_DBlTLyM?t=1509" target='blanck'>Présentation sur Youtube (7 min)</a>
  </p>
}