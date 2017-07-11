import { Component } from '@angular/core';

@Component({
	selector: 'filter',
	template:
		`
			<div class="filter">
				<div class="form-group">
					<label for="region">Район</label>
					<select name="form-control" id="region" required>
						<option value="">Киевский</option>
						<option value="">Малиновский</option>
						<option value="">Коминтерновский</option>
						<option value="">Приморский</option>
						<option value="">Суворовский</option>
					</select>
				</div>

				<div class="form-group">
					<label for="rooms">Комнат</label>
					<select name="form-control" id="rooms" required>
						<option value="">1</option>
						<option value="">2</option>
						<option value="">3</option>
						<option value="">4</option>
					</select>
				</div>

				<div class="form-group">
					<label for="square">Площадь</label>
					<input id="square" type="number" min="0" max="100" step="1" placeholder="От" />
					 - 
					<input id="square" type="number" min="0" max="100" step="1" placeholder="До">
				</div>

				<div class="form-group">
					<label for="price">Цена</label>
					<input id="price" type="range" min="1000" max="10000" value="5000" id="price" step="500" list="price-settings" multiple>
					<datalist id="price-settings">
						<option value="1000">1000</option>
						<option value="1500">1500</option>
						<option value="2000">2000</option>
						<option value="2500">2500</option>
						<option value="3000">3000</option>
						<option value="3500">3500</option>
						<option value="4000">4000</option>
						<option value="4500">4500</option>
						<option value="5000">5000</option>
						<option value="5500">5500</option>
						<option value="6000">6000</option>
						<option value="6500">6500</option>
						<option value="7000">7000</option>
						<option value="7500">7500</option>
						<option value="8000">8000</option>
						<option value="8500">8500</option>
						<option value="9000">9000</option>
						<option value="9500">9500</option>
						<option value="10000">10000</option>
					</datalist>
				</div>

				<div class="form-group">
					<fieldset>
						<label for="type">Тип</label>
						<input type="checkbox">
						<label>Долгосрочная аренда квартир</label>
						<input type="checkbox">
						<label>Квартиры посуточно</label>
						<input type="checkbox">
						<label>Квартиры с почасовой оплатой</label>
						<input type="button" value="Найти">
					</fieldset>
				</div>
			</div>
		`,
	styles: 
		[`
			.filter {
			    display: flex;
			    flex-wrap: wrap;
			    justify-content: center;
			    align-items: center;
			    align-content: space-around;
			}
		`]
})

export class FilterComponent {

}