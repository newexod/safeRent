import { NgModule } from '@angular/core';
import { Ad } from './ad.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [
   Ad
  ],
exports: [
    Ad
    ],
imports: [
    CommonModule
   ],
})

export  class AdModule {}
