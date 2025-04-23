import SistemaCadastro from "./services/Sistema";
import { Alunos } from "./models/Aluno";
import { CursoBackEnd, CursoFrontEnd } from "./models/Curso";
import Nivel from "./models/enums";


const sistema = new SistemaCadastro();

const cursoJava = sistema.addCurso("curso backend", "Java", 300, Nivel.Iniciante);
const cursoC = sistema.addCurso("curso backend", "C", 400, Nivel.Intermediario);
const cursoJavaScript = sistema.addCurso("curso frontend", "JavaScript", 150, Nivel.Avancado);


const alunoJonnathas = sistema.addAluno("Jonnathas", 27, cursoJava);
const alunoJoana = sistema.addAluno("Joana", 49);


cursoJava.descricao = "Curso de Java com Jonnathas"

console.log(cursoJava)


console.log(alunoJonnathas.exibirDados)