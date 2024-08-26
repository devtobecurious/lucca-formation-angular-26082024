export class Arbre {}

 class Urukhai {}

export default class Orc {
    #taille = 10
   // private force: number = 100
    prenom: string = ''

    // constructor(force: number) {
    //     this.force = force
    // }
    constructor(private force: number) {        
    }

    crier(): void {
        console.info('GROAAR')
    }

    get taille() {
        return this.#taille
    }

    set taille(value) {
        this.#taille = value
    }
}

const orc2 = new Orc(100)