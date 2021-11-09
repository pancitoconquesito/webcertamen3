import {Nota} from './nota.model';
//promedio se calcula automaticamente con trigger en bd, pero como se hardcodea se delegara esa tarea a un servicio
export interface Curso{
    _id:number;//pk
    nombre:string;//unique
    promedio:number;
    notas:Array<Nota>;
}
