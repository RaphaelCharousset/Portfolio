import { Project } from '../../interfaces/Project'
import img from './portfolio.png'

export const portfolio: Project = {
  name: "Portfolio",
  year: 2022,
  coverImg: img,
  coverImgAlt: "Portfolio project",
  stack: ['REACT', 'TYPESCRIPT', 'SCSS', 'EMAILJS'],
  ghLink: 'https://github.com/RaphaelCharousset/Portfolio',
  urlLink: 'https://www.raphael-charousset.fr/',
  description: <p>Réalisation du design et du développement de mon portfolio. J'ai utilisé les librairies React et Typescript pour le JS, EmailJS pour la gestion d'envoie de mail. Le design est fait avec SCSS uniquement.</p>
}