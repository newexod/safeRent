import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  	`
		<app-header></app-header>
		<navigation></navigation>
		<filter></filter>
    <ad-root></ad-root>
    <popular-root></popular-root>
		<weoffer-root></weoffer-root>
		<footer-root></footer-root>
  	`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
