import { NgModule } from '@angular/core';
import { Landlord } from './landlord.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
   Landlord
 
  ],
  exports: [
    Landlord],
  imports: [
    CommonModule,
    RouterModule
   ],
})

export  class LandlordModule { }
