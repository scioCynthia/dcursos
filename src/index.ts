import { Curso } from "./curso";
import { deleteCurso, getCurso, Repos } from "./repos";

let repos = new Repos();
let curso: Curso = {
    id: 1,
    nameCur: 'nombre del curso',
    creditos: 1,
    descripCur: 'descripción del curso',
    numAlumnos:1,

}
repos.addCurso( curso);

deleteCurso(curso.id);

let i = getCurso(0);