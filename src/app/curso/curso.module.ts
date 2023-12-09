import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCreateComponent } from './curso-create/componets/curso-create/curso-create.component';



@NgModule({
  declarations: [
    CursoCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursoCreateComponent
  ]
})
export class CursoModule { }
