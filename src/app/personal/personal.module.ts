import { NgModule } from '@angular/core';
import { Personal } from './personal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   Personal
  ],
  exports: [
    Personal
    ],
    imports: [
    CommonModule, 
    RouterModule
   ]
})

export  class PersonalModule {
 	
}
