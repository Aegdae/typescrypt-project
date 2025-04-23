import { CursoBackEnd, CursoFrontEnd } from "../models/Curso";
import { Alunos } from "../models/Aluno";
import Nivel from "../models/enums";



class SistemaCadastro {

    
    public addAluno(nome: string, idade: number, curso?: CursoBackEnd | CursoFrontEnd ): Alunos {
        let aluno = new Alunos(nome, idade, curso ?? null);
        return aluno
    }

    public addCurso(type: string, titulo:string ,cHoraria:number, nivel:Nivel, desc?:string){
        if (type == "curso backend") {
            let cursoBackEnd = new CursoBackEnd(titulo, cHoraria, nivel, desc??"")
            return cursoBackEnd
        }

        if (type == "curso frontend") {
            let cursoFrontEnd = new CursoFrontEnd(titulo, cHoraria, nivel, desc??"")
            return cursoFrontEnd
        }
    }
        
}

export default SistemaCadastro