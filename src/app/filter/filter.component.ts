import { Component, OnInit } from '@angular/core';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

// <form class="col-md-10 form-inline form_add">

//   	<div class="col-md-3 form-group add_margin">
//     	<label for="region">Район</label>
// 		<select name="form-control" id="region" class="form-control" required>
// 			<option value="Киевский">Киевский</option>
// 			<option value="Малиновский">Малиновский</option>
// 			<option value="Коминтерновский">Коминтерновский</option>
// 			<option value="Приморский">Приморский</option>
// 			<option value="Суворовский">Суворовский</option>
// 		</select>
//   	</div>

//   	<div class="col-md-2 form-group rooms add_margin">
// 	    <label for="rooms">Комнат</label>
// 		<select name="form-control" id="rooms" class="form-control" required>
// 			<option value="1">1</option>
// 			<option value="2">2</option>
// 			<option value="3">3</option>
// 			<option value="4">4</option>
// 		</select>
//   	</div>

// 	  	<div class="col-md-3 form-group square add_margin">
// 		    <label for="square">Площадь</label>
// 		<input id="square" class="form-control" type="number" min="0" max="25" step="1" placeholder="От" />
// 		 - 
// 		<input id="square" class="form-control" type="number" min="35" max="100" step="1" placeholder="До">
// 	  	</div>

// 	<div class="slider_width">
// 		<label for="price">ЦЕНА</label>				
// 		<ion-range-slider #sliderElement
//           type="double"
//           min="0"
//           max="30000"
//           step="100"
//           from_min="0"
//           from_max="30000"
//           from_shadow="false"
//           to="0"
//           to_min="18000"
//           to_max="30000"
//           to_shadow="false"
//           prefix=""
//           postfix=" грн."
//           decorate_both="false"
//           (onUpdate)="myOnUpdate($event)"
//           (onChange)="myOnChange($event)"
//           (onFinish)="myOnFinish($event)" class="add_width">
// 		</ion-range-slider>			  
// 	</div>
// 	<div class="col-md-12 form-group type">
// 		<label for="type">Тип</label>
// 		<input type="checkbox" class="qwe">
// 		<label>Долгосрочная аренда квартир</label>
// 		<input type="checkbox" class="qwe">
// 		<label>Квартиры посуточно</label>
// 		<input type="checkbox" class="qwe">
// 		<label>Квартиры с почасовой оплатой</label>
// 		<button type="submit" class="btn">НАЙТИ</button>
// 	</div>
// </form>


// .slider_width{
// 	width:300px;
// 	display: flex;
// 	justify-content: space-between; 
// }
// .add_width{
// 	min-width: 240px; 
// }
// .slider_width label{
// 	padding-top: 20px;
// }
// .add_margin{
// 	margin-top: 13px;
// }

// .filter {
// 	max-width: 1600px;
// 	height: 499px;
// 	margin: 0 auto;
// 	background-size: cover;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: flex-end;
//     align-content: space-around;
// }
// form {
	
// 	padding: 20px 0 20px 180px;
// 	background-color: white;
// 	margin-bottom: 65px;
// }
// .form-group {
// 	margin-bottom: 20px;
// 	padding: 0;
// 	text-transform: uppercase;
// }
// .form-group:last-child {
// 	margin: 0;
// }
// .form_add {
// 	width: 1593px;
// }
// .square > input {
// 	padding: 6px 0;
// 	padding-left: 10px;
// }
// .type > label {
// 	text-transform: none;
// 	font-weight: 400;
// 	padding-left: 5px;

// }
// .type > label:first-child {
// 	text-transform: uppercase;
// 	font-weight: 700;
// }
// .btn {
// 	background-color: #F39C12;
// 	padding: 8px 30px;
// 	color: white;
// 	margin-left: 325px;
// }
// .qwe{
// 	transform:scale(1.7);
// 		opacity:0.9;
// 		cursor:pointer;
// 		margin-left: 20px;


// }
// @media (max-width: 768px) {
// 	.filter {
// 		height: 700px;
// 	}
// 	form {
// 		margin-top: 100px;
// 		padding: 20px 100px 20px 100px;
// 	}
// }
// @media (max-width: 627px) {
// 	form {
// 		padding: 20px 50px 20px 50px;
// 	}
// }
// @media (max-width: 527px) {
// 	form {
// 		padding: 20px 30px 20px 30px;
// 	}
// }
// @media (max-width: 487px) {
// 	form {
// 		padding: 20px 10px 20px 10px;
// 	}
// }
// @media (max-width: 486px) {
// 	form {
// 		padding: 20px 0 20px 0;
// 	}
// }
// @media (max-width: 1490px) {
// 	.btn {
// 		margin-left: 275px;
// 	}
// }
// @media (max-width: 1390px) {
// 	.btn {
// 		margin-left: 225px;
// 	}
// }
// @media (max-width: 1300px) {
// 	.btn {
// 		margin-left: 155px;
// 	}
// }
// @media (max-width: 1200px) {
// 	.btn {
// 		margin-left: 100px;
// 	}
// }
// @media (max-width: 1200px) {
// 	form {
// 		padding: 20px 80px 20px 70px;
// 	}
// }
// @media (max-width: 1131px) {
// 	form {
// 		padding: 20px 50px 20px 50px;
// 	}
// }

