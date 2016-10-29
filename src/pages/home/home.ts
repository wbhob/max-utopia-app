import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us-page/about-us-page';
import { CommunityCulturePage } from '../community-culture-page/community-culture-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
