import { Component } from '@angular/core';

import { FilterComponent } from '../filter/filter.component';
import { Popular } from '../popular/popular.component';
import { Weoffer } from '../weoffer/weoffer.component';

@Component({
	selector: 'main',
	template:
		`
			<filter></filter>
			<ad-root></ad-root>
			<personal-root></personal-root>
			<popular-root></popular-root>
			<weoffer-root></weoffer-root>
			<area-root></area-root>
			<totalinfo-root></totalinfo-root>
			<landlord-root></landlord-root>
		`
})

export class MainContentComponent {}