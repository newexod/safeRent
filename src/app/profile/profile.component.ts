import { Component } from '@angular/core';
// <edit-info></edit-info>
@Component({
	// selector: 'profile',
	template:
		`
			<div class="edit" [ngStyle]="{'background-image':'url(' + edit.link + ')'}">
				<h2>Личный кабинет</h2>
			</div>
			
			<main-info></main-info>
			
		
		`,
		styles:
			[`
				.edit {
					max-width: 1600px;
					height: 499px;
					background-size: cover;
					display: flex;
					justify-content: center;
					align-items: flex-end;
					
					
				}
				h2 {
					font-size: 36px;
					font-weight: 500;
					margin-bottom: 40px;
					padding: 22px 242px;
					background-color: white;
					border-radius: 5px;
				}
			`]
})

export class ProfileComponent {
	edit = {
		link: "../../assets/profile.png"
	}
}