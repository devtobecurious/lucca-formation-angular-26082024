import {Personne} from './personne'
import Film from './film'

const realisateur = new Personne('Peter', 'Lucas')
const film = new Film('A priori un super film', 2001)
film.realisateurs.push(realisateur)


