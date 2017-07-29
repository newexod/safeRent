import { Component, OnInit, Input, Output, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal-sample';

import { SocialLinksComponent } from './social-links.component';
// import { UserBlockComponent } from './user-block.component';
import { RegistrationBlockComponent } from './registration-block.component';

// <p class="user-block">
// 	<a href="#" (click)="showRegBlock()">Регистрация</a>
// 	<registration-block
// 		*ngIf="showReg"
// 	></registration-block>
// </p>


// <p class="user-block">
// 	<a href="#" (click)="showUserBlock()">Войти</a>
// 	<user-block
// 		*ngIf="showUser"
// 	></user-block>
// </p>



@Component({
  selector: 'header',
  template: 
  	`
		<p class="social">Подписывайтесь</p>
		<social-links></social-links>
		<p class="phone">
			<a href="tel:+38 063 111 23 45">+38 063 111 23 45</a>
		</p>
		

		
		<button (click)="onClick()">Войти</button>
		
		


		<nav>
			<a routerLink="/registration">Регистрация</a>
		</nav>
  	`,
  	providers: [Modal]
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


	constructor(public modal: Modal) {}

	// get version(): string {
	// 	return window.angular2ModalVer;
	// }

	onClick() {
		this.modal.alert()
			.size('lg')
			.showClose(true)
			.title('Авторизация')
			.body(`
				<div class="login-group">
				  <input type="email" class="login-control" name="mail" placeholder="Адрес электронной почты" required>
				</div>
				<div class="login-group">
				  <input type="password" class="login-control" name="password" placeholder="Пароль" required>
				</div>
				<div class="login-group">
				  <button (click)="addLogin()">Войти</button>
				</div>
			`)
			.open();
	}


  ngOnInit() {
  }


}
