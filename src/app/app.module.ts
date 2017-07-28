import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UserBlockComponent } from './header/user-block.component';
import { SocialLinksComponent } from './header/social-links.component';
import { RegistrationBlockComponent } from './header/registration-block.component';

import { NavigationComponent } from './navigation/navigation.component';

import { FilterComponent } from './filter/filter.component';
import { FooterModule } from './footer/footer.module';
import { WeofferModule } from './weoffer/weoffer.module';

import { AdModule } from './ad/ad.module';
import { PersonalModule } from './personal/personal.module';
import { PopularModule } from './popular/popular.module';


import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';

//popup
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
// import { CustomModal } from './header/custom-modal-sample';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent,
    // CustomModal,
    UserBlockComponent,
    RegistrationBlockComponent,
    NavigationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    WeofferModule,
    PersonalModule,
    PopularModule,
    AdModule,
    RoutingModule,
    ModalModule.forRoot(),
    // RouterModule.forRoot([
    // {
    //   path: 'registration',
    //   component: RegistrationBlockComponent
    // },
    // {
    //   path: '',
    //   component: FilterComponent
    // }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ CustomModal ]
})
export class AppModule { }
