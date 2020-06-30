import { GraficaComponent } from './component/grafica/grafica.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { ContactComponent } from './component/contact/contact.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { RegistrerComponent} from './component/registrer/registrer.component'
import {RegistroComponent} from './component/usuarios/registro/registro.component';
import {LoginComponent} from './component/usuarios/login/login.component';
import {PerfilComponent} from './component/usuarios/perfil/perfil.component';
import {ProductosComponent} from './component/productos/productos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'registrer', component: RegistrerComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'perfil',component:PerfilComponent},
  {path: 'productos',component:ProductosComponent},
  {path: 'grafica',component:GraficaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
