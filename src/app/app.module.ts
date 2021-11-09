import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { CursosScreenComponent } from './screens/cursos-screen/cursos-screen.component';
import { CursoActualScreenComponent } from './screens/curso-actual-screen/curso-actual-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InicioScreenComponent,
    CursosScreenComponent,
    CursoActualScreenComponent,
    NavbarComponent,
    FooterComponent,
    CardCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
