import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-block',
  template: 
  	`
		<div class="login">
			<h2>Регистрация</h2>
			<div class="registration-group">
				<input type="email" class="registration-control" name="mail" placeholder="Адрес электронной почты" required>
			</div>
			<div class="registration-group">
				<input type="tel" pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d" class="registration-control" name="tel" placeholder="Мобильный номер" required>
			</div>
			<div class="registration-group">
				<input type="text" class="registration-control" name="login" placeholder="Логин" required>
			</div>
			<div class="registration-group">
				<input type="text" class="registration-control" name="name" placeholder="Имя" required>
			</div>
			<div class="registration-group">
				<input type="text" class="registration-control" name="surname" placeholder="Фамилия" required>
			</div>
			<div class="registration-group">
				<input type="password" class="registration-control" name="password" placeholder="Пароль" required>
			</div>
			<div class="registration-group">
				<input type="password" class="registration-control" name="repeatPassword" placeholder="Повторите Пароль" required>
			</div>
			<div class="registration-group">
				<button (click)="addLogin()">Зарегистрироваться</button>
			</div>
		</div>
  	`,
  // styleUrls: ['./registration.component.css']
})
export class RegistrationBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
