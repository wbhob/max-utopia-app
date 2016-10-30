import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us-page/about-us-page';
import { CommunityCulturePage } from '../pages/community-culture-page/community-culture-page';
import { CommunityHistoryPage } from '../pages/community-history-page/community-history-page';
import { WorksCitedPage } from '../pages/works-cited-page/works-cited-page';
import { OurGovernmentPage } from '../our-government-page/our-government-page';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUsPage,
    CommunityCulturePage,
    CommunityHistoryPage,
    WorksCitedPage,
    OurGovernmentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutUsPage,
    CommunityCulturePage,
    CommunityHistoryPage,
    WorksCitedPage,
    OurGovernmentPage
  ],
  providers: []
})
export class AppModule {}