@Component({
	selector: 'filter',
	template:
		`
			<div class="filter" [ngStyle]="{'background-image':'url(' + filter.link + ')'}">

				<form class="col-md-10 form-inline form_props">
				    <div class="filter_header">
				        <div class="col-md-3 form-group ">
				            <label for="region" class="add_uppercase  ">Район</label>
				            <select name="form-control" id="region" class="form-control" required>
				                <option value="Киевский">Киевский</option>
				                <option value="Малиновский">Малиновский</option>
				                <option value="Коминтерновский">Коминтерновский</option>
				                <option value="Приморский">Приморский</option>
				                <option value="Суворовский">Суворовский</option>
				            </select>
				        </div>
				        <div class="col-md-2 form-group ">
				            <label for="rooms" class="add_uppercase ">Комнат</label>
				            <select name="form-control" id="rooms" class="form-control" required>
				                <option value="1">1</option>
				                <option value="2">2</option>
				                <option value="3">3</option>
				                <option value="4">4</option>
				            </select>
				        </div>
				        <div class="col-md-3 form-group ">
				            <label for="square" class="add_uppercase ">Площадь</label>
				            <input id="square" class="form-control" type="number" min="0" max="25" step="1" placeholder="От" />
				            - 
				            <input id="square" class="form-control" type="number" min="35" max="100" step="1" placeholder="До">
				        </div>
				        <div class="slider_width ">
				            <label for="price">ЦЕНА</label>             
				            <ion-range-slider #sliderElement type="double" min="0" max="30000" step="100" from_min="0" from_max="30000"      from_shadow="false" to="0" to_min="18000" to_max="30000" to_shadow="false" prefix="" postfix=" грн."         decorate_both="false" (onUpdate)="myOnUpdate($event)" (onChange)="myOnChange($event)" 
				            (onFinish)="myOnFinish($event)" class="add_width"> 
				            </ion-range-slider>           
				        </div>
				    </div>
				    <div class="col-md-12 filter_footer">
				        <label for="type" class="add_uppercase">Тип</label>
				        <div class="add_footerstyle">
				            <input type="checkbox" class="qwe">
				            <label class="add_textstyle">Долгосрочная аренда квартир</label>
				        </div>
				        <div class="add_footerstyle">
				            <input type="checkbox" class="qwe">
				            <label class="add_textstyle">Квартиры посуточно</label>
				        </div>
				        <div class="add_footerstyle">
				            <input type="checkbox" class="qwe">
				            <label class="add_textstyle">Квартиры с почасовой оплатой</label>
				        </div>
				        <button type="submit" class="btn">НАЙТИ</button>
				    </div>
				</form>

			</div>
			
			
				

		`,
	styles: 
		[`
			* {
				box-sizing: border-box;
			}
			body {
				margin: 0 auto;
			}
			.form_add {			
				background-color: white;
			}
			.filter {
				max-width: 1600px;
				height: 499px;
				margin: 0 auto;
				background-size: cover;
			    display: flex;
			    flex-wrap: wrap;
			    justify-content: center;
			    align-items: flex-end;
			    align-content: space-around;
			}
			form {

			}
			.filter_header{
				max-width: 1593px;
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 25px 120px;
			}
			.filter_footer{
				/*border: 1px solid red;*/
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				padding: 25px 120px;

			}
			.form_props{			
				max-width: 1593px;
				margin: 0 auto;
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				background-color: white;
				margin-bottom: 65px;
			}
			.slider_width{
				width:300px;
				display: flex;
				justify-content: space-between; 
			}
			.add_width{
				min-width: 240px; 
			}
			.add_uppercase {
				text-transform: uppercase;
			}
			.slider_width label{
				padding-top: 10px;
			}
			.add_margin{
				margin-top: 13px;
			}
			.btn {
				background-color: #F39C12;
				padding: 8px 30px;
				color: white;
				margin-left: 325px;
			}
			.qwe{
				transform:scale(1.7);
			  	opacity:0.9;
			  	cursor:pointer;
			  	margin-left: 20px;
			}
			.border{
				border: 1px solid red;
			}
			.add_textstyle{
				padding: 0 0 0 5px;
				font-weight: 400;
			}

			@media (max-width: 1500px) {
				.filter_header{
					padding: 25px 80px;
				}
			}
			@media (max-width: 1400px) {
				.filter_header{
					padding: 25px 40px;
				}
			}			
			@media (max-width: 1320px) {
				.filter_header{
					padding: 25px 0;
					flex-direction: column;
					align-items: center;
					height: 300px;
				}
				.slider_width{
					padding-left: 6px;
				}

				.form-group{
					width: 100%;
					max-width: 320px;
				}
			}

						
			@media (max-width: 1390px) {
				.btn {
					margin-left: 155px;
				}
			}

			@media (max-width: 1300px) {
				.btn {
					margin-left: 45px;
				}
				.filter_footer{
					padding: 25px 40px;

				}
			}
			@media (max-width: 1420px) {
				.add_textstyle{
					padding-left: 5px;
				}
			}

			@media (max-width: 1155px) {
				.btn {
					margin-top: 10px;
					
				}
			}
			@media (max-width: 775px) {
				.filter {
					height: 655px;
				}
				.filter_header{
					height: 400px;
				}

			}
			@media (max-width: 984px) {
					
			}
			@media (max-width: 812px) {
				.filter_footer{
					padding: 25px 2px;

				}
			}
			@media (max-width: 736px) {
				.filter_footer{
					flex-direction: column;
					align-items: center;
					width: 100%;

				}
				.add_footerstyle{
					display: flex;
					flex-direction: row;
					text-align: left;
					width: 300px;
					padding: 3px 0;
				}
				.btn {
					margin-left: 15px;

				}
				.filter {
					height: 730px;
				}
			}



			

		`]

		// на всякий случай
		// 
		
		//
		// .field {
		// 	display: flex;
		// 	flex-direction: column;
		// }
})

export class FilterComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
	
	filter = {
		link: "../../assets/image.png"
	}


}