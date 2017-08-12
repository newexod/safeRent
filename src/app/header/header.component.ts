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


// <button (click)="onClick()">Войти</button>


@Component({
  selector: 'header',
  template: 
  	`
		
		<div class="header_icons">
			<p class="social"><a href="#">Подписывайтесь</a></p>
			<social-links></social-links>
		</div>
		<div class="header_icons">	
			<a (click)="openCustom()">Войти</a>
			<nav>
				<a routerLink="/registration">Регистрация</a>
			</nav>
		</div>
	
  	`,
  	styles: 
  	[`
		a {
			cursor: pointer;
		}
		.header_icons{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 320px;
		}
		p, a {
			color: #333;
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


	constructor(public modal: Modal) {}

	onClick() {
		this.modal.alert()
			.size('lg')
			.showClose(true)
			.title('Авторизация')
			.body(`
				<label for="inputEmail3" control-label">Email</label>
			    
			    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
			    
			`)
			.open();
	}

	openCustom() {
	    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
	}


  ngOnInit() {
  }


}
