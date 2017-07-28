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