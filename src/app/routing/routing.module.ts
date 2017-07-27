import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component'
import { RegistrationBlockComponent } from '../header/registration-block.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/main-page',
		pathMatch: 'full'
	},
	{
		path: 'main-page',
		component: HeaderComponent
	},
	{
		path: 'registration',
		component: RegistrationBlockComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		CommonModule
	],
	exports: [RouterModule],
})

export class RoutingModule {}