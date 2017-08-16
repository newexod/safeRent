import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-block',
  template: 
  	`
			<div class="registration" [ngStyle]="{'background-image':'url(' + registration.link + ')'}">
				<h1>Регистрация</h1>
			</div>
			<div class="registration-container">
				<h2>Поля обозначенные <span>*</span> обязательны к заполнению</h2>
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="firstName" class="col-sm-3 col-md-2 control-label">Имя<span>*</span></label>
				    <div class="col-sm-8">
				      <input type="firstName" class="form-control" id="firstName" placeholder="Ваше имя" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastName" class="col-sm-3 col-md-2 control-label">Фамилия<span>*</span></label>
				    <div class="col-sm-8">
				      <input type="lastName" class="form-control" id="lastName" placeholder="Ваша Фамилия" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="email" class="col-sm-3 col-md-2 control-label">Email<span>*</span></label>
				    <div class="col-sm-8">
				      <input type="email" class="form-control" id="email" placeholder="Адрес электронной почты" required>
				    </div>
				  </div>
					<div class="form-group">
					  <label for="password" class="col-sm-3 col-md-2 control-label">Пароль<span>*</span></label>
					  <div class="col-sm-8">
					    <input type="password" class="form-control" id="password" placeholder="Введите Ваш пароль" required>
					  </div>
					</div>
					<div class="form-group">
					  <label for="passwordRepeat" class="col-sm-3 col-md-2 control-label">Подтвердить пароль<span>*</span></label>
					  <div class="col-sm-8">
					    <input type="password" class="form-control" id="passwordRepeat" placeholder="Подтвердите Ваш пароль" required>
					  </div>
					</div>
					<div class="form-group">
					  <label for="phone" class="col-sm-3 col-md-2 control-label">Номер телефона<span>*</span></label>
					  <div class="col-sm-8">
					    <input type="tel" class="form-control" id="search" pattern="380[0-9]{9}" placeholder="(###) ###-##-##" required>
					  </div>
					</div>
				  <div class="form-group">
				    <div class="col-sm-offset-3 col-md-offset-2 col-sm-5">
				      <button type="submit" class="btn btn-default">Зарегистрироваться</button>
				      <a routerLink='/' class="btn btn-danger">Вернуться</a>
				    </div>
				  </div>
				</form>
			</div>
  	`,
  	styles: 
			[`
				.registration-container {
					background-color: #f0f0f0;
				}
				.registration {
					max-width: 1600px;
					height: 499px;
					background-size: cover;
					display: flex;
					justify-content: center;
					align-items: flex-end;
				}
				h1 {
					font-size: 36px;
					font-weight: 500;
					margin-bottom: 40px;
					padding: 22px 242px;
					background-color: white;
					border-radius: 5px;
				}
				h2 {
					position: relative;
					text-align: center;
					margin: 0;
					padding-top: 50px;
					padding-bottom: 20px;
				}
				// h2:after {
				// 	content: '';
				// 	position: absolute;
				// 	top: 95px;
				//     right: 715px;
				//     width: 168px;
				//     height: 2px;
				// 	background-color: #e0e0e0;
				// }
				// h2:before {
				// 	content: '';
				// 	position: absolute;
				// 	top: 95px;
				//     left: 765px;
				//     width: 70px;
				//     height: 2px;
				// 	background-color: #e39c12;
				// 	z-index: 1;
				// }
				form {
					padding: 20px;

				}
				button {
					background-color: #F39C12;
					color: white;
				}
				span {
					padding-left: 5px;
					color: red;
				}
				label {
					// font-size: 18px;
				}
				@media (max-width: 1100px) {
					h1 {
						padding: 22px 212px;
					}
				}
				@media (max-width: 800px) {
					h1 {
						padding: 18px 160px;
					}
				}
				@media (max-width: 600px) {
					h1 {
						padding: 12px 100px;
					}
				}
				@media (max-width: 450px) {
					h1 {
						padding: 8px 40px;
					}
				}
			`]
			// :host {
			// 		text-align: center;
			// 	}
  // styleUrls: ['./registration.component.css']
})
export class RegistrationBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  registration = {
		link: "../../assets/reg.png"
	}
}
