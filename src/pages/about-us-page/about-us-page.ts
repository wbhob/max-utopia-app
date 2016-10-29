import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AboutUsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about-us-page',
  templateUrl: 'about-us-page.html'
})
export class AboutUsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AboutUsPage Page');
  }

}
