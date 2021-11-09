import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { Nota } from 'src/app/models/nota.model';
import {listaCurso} from '../../FAKE_BD';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  listaCurso:Array<Curso>;
  constructor() { 
    this.listaCurso=listaCurso;
  }
  public getAllListaCurso():Array<Curso>{
    let listaRetorno=this.listaCurso;
    listaRetorno.forEach((valor, índice) => {
      valor.promedio=this.getPromedio(valor.notas);
    });
    return listaRetorno;
  }
  public getCursoPorID(idCurso:number):Curso{
    let cursoRetorno:any=this.listaCurso.find(obj=>obj._id==idCurso);
    cursoRetorno.promedio=this.getPromedio(cursoRetorno?.notas);
    return cursoRetorno;
  }
  private getPromedio(listaNotas:any):number{
    let promedio=0;
    for (let i = 0; i < listaNotas.length; i++) {
      promedio+=listaNotas[i].nota * listaNotas[i].porcentaje;
    }
    return promedio;
  }
  private getIdCursoDisponible():number{
    return this.listaCurso[this.listaCurso.length-1]._id+1;
  }
  public addCurso(nombre:string,promedio:number,nuevaNota:Array<Nota>):boolean{
    if(this.listaCurso.find(obj=>obj.nombre==nombre)===null || this.listaCurso.find(obj=>obj.nombre===nombre)===undefined){
      // en una bd se generaria automaticamente, pero acá tendremos que buscar una disponible
      let newId=this.getIdCursoDisponible();
      let nuevoCurso:Curso={_id:newId, nombre:nombre, promedio:promedio, notas:nuevaNota};
      this.listaCurso.push(nuevoCurso);
      return true;
    }
    return false;
  }
  public UpdateCurso(idCurso:number,nombre:string,promedio:number,nuevaNota:Array<Nota>){
    let nuevoCurso:Curso={_id:idCurso, nombre:nombre, promedio:promedio, notas:nuevaNota};
    let curso:any=this.listaCurso.find(obj=>obj._id==idCurso);
    curso.notas=nuevaNota;
    curso.nombre=nombre;
    curso=nuevoCurso;
  }
}
