import { NgModule } from '@angular/core';
import { Ad } from './ad.component';

@NgModule({
  declarations: [
   Ad
  ],
  exports: [
    Ad
    ]
})

export  class AdModule {
 isShow: boolean = false;	
}
