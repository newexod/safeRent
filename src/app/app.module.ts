import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
// import { UserBlockComponent } from './header/user-block.component';
import { SocialLinksComponent } from './header/social-links.component';
import { RegistrationBlockComponent } from './header/registration-block.component';

import { NavigationComponent } from './navigation/navigation.component';

import { FilterComponent } from './filter/filter.component';
import { FooterModule } from './footer/footer.module';
import { WeofferModule } from './weoffer/weoffer.module';
import { PopularModule } from './popular/popular.module';

// routing
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';

//popup
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './header/custom-modal-sample';

//main-content
import { MainContentComponent } from './main-content/main-content.component';

// profile
import { MainInfoComponent } from './profile/main-info/main-info.component';
import { EditInfoComponent } from './profile/edit-info/edit-info.component';
import { ProfileComponent } from './profile/profile.component';
import { AdModule } from './ad/ad.module';
import { PersonalModule } from './personal/personal.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent,
    CustomModal,//
    // UserBlockComponent,
    RegistrationBlockComponent,
    NavigationComponent,
    FilterComponent,
    MainContentComponent,
    MainInfoComponent,
    ProfileComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    WeofferModule,
    PopularModule,
    RoutingModule,
    AdModule,
    PersonalModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    // RouterModule.forRoot([
    // {
    //   path: 'registration',
    //   component: RegistrationBlockComponent
    // },
    // {
    //   path: '',
    //   component: MainContentComponent
    // }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ CustomModal ]
})
export class AppModule { }
