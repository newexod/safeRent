import { NgModule } from '@angular/core';
import { Postedapart } from './postedapart.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [
   Postedapart
  ],
exports: [
    Postedapart
    ],
imports: [
    CommonModule
   ],
})

export  class PostedapartModule {}
