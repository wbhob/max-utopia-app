import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the WorksCitedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-works-cited-page',
  templateUrl: 'works-cited-page.html'
})
export class WorksCitedPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello WorksCitedPage Page');
  }

}
