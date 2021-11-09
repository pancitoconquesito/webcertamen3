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
  constructor(private ruta:ActivatedRoute, private cursoservicio:CursoServiceService, private fb:FormBuilder) { 
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

  }
}
