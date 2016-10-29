import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CommunityCulturePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-community-culture-page',
  templateUrl: 'community-culture-page.html'
})
export class CommunityCulturePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CommunityCulturePage Page');
  }

}
