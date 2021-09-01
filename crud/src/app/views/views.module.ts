import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListagemComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormularioComponent,
    ListagemComponent,
    HomeComponent,
    Error404Component
  ]
})
export class ViewsModule { }
