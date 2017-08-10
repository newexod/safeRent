import { Component} from '@angular/core';
import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'popular-root',
  templateUrl: 'popular.component.html',    
  styleUrls: ['popular.component.css']

})

@Injectable()

export class Popular{

	// for backend

	// apartBase: any[]=[];
	// apart: any[]=[];

	// getPosts(){
	// 	 return this.http.get('http://127.0.0.1:8000/adverts/')
	// 		.map(res => res.json());
	// }
	
	// constructor(private http: Http){
	// 	console.log('start');
	// 	console.log(this.apartBase);
	// 	this.getPosts().subscribe(posts =>{
	// 		this.apartBase= posts;
	// 		this.apart=this.apartBase.slice(1,2);			
	// });
	// }

	// getData(){ 
	// 	return this.apart=this.apartBase;
 //   	}
 

 	// for frontend

	inputApart = [
	{price: 4000, square: 48, bed: 2, tv: 1, balcony: 1, floor: 2},
	{price: 4200, square: 56, bed: 3, tv: 2, balcony: 2, floor: 1},
	{price: 4300, square: 52, bed: 1, tv: 3, balcony: 1, floor: 2},
	{price: 4400, square: 65, bed: 2, tv: 1, balcony: 2, floor: 4},
	{price: 5000, square: 75, bed: 4, tv: 3, balcony: 1, floor: 2},
	{price: 5600, square: 42, bed: 3, tv: 1, balcony: 1, floor: 5},
	{price: 3800, square: 53, bed: 2, tv: 2, balcony: 2, floor: 2},
	{price: 3700, square: 62, bed: 3, tv: 1, balcony: 1, floor: 7},
	{price: 3600, square: 64, bed: 4, tv: 2, balcony: 2, floor: 8},
	{price: 5800, square: 72, bed: 1, tv: 1, balcony: 1, floor: 10},
	{price: 6000, square: 57, bed: 1, tv: 2, balcony: 2, floor: 12},
	{price: 3950, square: 61, bed: 2, tv: 1, balcony: 1, floor: 16}
	];

	apart: any[]=this.inputApart.slice(1,4);

	getData(){ 
		return this.apart=this.inputApart;
   	}   	

}