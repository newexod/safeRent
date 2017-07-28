import { Component } from '@angular/core';

@Component({
	selector: 'edit-info',
	template:
		`
			<div class="edit-container">
				<h2>Редактировать личную информацию</h2>
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="text" class="col-sm-2 control-label">Text</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" id="text" placeholder="Artisanal kale" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="search" class="col-sm-2 control-label">Search</label>
				    <div class="col-sm-8">
				      <input type="search" class="form-control" id="search" placeholder="How do I shoot web" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="email" class="col-sm-2 control-label">Email</label>
				    <div class="col-sm-8">
				      <input type="email" class="form-control" id="email" placeholder="Адрес электронной почты" required>
				    </div>
				  </div>
					<div class="form-group">
				    <label for="url" class="col-sm-2 control-label">URL</label>
				    <div class="col-sm-8">
				      <input type="URL" class="form-control" id="url" placeholder="https://getbootstrap.com">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="phone" class="col-sm-2 control-label">Telephone</label>
				    <div class="col-sm-8">
				      <input type="tel" class="form-control" id="search" pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d" placeholder="(###) ###-##-##" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-2 control-label">Password</label>
				    <div class="col-sm-8">
				      <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="number" class="col-sm-2 control-label">Number</label>
				    <div class="col-sm-8">
				      <input type="number" class="form-control" id="number" placeholder="42">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="datetime" class="col-sm-2 control-label">Date and time</label>
				    <div class="col-sm-8">
				      <input type="datetime" class="form-control" id="datetime" placeholder="19.08.2011 13:45" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="date" class="col-sm-2 control-label">Date</label>
				    <div class="col-sm-8">
				      <input type="date" class="form-control" id="date" placeholder="19.08.2011" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="month" class="col-sm-2 control-label">Month</label>
				    <div class="col-sm-8">
				      <input type="month" class="form-control" id="month" placeholder="Month" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="week" class="col-sm-2 control-label">Week</label>
				    <div class="col-sm-8">
				      <input type="week" class="form-control" id="week" placeholder="Week" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="time" class="col-sm-2 control-label">Time</label>
				    <div class="col-sm-8">
				      <input type="time" class="form-control" id="time" placeholder="Time">
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default">Редактировать</button>
				    </div>
				  </div>
				</form>
			</div>
		`
})

export class EditInfoComponent {}