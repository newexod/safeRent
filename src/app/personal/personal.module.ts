import { NgModule } from '@angular/core';
import { Personal } from './personal.component';

@NgModule({
  declarations: [
   Personal
  ],
  exports: [
    Personal
    ]
})

export  class PersonalModule {
 isShow: boolean = false;	
}
