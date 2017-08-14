import { Component} from '@angular/core';



@Component({
  selector: 'personal-root',
  templateUrl: 'personal.component.html',    
  styleUrls: ['personal.component.css']

})

export class Personal{
		
	offer = [
	{name: "Пентхаус на Гагарина", adress: "Одесса, Пантелеймоновская, 3к", price: 13800, square: 53, bed: 2, tv: 2, balcony: 2, floor: 2, link: "../../assets/kvart15.jpg"},
	{name: "Квартира на Черемушках", adress: "Одесса, Екатерининская, 19г", price: 3700, square: 62, bed: 3, tv: 1, balcony: 1, floor: 7, link: "../../assets/kvart16.jpg"},
	{name: "Квартира на Островках", adress: "Одесса, Гагарина, 6а", price: 3600, square: 64, bed: 4, tv: 2, balcony: 2, floor: 8, link: "../../assets/kvart17.jpg"}
	];

	rent = [
	{name: "2-х комнатная квартира", adress: "Одесса, Маршала Жукового, 12", price: 4000, square: 48, bed: 2, tv: 1, balcony: 1, floor: 2, link: "../../assets/kvart.jpg"},
	{name: "3-х комнатная квартира", adress: "Одесса, Малиновского, 2а", price: 4200, square: 56, bed: 3, tv: 2, balcony: 2, floor: 1, link: "../../assets/apart3.png"},
	{name: "4-х комнатная квартира", adress: "Одесса, Адмирала Жукового, 3", price: 4300, square: 52, bed: 1, tv: 3, balcony: 1, floor: 2, link: "../../assets/kvart11.jpg"}
	];

inputApart = [
	{name: "2-х комнатная квартира", adress: "Одесса, Маршала Жукового, 12", price: 4000, square: 48, bed: 2, tv: 1, balcony: 1, floor: 2, link: "../../assets/kvart.jpg"},
	{name: "3-х комнатная квартира", adress: "Одесса, Малиновского, 2а", price: 4200, square: 56, bed: 3, tv: 2, balcony: 2, floor: 1, link: "../../assets/apart3.png"},
	{name: "4-х комнатная квартира", adress: "Одесса, Адмирала Жукового, 3", price: 4300, square: 52, bed: 1, tv: 3, balcony: 1, floor: 2, link: "../../assets/kvart11.jpg"},
	{name: "Пентхаус в Аркадии", adress: "Одесса, Новосельского, 15г", price: 16000, square: 65, bed: 2, tv: 1, balcony: 2, floor: 4, link: "../../assets/kvart12.jpg"},
	{name: "Бунгало в Совиньоне", adress: "Одесса, Таировская, 8", price: 25000, square: 75, bed: 4, tv: 3, balcony: 1, floor: 2, link: "../../assets/kvart13.jpg"},
	{name: "Бунгало в Черноморке",adress: "Одесса, Маразлиевская, 4", price: 25600, square: 42, bed: 3, tv: 1, balcony: 1, floor: 5, link: "../../assets/kvart14.jpg"},
	{name: "Пентхаус на Гагарина", adress: "Одесса, Пантелеймоновская, 3к", price: 13800, square: 53, bed: 2, tv: 2, balcony: 2, floor: 2, link: "../../assets/kvart15.jpg"},
	{name: "Квартира на Черемушках", adress: "Одесса, Екатерининская, 19г", price: 3700, square: 62, bed: 3, tv: 1, balcony: 1, floor: 7, link: "../../assets/kvart16.jpg"},
	{name: "Квартира на Островках", adress: "Одесса, Гагарина, 6а", price: 3600, square: 64, bed: 4, tv: 2, balcony: 2, floor: 8, link: "../../assets/kvart17.jpg"},
	{name: "Двушка на Котовского", adress: "Одесса, Малиновского, 3б", price: 5800, square: 72, bed: 1, tv: 1, balcony: 1, floor: 10, link: "../../assets/kvart18.jpg"},
	{name: "Квартира на бульваре", adress: "Одесса, Цветочный бульвар, 2а", price: 6000, square: 57, bed: 1, tv: 2, balcony: 2, floor: 12, link: "../../assets/kvart19.jpg"},
	{name: "Гестхаус на Малиновского", adress: "Одесса, Малиновского, 7", price: 950, square: 61, bed: 2, tv: 1, balcony: 1, floor: 16, link: "../../assets/kvart20.jpg"}
	];


}
