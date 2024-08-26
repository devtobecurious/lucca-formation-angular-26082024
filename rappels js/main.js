class Orc {
    #taille = 10

    get taille() {
        return this.#taille.toUpperCase()
    }

    set taille(value) {
        this.#taille = value
    }
}

const orc = new Orc()
// orc.taille = "coucou"
orc.taille = 1