import { NgModule } from '@angular/core';
import { Popular } from './popular.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   Popular
  ],
  exports: [
    Popular
    ],
  imports: [
    CommonModule
   ],
})

export  class PopularModule { }
