import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  template: 
  	`
		<div class="navigation">
			<div class="logo">
				<a href="#">Safe-rent</a>
			</div>
			<nav>
				<ul>
					<li>
						<a routerLink="/">Главная</a>
					</li>
					<li>
						<a routerLink="/profile">Profile</a>
					</li>
					<li>
						<a routerLink="/advert">О нас</a>
					</li>
					<li>
						<a routerLink="/rent">Аренда Квартир</a>
					</li>
					<li>
						<a routerLink="/contacts">Контакты</a>
					</li>
				</ul>
			</nav>
		</div>
		
  	`,
  styles: 
  	[`
		.navigation {
			text-transform: uppercase;	
			max-width: 1600px;
			min-width: 320px;
			width: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		.logo {
			// margin-left: 120px;
		}
		nav ul {
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 0;
		}
		nav ul li {
			display: inline-block;
			font-size: 16px;
			line-height: 20px;
			vertical-align: top;
		}
		nav ul li a {
			display: block;
			padding: 25px 10px;
			color: #333;
			text-decoration: none;
		}
		nav ul li a:hover {
			background-color: #ff0000;
			color: white;
		}
  	`]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*

.logo {
	float: left;
	padding: 25px 30px;
}
.logo a {
	text-decoration: none;
	color: #333;
}
.logo a:hover {
	text-decoration: underline;
}

nav {
	float: right;
}


.navigation:after {
	content: '';
	display: block;
	clear: both;
}*/
