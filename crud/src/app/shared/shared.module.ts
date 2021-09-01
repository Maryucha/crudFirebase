import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErroComponent } from './erro/erro.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ErroComponent
  ]
})
export class SharedModule { }
