import { NgModule } from '@angular/core';
import { Popular } from './popular.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RatingModule} from "ngx-rating";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
   Popular
  ],
  exports: [
    Popular
    ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    FormsModule
   ],
})

export  class PopularModule { }
