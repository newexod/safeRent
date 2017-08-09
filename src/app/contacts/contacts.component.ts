import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// <ul>
// 	
// </ul>


@Component({
	selector: 'contacts',
	template: 
		`
			<div class="row">
				<div class="col-md-12">
					<div class="map">
						<h3>Данный проект реализован с помощью Компьютерной школы Hillel</h3>
						<p>ул. Канатная, 22</p>
						<p>БЦ «Альбатрос»</p>
						<p>2й этаж</p>
						<p class="logo-hillel">
							<img src="https://itschool-hillel.org/resources/images/global/logo_small.png.pagespeed.ce.ak4Ziaa10K.png" alt="" />
						</p>
						<agm-map 
							[latitude]="lat" 
							[longitude]="lng" 
							[zoom]="zoom"
							>
						  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
						</agm-map>
					</div>
				</div>
			</div>
			
		`,
	styles: [`
		agm-map {
		  height: 500px;
		}
		h3 {
			text-align: center;
			margin-bottom: 30px;
		}
		p {
			text-align: center;
		}
		.logo-hillel {
			margin-bottom: 30px;
		}
	`]
})

export class ContactsComponent {
	zoom: number = 18;
	lat: number = 46.479658;
	lng: number = 30.747902;

	constructor() {}
}