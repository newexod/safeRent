import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'contacts',
	templateUrl: 'contacts.component.html',
	styleUrls: ['contacts.component.css']
})

export class ContactsComponent {
	zoom: number = 18;
	lat: number = 46.479658;
	lng: number = 30.747902;

	constructor() {}
}