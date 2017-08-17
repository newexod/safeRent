import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  template: 
  	`	
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="#">SAFE-RENT</a>
		    </div>

		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav navbar-right">
		        <li><a routerLink="/">ГЛАВНАЯ</a></li>
		        <li><a routerLink="/profile">ПРОФИЛЬ</a></li>
		        <li><a routerLink="/about-us">О НАС</a></li>
		        <li><a routerLink="/contacts">КОНТАКТЫ</a></li>
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
  	`,
  styles: 
  	[`
		nav ul {
			margin: 0;
		}
		nav ul li {
			font-size: 16px;
			line-height: 20px;
		}
		nav ul li a {
			padding: 25px 10px;
			color: #333;
		}

		nav.navbar.navbar-default {
			margin: 0;
			border: none;
			background-color: white;
			border-color: white;
		}
		.navbar-brand {
			padding: 23px 25px;
		}
		@media (max-width: 767px) {
			.navbar-brand {
				padding: 15px 25px;
			}
			.navbar-toggle {
				margin-right: 30px;
			}
		}
		@media (max-width: 450px) {
			.navbar-brand {
				padding: 15px 20px;
			}
		}
		@media (max-width: 480px) {
			.navbar-toggle {
			    margin-right: 25px;
			}
		}
		@media (max-width: 430px) {
			.navbar-toggle {
			    margin-right: 21px;
			}
			
				padding: 15px 16px;
			}
		}
		@media (max-width: 400px) {
			.navbar-toggle {
			    margin-right: 16px;
			}
			.navbar-brand {
				padding: 15px 8px;
			}
		}
		@media (max-width: 380px) {
			.navbar-brand {
				padding: 15px 17px;
			}
		}
		@media (max-width: 350px) {
			.navbar-toggle {
			    margin-right: 11px;
			}
			.navbar-brand {
				padding: 15px 12px;
			}
		}
		@media (max-width: 330px) {
			.navbar-toggle {
			    margin-right: 7px;
			}
			.navbar-brand {
				padding: 15px 7px;
			}
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
