import { NgModule } from '@angular/core';
import { Popular } from './popular.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   Popular
  ],
  exports: [
    Popular
    ],
  imports: [
    CommonModule,
    RouterModule
   ],
})

export  class PopularModule { }
