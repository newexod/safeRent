import { Component} from '@angular/core';



@Component({
  selector: 'personal-root',
  templateUrl: 'personal.component.html',    
  styleUrls: ['personal.component.css']

})

export class Personal{
		
	offer = [
	{price: 4000, square: 48, bed: 2, tv: 1, balcony: 1, floor: 2},
	{price: 4200, square: 56, bed: 3, tv: 2, balcony: 2, floor: 1},
	{price: 3950, square: 61, bed: 2, tv: 1, balcony: 1, floor: 16}
	];

	rent = [
	{price: 3600, square: 64, bed: 4, tv: 2, balcony: 2, floor: 8},
	{price: 5800, square: 72, bed: 1, tv: 1, balcony: 1, floor: 10},
	{price: 3950, square: 61, bed: 2, tv: 1, balcony: 1, floor: 16}
	];


}
