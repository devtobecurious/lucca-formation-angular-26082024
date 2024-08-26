import Film from "./film";
import { Personne } from "./personne";

export type Arrays<T> = T[]

export type Films = Arrays<Film>
export type Personnes = Arrays<Personne>