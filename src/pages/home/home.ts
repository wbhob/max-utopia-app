import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us-page/about-us-page';
import { CommunityCulturePage } from '../community-culture-page/community-culture-page';
import { CommunityHistoryPage } from '../community-history-page/community-history-page';
import { OurGovernmentPage } from '../our-government-page/our-government-page';
import { WorksCitedPage } from '../works-cited-page/works-cited-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutUsPage = AboutUsPage;
  communityCulturePage = CommunityCulturePage;
  ourGovernmentPage = OurGovernmentPage;
  communityHistoryPage = CommunityHistoryPage;
  worksCitedPage = WorksCitedPage;
  constructor(public navCtrl: NavController) {
    
  }

}
