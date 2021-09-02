import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { Error404Component } from './views/error404/error404.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'novocadastro',
    component: FormularioComponent
  },
  {
    path:'novocadastro/:id',
    component: FormularioComponent
  },
  {
    path: 'listagem',
    component: ListagemComponent
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
