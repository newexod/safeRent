import { Component, OnInit, Input, Output, ViewContainerRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'landlord-root',
  templateUrl: 'landlord.component.html', 
  styleUrls: ['landlord.component.css']

})

export class Landlord{
	isShow: boolean = false;

	toggleShow(){
		this.isShow = !this.isShow
	}
}
