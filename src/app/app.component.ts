import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: 'main.html',
  // template: 
  // 	`
		// <header></header>
		// <navigation></navigation>
		// <filter></filter>
  //   <popular-root></popular-root>
		// <weoffer-root></weoffer-root>
		// <footer-root></footer-root>
  // 	`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
}
