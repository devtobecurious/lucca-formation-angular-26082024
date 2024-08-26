import { Personnes } from "./custom-types";

export default class Film {
    private _realisateurs: Personnes = []

    constructor(public libelle: string, public anneeCreation: number) {}

    get realisateurs() {
        return this._realisateurs
    }
}