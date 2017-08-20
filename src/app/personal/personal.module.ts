import { NgModule } from '@angular/core';
import { Personal } from './personal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RatingModule} from "ngx-rating";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
   Personal
  ],
  exports: [
    Personal
    ],
    imports: [
    CommonModule, 
    RouterModule,
    RatingModule,
    FormsModule
   ]
})

export  class PersonalModule {
 	
}
