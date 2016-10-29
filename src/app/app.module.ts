import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us-page/about-us-page';
import { CommunityCulturePage } from '../pages/community-culture-page/community-culture-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUsPage,
    CommunityCulturePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutUsPage,
    CommunityCulturePage
  ],
  providers: []
})
export class AppModule {}
