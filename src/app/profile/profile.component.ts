import { Component } from '@angular/core';
// <edit-info></edit-info>
@Component({
	// selector: 'profile',
	template:
		`
			<div class="edit" [ngStyle]="{'background-image':'url(' + edit.link + ')'}">
				<h1>Личный кабинет</h1>
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
				h1 {
					font-size: 36px;
					font-weight: 500;
					margin-bottom: 40px;
					padding: 22px 242px;
					background-color: white;
					border-radius: 5px;
				}
				@media (max-width: 1100px) {
					h1 {
						padding: 22px 212px;
					}
				}
				@media (max-width: 850px) {
					h1 {
						padding: 18px 140px;
					}
				}
				@media (max-width: 700px) {
					h1 {
						padding: 12px 100px;
					}
				}
				@media (max-width: 550px) {
					h1 {
						padding: 8px 40px;
					}
				}
				@media (max-width: 430px) {
					h1 {
						font-size: 30px;
						padding: 8px 20px;
					}
				}
			`]
})

export class ProfileComponent {
	edit = {
		link: "../../assets/profile.png"
	}
}