import { Component, OnInit, Input, Output } from '@angular/core';

import { SocialLinksComponent } from './social-links.component';
import { UserBlockComponent } from './user-block.component';
import { RegistrationBlockComponent } from './registration-block.component';

@Component({
  selector: 'app-header',
  template: 
  	`
		<header>
			<p class="social">Подписывайтесь</p>
			<social-links></social-links>
			<p class="phone">
				<a href="tel:+38 063 111 23 45">+38 063 111 23 45</a>
			</p>
			<p class="user-block">
				<a href="#" (click)="showUserBlock()">Войти</a>
				<user-block
					*ngIf="showUser"
				></user-block>
			</p>
			<p class="user-block">
				<a href="#" (click)="showRegBlock()">Регистрация</a>
				<registration-block
					*ngIf="showReg"
				></registration-block>
			</p>
		</header>
  	`,
  	styles: 
  		[`
			header {
				display: flex;
				justify-content: space-between;

				text-transform: uppercase;

				background-color: #f0f0f0;
			}
  		`]
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	showUser: boolean = false;
	showReg: boolean = false;

	showUserBlock() {
		this.showUser = !this.showUser;
	}

	showRegBlock() {
		this.showReg = !this.showReg;
	}

  ngOnInit() {
  }


}
