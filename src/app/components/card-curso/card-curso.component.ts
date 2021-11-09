import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';



@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent implements OnInit {

  @Input() i_curso:Curso;
  colorDiv:string='';
  constructor() { 
    this.i_curso={
      _id:0,
      nombre:'',
      promedio:0,
      notas:[]
    }
  }

  ngOnInit(): void {
    if(this.i_curso.promedio<4.5)this.colorDiv="rojo";
    if(this.i_curso.promedio>=4.5 &&  this.i_curso.promedio<=6)this.colorDiv="amarillo";
  }

}
