import { Component} from '@angular/core';

export class Apartment{
	id: number;
	price: number;
	bed: number;
	area: number;
}

const APART: Apartment[]=[
	{id: 1, price: 3000, bed: 2, area: 65},
	{id: 2, price: 4000, bed: 3, area: 45},
];


@Component({
  selector: 'popular-root',
  templateUrl: 'popular.component.html',    
  styleUrls: ['popular.component.css']

})

export class Popular{
	apart = APART;
}
