import { Component, OnInit } from '@angular/core';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@Component({
	selector: 'filter',
	template:
		`
			<div class="filter" [ngStyle]="{'background-image':'url(' + filter.link + ')'}">
				
				<form class="col-md-10 form-inline form_add">

				  	<div class="col-md-3 form-group add_margin">
				    	<label for="region">Район</label>
	    				<select name="form-control" id="region" class="form-control" required>
		    				<option value="Киевский">Киевский</option>
		    				<option value="Малиновский">Малиновский</option>
		    				<option value="Коминтерновский">Коминтерновский</option>
		    				<option value="Приморский">Приморский</option>
		    				<option value="Суворовский">Суворовский</option>
	    				</select>
				  	</div>

				  	<div class="col-md-2 form-group rooms add_margin">
					    <label for="rooms">Комнат</label>
		    			<select name="form-control" id="rooms" class="form-control" required>
		    				<option value="1">1</option>
		    				<option value="2">2</option>
		    				<option value="3">3</option>
		    				<option value="4">4</option>
		    			</select>
				  	</div>

	  			  	<div class="col-md-3 form-group square add_margin">
		  			    <label for="square">Площадь</label>
		    			<input id="square" class="form-control" type="number" min="0" max="25" step="1" placeholder="От" />
		    			 - 
		    			<input id="square" class="form-control" type="number" min="35" max="100" step="1" placeholder="До">
	  			  	</div>

					<div class="slider_width">
						<label for="price">ЦЕНА</label>				
						<ion-range-slider #sliderElement
				          type="double"
				          min="0"
				          max="30000"
				          step="100"
				          from_min="0"
				          from_max="30000"
				          from_shadow="false"
				          to="0"
				          to_min="18000"
				          to_max="30000"
				          to_shadow="false"
				          prefix=""
				          postfix=" грн."
				          decorate_both="false"
				          (onUpdate)="myOnUpdate($event)"
				          (onChange)="myOnChange($event)"
				          (onFinish)="myOnFinish($event)" class="add_width">
						</ion-range-slider>			  
					</div>
					<div class="col-md-12 form-group type">
						<label for="type">Тип</label>
						<input type="checkbox" class="qwe">
						<label>Долгосрочная аренда квартир</label>
						<input type="checkbox" class="qwe">
						<label>Квартиры посуточно</label>
						<input type="checkbox" class="qwe">
						<label>Квартиры с почасовой оплатой</label>
						<button type="submit" class="btn">НАЙТИ</button>
					</div>
				</form>
			</div>
			
				

		`,
	styles: 
		[`
			.slider_width{
				width:300px;
				display: flex;
				justify-content: space-between; 
			}
			.add_width{
				min-width: 240px; 
			}
			.slider_width label{
				padding-top: 20px;
			}
			.add_margin{
				margin-top: 13px;
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
				
				padding: 20px 0 20px 180px;
				background-color: white;
				margin-bottom: 65px;
			}
			.form-group {
				margin-bottom: 20px;
				padding: 0;
				text-transform: uppercase;
			}
			.form-group:last-child {
				margin: 0;
			}
			.form_add {
				width: 1593px;
			}
			.square > input {
				padding: 6px 0;
				padding-left: 10px;
			}
			.type > label {
				text-transform: none;
				font-weight: 400;
				padding-left: 5px;

			}
			.type > label:first-child {
				text-transform: uppercase;
				font-weight: 700;
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
			@media (max-width: 768px) {
				.filter {
					height: 700px;
				}
				form {
					margin-top: 100px;
					padding: 20px 100px 20px 100px;
				}
			}
			@media (max-width: 627px) {
				form {
					padding: 20px 50px 20px 50px;
				}
			}
			@media (max-width: 527px) {
				form {
					padding: 20px 30px 20px 30px;
				}
			}
			@media (max-width: 487px) {
				form {
					padding: 20px 10px 20px 10px;
				}
			}
			@media (max-width: 486px) {
				form {
					padding: 20px 0 20px 0;
				}
			}
			@media (max-width: 1490px) {
				.btn {
					margin-left: 275px;
				}
			}
			@media (max-width: 1390px) {
				.btn {
					margin-left: 225px;
				}
			}
			@media (max-width: 1300px) {
				.btn {
					margin-left: 155px;
				}
			}
			@media (max-width: 1200px) {
				.btn {
					margin-left: 100px;
				}
			}
			@media (max-width: 1200px) {
				form {
					padding: 20px 80px 20px 70px;
				}
			}
			@media (max-width: 1131px) {
				form {
					padding: 20px 50px 20px 50px;
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