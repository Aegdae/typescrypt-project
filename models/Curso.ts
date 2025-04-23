import Nivel from "./enums";

abstract class Cursos {
    public titulo: string
    protected cargaHorario: number;
    protected nivel: Nivel;
    constructor(titulo: string, cHoraria: number, nivel: Nivel){
        this.titulo = titulo;
        this.cargaHorario = cHoraria;
        this.nivel = nivel;
    }

    abstract set descricao(text: string);
}

class CursoFrontEnd extends Cursos {
    protected desc?: string
    constructor(titulo: string, cargaHorario: number, nivel: Nivel, desc?: string){
        super(titulo, cargaHorario, nivel)
    }

    set descricao(text:string){
        this.desc = text
    }
}

class CursoBackEnd extends Cursos {
    protected desc?: string 
    constructor(titulo: string, cargaHorario: number, nivel: Nivel, desc?: string){
        super(titulo, cargaHorario, nivel)
    }

    set descricao(text: string) {
        this.desc = text;
    }
}

export {CursoFrontEnd, CursoBackEnd}