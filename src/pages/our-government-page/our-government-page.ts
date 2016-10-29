import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OurGovernmentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-our-government-page',
  templateUrl: 'our-government-page.html'
})
export class OurGovernmentPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OurGovernmentPage Page');
  }

}
