import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component'
import { RegistrationBlockComponent } from '../header/registration-block.component';
import { FilterComponent } from '../filter/filter.component';
import { Popular } from '../popular/popular.component';
import { Weoffer } from '../weoffer/weoffer.component';

import { MainInfoComponent } from '../profile/main-info/main-info.component';

import { MainContentComponent } from '../main-content/main-content.component';
import { ProfileComponent } from '../profile/profile.component';
import { AdComponent } from '../ad/ad.component';
import { Personal } from '../personal/personal.component';
import { Postedapart } from '../postedapart/postedapart.component';
import { Postedapartuser } from '../postedapartuser/postedapartuser.component';


import { ContactsComponent } from '../contacts/contacts.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/main-page',
		pathMatch: 'full'
	},
	{
		path: 'main-page',
		component: MainContentComponent
	},
	{
		path: 'registration',
		component: RegistrationBlockComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{	path: 'advert',
		component: AdComponent

	},
	{
		path: 'personalInfo',
		component:Personal
	},
	{
		path: 'poster',
		component: Postedapart
	},
	{
		path: 'contacts',
		component: ContactsComponent
	},
	{
		path: 'about-us',
		component: AboutUsComponent
	},
	{
		path: 'posterUser',
		component: Postedapartuser
	}
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		CommonModule
	],
	exports: [RouterModule],
})

export class RoutingModule {}