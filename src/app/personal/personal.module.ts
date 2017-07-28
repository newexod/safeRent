import { NgModule } from '@angular/core';
import { Personal } from './personal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   Personal
  ],
  exports: [
    Personal
    ],
    imports: [
    CommonModule
   ]
})

export  class PersonalModule {
 	
}
