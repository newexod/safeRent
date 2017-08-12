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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						Ex nulla praesentium, doloremque ipsum consequuntur, enim? 
						Deleniti optio similique magnam natus nesciunt ex expedita 
						eligendi suscipit aliquam doloribus, fuga eveniet provident 
						quae. Nesciunt accusantium quis sit, dolores, maiores 
						cumque ab inventore possimus consequuntur quos, quo eveniet 
						pariatur saepe. Voluptatibus repellat labore deleniti doloribus 
						autem officia eos ex, suscipit aperiam, accusamus voluptas 
						repellendus a libero corporis nam amet eaque sequi rerum. 
						Modi laborum dignissimos numquam deserunt consectetur facere 
						debitis necessitatibus corrupti aspernatur, mollitia, laudantium 
						accusantium adipisci minima quasi, quos molestias vitae ut quia 
						non voluptatem! Dicta ex earum voluptatibus velit, nostrum. Deleniti!
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