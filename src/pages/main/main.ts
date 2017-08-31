

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, public toastCtrl: ToastController) {}

  userInfo = {
      Account: '',
      Password: ''
  };
    current_count = 0;

  ionViewDidLoad() {

  }
    addCount(num) {
        this.current_count += num*1;
        console.log(this.current_count);
    }
}
