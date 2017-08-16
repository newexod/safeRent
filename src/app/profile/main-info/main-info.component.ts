import { Component } from '@angular/core';

@Component({
	selector: 'main-info',
	template:
		`
			<div class="col-xs-12">
				<div class="col-sm-3 col-sm-offset-2 col-xs-4 col-xs-offset-4 photo">
					<p>
						<img src="../../assets/rob.jpg" alt="rob" />
					</p>
				</div>
				<div class="col-sm-3 col-sm-offset-0 col-xs-4 col-xs-offset-2 rob">
					<ul>
						<li *ngFor="let userInfo of userInfo">
							{{userInfo}}
						</li>
					</ul>
				</div>
				<div class="col-sm-4 col-sm-offset-0 col-xs-4 col-xs-offset-1 rob">
					<ul>
						<li *ngFor="let user of user">
							{{user}}
						</li>
					</ul>
				</div>
				
				<div class="col-xs-10 col-xs-offset-1">
					<h3>Информация о пользователе</h3>
					<p>
						Здравствуйте, Я арендодатель. Меня зовут Роберт. Я обладатель пятикомнатного пентхауса в Аркадии. Я ценю свое время
						и серьезность намерений людей, с которыми я работаю. Я устал от однотипных сервисов и посредников, которые обеспечивают
						мне не подходящих квартиросъемщиков. Такие проблемы как: торг, порча дорогой мебели, а также занятие непристойными делами
						в моей квартире - полностью не приемлемы для меня. С помощью данного сервиса я рассчитываю найти подходящих и надежных арендаторов.
					</p>
				</div>	
			</div>
		`,
		styles: [`
			.col-xs-12 {
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
			@media (max-width: 530px) {
				img {
					width: 150px;
	    			height: 180px;	
				}
			}
			@media (max-width: 512px) {
				.col-xs-4 p {
					margin-left: -16.66667%;
				}
				div.col-sm-3.col-sm-offset-0.col-xs-4.col-xs-offset-2.rob {
					width: 50%;
					margin-left: 0;
				}
			}
			@media (max-width: 400px) {
				.col-xs-4 p {
					margin-left: -42.66667%
				}
			}
			@media (max-width: 352px) {
				li {
					font-size: 16px;
				}
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
		'Downey',
		'05032942342',
		'5',
		'rob@mail.com',
		'rob333'
	]
}