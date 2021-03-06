import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SocialLinksComponent } from './header/social-links.component';
import { RegistrationBlockComponent } from './header/registration-block.component';

import { NavigationComponent } from './navigation/navigation.component';

import { FilterComponent } from './filter/filter.component';
import { FooterModule } from './footer/footer.module';
import { WeofferModule } from './weoffer/weoffer.module';
import { PopularModule } from './popular/popular.module';
import { Filter2 } from './filter2/filter2.component';

// routing
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';

//popup
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

//main-content
import { MainContentComponent } from './main-content/main-content.component';

// profile
import { MainInfoComponent } from './profile/main-info/main-info.component';
import { EditInfoComponent } from './profile/edit-info/edit-info.component';
import { ProfileComponent } from './profile/profile.component';

import { AdComponent } from './ad/ad.component';
import { PersonalModule } from './personal/personal.module';
import { AreaModule } from './area/area.module';
import { TotalinfoModule } from './totalinfo/totalinfo.module';
import { LandlordModule } from './landlord/landlord.module';
import { Postedapart } from './postedapart/postedapart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Postedapartuser } from './postedapartuser/postedapartuser.component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import {RatingModule} from "ngx-rating";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent,
    RegistrationBlockComponent,
    AdComponent,
    Postedapartuser,
    NavigationComponent,
    FilterComponent,
    MainContentComponent,
    MainInfoComponent,
    ProfileComponent,
    Postedapart,
    EditInfoComponent,
    ContactsComponent,
    AboutUsComponent,
    Filter2
  ],
  imports: [
    BrowserModule,
    FooterModule,
    WeofferModule,
    PopularModule,
    RoutingModule,
    // AdModule,
    PersonalModule,
    HttpModule,
    AreaModule,
    LandlordModule,
    TotalinfoModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    IonRangeSliderModule,
    RatingModule,
    FormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA9gkB5Ji1Ig7pHwwXIXEm4ABc7jOC9C9Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
