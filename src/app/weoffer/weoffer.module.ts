import { NgModule } from '@angular/core';
import { Weoffer } from './weoffer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   Weoffer
  ],
  exports:
   [
    Weoffer
   ],
  imports: 
  [
    RouterModule
   ]
})

export  class WeofferModule { }
