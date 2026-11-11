class Personaje
{
    constructor(Nombre, Vida, Ataque, Defensa){
        this.Nombre = Nombre
        this.Vida = Vida
        this.Ataque = Ataque
        this.Defensa = Defensa
        this.Nivel = Nivel
    }
}

const Personaje = new Personaje({
    Nombre: "NaviVani",
    Vida: 500,
    Ataque: 120,
    Defensa: 60,
    Nivel: 100
})