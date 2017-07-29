import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'filter',
	template:
		`
			<div class="filter" [ngStyle]="{'background':'url(' + filter.link + ')'}">
				
				<form class="col-md-9 form-inline">

				  	<div class="col-md-3 form-group">
				    	<label for="region">Район</label>
	    				<select name="form-control" id="region" class="form-control" required>
		    				<option value="">Киевский</option>
		    				<option value="">Малиновский</option>
		    				<option value="">Коминтерновский</option>
		    				<option value="">Приморский</option>
		    				<option value="">Суворовский</option>
	    				</select>
				  	</div>

				  	<div class="col-md-2 form-group rooms">
					    <label for="rooms">Комнат</label>
		    			<select name="form-control" id="rooms" class="form-control" required>
		    				<option value="">1</option>
		    				<option value="">2</option>
		    				<option value="">3</option>
		    				<option value="">4</option>
		    			</select>
				  	</div>

	  			  	<div class="col-md-3 form-group square">
		  			    <label for="square">Площадь</label>
		    			<input id="square" class="form-control" type="number" min="0" max="100" step="1" placeholder="От" />
		    			 - 
		    			<input id="square" class="form-control" type="number" min="0" max="100" step="1" placeholder="До">
	  			  	</div>

					<div class="col-md-3 form-group">
						<label for="price">Цена</label>
						<input id="price" class="form-control" type="range" min="1000" max="10000" value="5000" step="500" list="price-settings" multiple>
						<datalist id="price-settings">
							<option value="1000" label="0">1000</option>
							<option value="2000">2000</option>
							<option value="3000">3000</option>
							<option value="4000">4000</option>
							<option value="5000">5000</option>
							<option value="6000">6000</option>
							<option value="7000">7000</option>
							<option value="8000">8000</option>
							<option value="9000">9000</option>
							<option value="10000" label="10000">10000</option>
						</datalist>
					</div>

					<div class="col-md-12 form-group type">
						<label for="type">Тип</label>
						<input type="checkbox">
						<label>Долгосрочная аренда квартир</label>
						<input type="checkbox">
						<label>Квартиры посуточно</label>
						<input type="checkbox">
						<label>Квартиры с почасовой оплатой</label>
						<button type="submit" class="btn">Найти</button>
					</div>
				</form>
				

			</div>

		`,
	styles: 
		[`
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
				border-radius: 5px;
				padding: 20px;
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
			.square > input {
				padding: 6px 0;
			}
			.type > label {
				text-transform: none;
				font-weight: 400;
			}
			.type > label:first-child {
				text-transform: uppercase;
				font-weight: 700;
			}
			.btn {
				background-color: #F39C12;
				padding: 8px 30px;
				color: white;
				margin-left: 230px;
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