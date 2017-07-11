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
						<a href="#">Главная</a>
					</li>
					<li>
						<a href="#">О нас</a>
					</li>
					<li>
						<a href="#">Аренда Квартир</a>
					</li>
					<li>
						<a href="#">Контакты</a>
					</li>
				</ul>
			</nav>
		</div>
  	`,
  styles: 
  	[`
			.navigation {
				text-transform: uppercase;	
			}

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

			.navigation:after {
				content: '';
				display: block;
				clear: both;
			}
  	`]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
