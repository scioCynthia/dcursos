import {Curso} from "./curso";

export class Repos{ //exportar una calse completa
    private cursos : Curso[] = [];

    addCurso( curso: Curso): boolean{
        this.cursos.push(curso);
        return true;
    }
}

 const getCurso = (id: number): Curso =>{
    return{ id: 1, nameCur:'',creditos: 1, descripCur:'', numAlumnos:1};
}//exportar una funcion por separado


export const deleteCurso = (id: number):boolean =>{
    return false;
} //exportar funcion directa

export{getCurso} //complemento- separadoS