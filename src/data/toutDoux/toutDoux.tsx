import { Project } from '../../interfaces/Project';
import img from './toutDoux.png';

export const toutDoux: Project = {
  name: "Tout-doux list",
  year: 2021,
  coverImg: img,
  coverImgAlt: 'Tout-Doux-List Project',
  stack: ['React', 'Redux', 'Sass', 'Firebase'],
  ghLink: 'https://github.com/RaphaelCharousset/tout-doux-list',
  urlLink: 'https://tout-doux-list.surge.sh/',
  description: <p>Réalisation d'une application de type Todo list en React / Redux avec système d'authentification via Firebase</p>
}