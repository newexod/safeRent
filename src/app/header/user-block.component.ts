import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// div class login 

@Component({
  selector: 'user-block',
  template: 
    `
      <div  class="login">
        <h2>Войти</h2>
        <div class="login-group">
          <input type="email" class="login-control" name="mail" placeholder="Адрес электронной почты" required>
        </div>
        <div class="login-group">
          <input type="password" class="login-control" name="password" placeholder="Пароль" required>
        </div>
        <div class="login-group">
          <button (click)="addLogin()">Войти</button>
        </div>
      </div>
    `
  // styleUrls: ['./login.component.css']
})
export class UserBlockComponent implements OnInit {

   

  

  ngOnInit() {
  }

}
