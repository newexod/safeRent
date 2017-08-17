import { Component, OnInit, Input, Output, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal-sample';

import { SocialLinksComponent } from './social-links.component';
// import { UserBlockComponent } from './user-block.component';
import { RegistrationBlockComponent } from './registration-block.component';


  	// .header {
  	// 	display: flex;
  	// 	justify-content: space-between;
  	// 	align-items: center;
  	// 	padding-top: 15px;
  	// }

@Component({
  selector: 'header',
  template: 
  	`
		<div class="header">
			<div class="header_icons">
				
				<social-links></social-links>
			</div>
			<div class="header_icons">
					<a data-toggle="modal" data-target="#sign-in" data-whatever="@getbootstrap">Войти</a>
					<div class="modal fade" id="sign-in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
				  	<div class="modal-dialog" role="document">
					    <div class="modal-content">
				      	<div class="modal-header">
				        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        	<h4 class="modal-title" id="exampleModalLabel">Авторизация</h4>
				      	</div>
				      	<div class="modal-body">
				        	<form class="form-horizontal">
				          		<div class="form-group">
				            		<label for="inputEmail3" class="col-sm-2 control-label">Email</label>
				            		<div class="col-sm-10">
				              			<input type="email" class="form-control" id="inputEmail3" placeholder="Адрес электронной почты" required>
				            		</div>
				          		</div>
				          		<div class="form-group">
				            		<label for="inputPassword3" class="col-sm-2 control-label">Пароль</label>
				            		<div class="col-sm-10">
				              			<input type="password" class="form-control" id="inputPassword3" placeholder="Введите пароль" required>
				            		</div>
				          		</div>
				          		<div class="form-group">
				            		<div class="col-sm-12">
				              			<div class="checkbox">
				                			<label>
				                  				<input type="checkbox">
				                  				<span>Запомнить меня</span>
				                  				<a routerLink="#">Забыл пароль?</a>
				                			</label>
				              			</div>
				            		</div>
				          		</div>
					        </form>
				      	</div>
				      	<div class="modal-footer">
				      		<a routerLink="/registration" data-dismiss="modal">Создать аккаунт</a>
					        <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
					        <button type="submit" class="btn btn-primary">Вход</button>
				      	</div>
					    </div>
				  	</div>
					</div>
				<nav>
					
					<a routerLink="/registration">Регистрация</a>
				</nav>
			</div>
		</div>
  	`,
  	styles: 
  	[`
  	.header {
  		display: flex;
  		justify-content: space-between;
  		padding-top: 15px;
  	}
  	nav a {
  		margin-right: 20px;
  	}
  	nav a:last-child {
  		margin-right: 0;
  	}
		a {
			cursor: pointer;
		}
		.header_icons{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 170px;
			margin-right: 30px;
		}
		.header_icons:first-child {
			width: 40px;
		}
		p, a {
			color: #333;
		}
		.modal .modal-dialog .modal-content .modal-header h4 {
			text-transform: initial;
			color: #F39C12;
		}
		.modal .modal-dialog .modal-content .modal-body .form-horizontal .form-group label {
			text-transform: initial;
		}
		.modal .modal-dialog .modal-content .modal-body .form-horizontal .form-group label {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.modal .modal-dialog .modal-content .modal-body .form-horizontal .form-group label a {
			color: #F39C12;
		}
		.modal .modal-dialog .modal-content .modal-footer a {
			text-transform: initial;
			color: #F39C12;
			margin-right: 320px;
		}
		.modal-footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		.btn-primary {
			background-color: #F39C12;
			border-color: #F39C12;
		}
		.btn-default {
			margin-left: 0;
		}
		span {
			margin-bottom: -5px;
		}
		@media (max-width: 767px) {
			.header_icons a {
				margin-right: -185px;
			}
			.header_icons nav a {
				margin-right: -100px;
			}
		}
		@media (max-width: 500px) {
			.header_icons a {
				margin-right: -85px;
			}
			.header_icons nav a {
				margin-right: -40px;
			}
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
