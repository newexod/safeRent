import { Component, OnInit, Input, Output, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// import { CustomModalContext, CustomModal } from './custom-modal-sample';

import { SocialLinksComponent } from './social-links.component';
import { UserBlockComponent } from './user-block.component';
import { RegistrationBlockComponent } from './registration-block.component';

// <p class="user-block">
// 	<a href="#" (click)="showRegBlock()">Регистрация</a>
// 	<registration-block
// 		*ngIf="showReg"
// 	></registration-block>
// </p>



// <button (click)="onClick()">Войти</button>


@Component({
  selector: 'header',
  template: 
  	`
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


		<nav>
			<a routerLink="/registration">Регистрация</a>
		</nav>
		<router-outlet></router-outlet>
  	`,
  	styles: 
  		[`
  			body {
  				margin: 0 auto;
  			}
			header {
				max-width: 1600px;
				min-width: 320px;
				width: 100%;
				margin: 0 auto;
				display: flex;
				justify-content: space-around;

				text-transform: uppercase;

				background-color: #f0f0f0;
			}
  	`],
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


	// constructor(public modal: Modal) {}

	// // get version(): string {
	// // 	return window.angular2ModalVer;
	// // }

	// onClick() {
	// 	this.modal.alert()
	// 		.size('lg')
	// 		.showClose(true)
	// 		.title('Авторизация')
	// 		.body(`
	// 			<div class="login-group">
	// 			  <input type="email" class="login-control" name="mail" placeholder="Адрес электронной почты" required>
	// 			</div>
	// 			<div class="login-group">
	// 			  <input type="password" class="login-control" name="password" placeholder="Пароль" required>
	// 			</div>
	// 			<div class="login-group">
	// 			  <button (click)="addLogin()">Войти</button>
	// 			</div>
	// 		`)
	// 		.open();
	// }


  ngOnInit() {
  }


}
