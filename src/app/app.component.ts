import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  	`
		<app-header></app-header>
		<navigation></navigation>
		<filter></filter>
  	`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
