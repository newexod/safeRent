import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  selector: 'modal-content',
  styles: [`
    .custom-modal-container {
      padding: 15px;
    }

    .custom-modal-header {
      background-color: #219161;
      color: #fff;
      -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      margin-top: -15px;
      margin-bottom: 40px;
    }
  `],
  template:
    `
      <div class="container-fluid custom-modal-container">
        <div class="row custom-modal-header">
          <div class="col-sm-12">
            <h1>A Custom modal design</h1>
          </div>
        </div>
        <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
          <div class="col-xs-12">
            <div class="jumbotron">
              <h1>Do the math to quit:</h1>
              <p class="lead">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>
              <span>What is the sum?</span>
              <input class="form-control" type="text" #answer (keyup)="onKeyUp(answer.value)" autofocus>
            </div>
          </div>
        </div>
      </div>
    `
})

export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }  
}






// div class login 
// <div  class="login">
//   <h2>Войти</h2>
//   <div class="login-group">
//     <input type="email" class="login-control" name="mail" placeholder="Адрес электронной почты" required>
//   </div>
//   <div class="login-group">
//     <input type="password" class="login-control" name="password" placeholder="Пароль" required>
//   </div>
//   <div class="login-group">
//     <button (click)="addLogin()">Войти</button>
//   </div>
// </div>



/*@Component({
  selector: 'user-block',
  template: 
    `
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" reqiured>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    `
  // styleUrls: ['./login.component.css']
})
export class UserBlockComponent implements OnInit {

   

  

  ngOnInit() {
  }

}*/
