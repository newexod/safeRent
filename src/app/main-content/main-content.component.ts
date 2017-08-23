import { Component } from '@angular/core';

import { FilterComponent } from '../filter/filter.component';
import { Popular } from '../popular/popular.component';
import { Weoffer } from '../weoffer/weoffer.component';
import { Landlord } from '../landlord/landlord.component';
import { Postedapart } from '../postedapart/postedapart.component';

// <filter2-root></filter2-root>

@Component({
	selector: 'main',
	template:
		`
			<filter></filter>
						
			<popular-root></popular-root>
			<weoffer-root></weoffer-root>
			<area-root></area-root>
			<totalinfo-root></totalinfo-root>
			<landlord-root></landlord-root>
		`
})

export class MainContentComponent {}