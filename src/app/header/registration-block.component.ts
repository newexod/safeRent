import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-block',
  templateUrl: 'registration-block.component.html',
  styleUrls: ['./registration-block.component.css']
})
export class RegistrationBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  registration = {
	link: "../../assets/reg.png"
  }
}
