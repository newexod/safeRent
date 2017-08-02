import { Component } from '@angular/core';

@Component({
	selector: 'profile',
	template:
		`
			<div class="edit" [ngStyle]="{'background-image':'url(' + edit.link + ')'}"></div>
			<h2>Личный кабинет</h2>
			<main-info></main-info>
			<edit-info></edit-info>
		`,
		styles:
			[`
				.edit {
					max-width: 1600px;
					height: 499px;
					background-size: cover;
				}
			`]
})

export class ProfileComponent {
	edit = {
		link: "../../assets/profile.png"
	}
}