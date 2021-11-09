import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoActualScreenComponent } from './screens/curso-actual-screen/curso-actual-screen.component';
import { CursosScreenComponent } from './screens/cursos-screen/cursos-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioScreenComponent},
  {path:'curso_creacion', component:CursosScreenComponent},
  {path:'curso_edicion/:id', component:CursoActualScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
