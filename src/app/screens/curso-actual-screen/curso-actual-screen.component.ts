import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { Nota } from 'src/app/models/nota.model';
import { CursoServiceService } from 'src/app/services/curso-service/curso-service.service';

@Component({
  selector: 'app-curso-actual-screen',
  templateUrl: './curso-actual-screen.component.html',
  styleUrls: ['./curso-actual-screen.component.scss']
})
export class CursoActualScreenComponent implements OnInit {

  formulario:FormGroup;
  cursoActual:Curso;
  idGenerador:number;
  listaNotas:Array<Nota>=[];
  fomularioCompletado:boolean;
  constructor(private ruta:ActivatedRoute, private cursoservicio:CursoServiceService, private fb:FormBuilder) { 
    this.fomularioCompletado=false;
    this.cursoActual={
      _id:0,nombre:'',promedio:0,notas:[]
    }
    this.ruta.params.subscribe(datos =>{
      this.cursoActual=this.cursoservicio.getCursoPorID(datos["id"]);
    });
    
    this.formulario=this.fb.group({
      nombre:[this.cursoActual.nombre,[]]
    });
    this.idGenerador=0;
    this.cursoActual.notas.forEach((valor, índice) => {
      valor._id=this.idGenerador;
      this.idGenerador++;
    });
    
  }

  ngOnInit(): void {
    this.listaNotas=this.cursoActual.notas;
    //console.log(this.cursoActual);
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
  validar(){
    let countPorcentaje=0;
    let nuevaNota:Array<Nota>=[];
    if(this.listaNotas.length>0){
      this.listaNotas.forEach((valor, índice) => {
        countPorcentaje+=Number(valor.porcentaje);
        nuevaNota.push({_id:0,nota:Number(valor.nota),porcentaje:Number(valor.porcentaje)});
      });
      if(countPorcentaje==1){
        console.log(nuevaNota);
        this.cursoservicio.UpdateCurso(this.cursoActual._id, this.formulario.controls['nombre'].value, 0,nuevaNota);
        this.fomularioCompletado=true;
      }else{
        alert("Los porcentajes deben sumar 1");
      }
      return;
    }
    alert("Agrega notas al curso");
  }
}

