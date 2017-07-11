import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'social-links',
  template: 
  `
    <p>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX///8AAADl5eXg4ODk5OTj4+P19fUYGBizs7Pu7u4HBwenp6d6enoqKirR0dFCQkIgICAODg5hYWGQkJDHx8e2trbAwMBISEgWFhbb29uampo3NzdpaWmDg4PNzc1ubm7RzN9fAAAAgElEQVQYlV3O6w6CMBQD4HaMXXWAOkAm8v5v6TKnyeifk3xpTorJC9nV9MKvMGgSYVtQkC0IdOU+Q23KDFt6YV8TxJK2DD1m8q2osZOxAA4uhoN3k8cX7EjSkUN5mgGGRdxFVYC/Uocbef8BrHnkog8ZxHmYOk+PLczQxop/bBw/g/cEhOn67ysAAAAASUVORK5CYII=" alt="" />
      <img src="http://kickstart.bikeexif.com/wp-content/themes/bikeexif-2015/inc/images/instagramhead.png" alt="" />
      <img src="http://www.vstarentertainment.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/twitter.png" alt="" />
      <img src="http://www.vstarentertainment.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/facebook.png" alt="" />
    </p>
  `
})
export class SocialLinksComponent implements OnInit {

  ngOnInit() {
  }


}
