import { NgModule } from '@angular/core';
import { Filter2 } from './filter2.component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@NgModule({
  declarations: [
   Filter2
  ],
  exports:
   [
    Filter2
    ],

  imports: [
    IonRangeSliderModule
   ],
})

export  class Filter2Module { }
