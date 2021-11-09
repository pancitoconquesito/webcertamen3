import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Nota } from 'src/app/models/nota.model';
import { CursoServiceService } from 'src/app/services/curso-service/curso-service.service';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent implements OnInit {
  formulario:FormGroup;
  listaNotas:Array<Nota>=[];
  idGenerador:number;
  fomularioCompletado:boolean;
  constructor(private fb:FormBuilder, private cursoservicio:CursoServiceService) {
    this.formulario=this.fb.group({
      nombre:['',[Validators.required]]
    });
    this.idGenerador=0;
    this.fomularioCompletado=false;
   }

  ngOnInit(): void {
  }
  addNota():void{
    let div=document.getElementById("notas");
    //let 
    this.listaNotas.push({_id:this.idGenerador,nota:0,porcentaje:0});
    this.idGenerador++;
  }
  eliminarNota(idNota:number){
    this.listaNotas=this.listaNotas.filter( x => x._id!=idNota);
  }
  validar():void{
    let countPorcentaje=0;
    let nuevaNota:Array<Nota>=[];
    if(this.listaNotas.length>0){
      this.listaNotas.forEach((valor, índice) => {
        countPorcentaje+=Number(valor.porcentaje);
        nuevaNota.push({_id:0,nota:valor.nota,porcentaje:valor.porcentaje});
      });
      if(countPorcentaje==1){
        
        this.fomularioCompletado=this.cursoservicio.addCurso(this.formulario.controls['nombre'].value, 0,nuevaNota);
        if(!this.fomularioCompletado)alert("Error en la agregacion, asegurese de no repetir nombre de curso existente");
        //OK
      }else{
        alert("Los porcentajes deben sumar 1");
      }
      return;
    }
    alert("Agrega notas al curso");
  }
}
