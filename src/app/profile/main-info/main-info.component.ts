import { Component } from '@angular/core';

@Component({
	selector: 'main-info',
	template:
		`
			<div class="col-md-12">
				<div class="col-md-3 col-md-offset-2 photo">
					<p>
						<img src="../../assets/rob.jpg" alt="rob" />
					</p>
				</div>
				<div class="col-md-2">
					<ul>
						<li *ngFor="let userInfo of userInfo">
							{{userInfo}}
						</li>
					</ul>
				</div>
				<div class="col-md-4">
					<ul>
						<li *ngFor="let user of user">
							{{user}}
						</li>
					</ul>
				</div>
				
				<div class="col-md-10 col-md-offset-1">
					<h3>Информация о пользователе</h3>
					<p>
<<<<<<< HEAD
						Здравствуйте, Я арендодатель. Меня зовут Роберт. Я обладатель пятикомнатного пентхауса в Аркадии. Я ценю свое время
						и серьезность намерений людей, с которыми я работаю. Я устал от однотипных сервисов и посредников, которые обеспечивают
						мне не подходящих квартиросъемщиков. Такие проблемы как: торг, порча дорогой мебели, а также занятие непристойными делами
						в моей квартире - полностью не приемлемы для меня. С помощью данного сервиса я рассчитываю найти подходящих и надежных арендаторов.
=======
					Здравствуйте, Я арендодатель. Меня зовут Роберт. Я обладатель пятикомнатного пентхауса в Аркадии. Я ценю свое время
					и серьезность намерений людей, с которыми я работаю. Я устал от однотипных сервисов и посредников, которые обеспечивают
					мне не подходящих квартиросъемщиков. Такие проблемы как: торг, порча дорогой мебели, а также занятие непристойными делами
					в моей квартире - полностью не приемлемы для меня. С помощью данного сервиса я рассчитываю найти подходящих и надежных арендаторов.

>>>>>>> e1229ba7484230a4373bc2e17ae478f6136df4d0
					</p>
				</div>	
			</div>
		`,
		styles: [`
			.col-md-12 {
				background-color: #f0f0f0;
				padding-top: 50px;
			}
			ul {
				margin: 0;
				padding: 0;
				list-style: none;
			}
			li {
				font-size: 18px;
				font-weight: 600;
				margin-bottom: 10px;
			}
			h3 {
				text-align: center;
				margin-bottom: 20px;
			}
			p {
				margin-bottom: 20px;
			}
			img {
				width: 165px;
				height: 200px;
			}
		`]
})

export class MainInfoComponent {
	userInfo = [
		'Имя',
		'Фамилия',
		'Телефон',
		'Квартир сдаёт',
		'Email',
		'Login'
	];

	user = [
		'Robert',
		'Downey Jr.',
		'05032942342',
		'5',
		'rob@mail.com',
		'rob333'
	]
}