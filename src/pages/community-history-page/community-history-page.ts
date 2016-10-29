import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CommunityHistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-community-history-page',
  templateUrl: 'community-history-page.html'
})
export class CommunityHistoryPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CommunityHistoryPage Page');
  }

}
