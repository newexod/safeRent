import { NgModule } from '@angular/core';
import { AdComponent } from './ad.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [
   AdComponent
  ],
exports: [
    AdComponent
    ],
imports: [
    CommonModule
   ],
})

export  class AdModule {}
