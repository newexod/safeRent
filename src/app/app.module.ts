import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UserBlockComponent } from './header/user-block.component';
import { SocialLinksComponent } from './header/social-links.component';
import { RegistrationBlockComponent } from './header/registration-block.component';

import { NavigationComponent } from './navigation/navigation.component';

import { FilterComponent } from './filter/filter.component';
import { FooterModule } from './footer/footer.module';
import { WeofferModule } from './weoffer/weoffer.module';
import { PopularModule } from './popular/popular.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent,
    UserBlockComponent,
    RegistrationBlockComponent,
    NavigationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    WeofferModule,
    PopularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
