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
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-offset-11">
            <input type="button" class="btn btn-default" value="X" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
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
