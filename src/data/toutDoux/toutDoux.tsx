import { Project } from '../../interfaces/Project';
import img from './toutDoux.png';

export const toutDoux: Project = {
  name: "Tout-doux list",
  year: 2021,
  coverImg: img,
  coverImgAlt: 'Tout-Doux-List Project',
  stack: ['React', 'Redux', 'SASS', 'Firebase'],
  ghLink: 'https://github.com/RaphaelCharousset/tout-doux-list',
  urlLink: 'https://tout-doux-list.surge.sh/',
  description: "Réalisation d'une application de type Todo list en React / Redux avec système d'authentification via Firebase"
}