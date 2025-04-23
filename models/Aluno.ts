import { CursoBackEnd, CursoFrontEnd } from "./Curso";

export interface IPessoa{
    nome: string;
    idade: number;
    curso?: CursoBackEnd | CursoFrontEnd | null
}

class Alunos {
    protected nome: string;
    protected idade: number;
    protected curso?: CursoBackEnd | CursoFrontEnd | null;
    constructor(nome: string, idade: number, curso?: CursoBackEnd | CursoFrontEnd | null){
        this.nome = nome
        this.idade = idade
        this.curso = curso
    }

    get exibirDados(){
        let aluno: IPessoa = {
            nome: this.nome,
            idade: this.idade,
            curso: this.curso
        }
        const cursoInfo = this.curso ? this.curso.titulo: "Nenhum"
        return `Nome: ${aluno.nome}\nIdade: ${aluno.idade}\nCurso: ${cursoInfo}\n`;
    }

}

export {Alunos}