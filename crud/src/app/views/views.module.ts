import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    FormularioComponent,
    ListagemComponent,
    HomeComponent,
    Error404Component,
    EditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    FormularioComponent,
    ListagemComponent,
    HomeComponent,
    Error404Component,
    EditComponent
  ]
})
export class ViewsModule { }
