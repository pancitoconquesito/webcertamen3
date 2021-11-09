import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoServiceService } from 'src/app/services/curso-service/curso-service.service';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.scss']
})
export class InicioScreenComponent implements OnInit {

  listaCurso:Array<Curso>=[];
  constructor(private curso_servicio:CursoServiceService) { }

  ngOnInit(): void {
    this.listaCurso=this.curso_servicio.getAllListaCurso();
  }

}
