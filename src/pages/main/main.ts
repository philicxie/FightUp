import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private storage: Storage) {

  }

  current_count = 0;


  ionViewDidLoad() {
      this.storage.get('count').then((val) => {
          if(!val) {
              this.storage.set('count', 0);
              this.current_count = 0;
          } else {
              this.current_count = val*1;
          }
      })
  }

  ionViewWillLeave() {
      this.storage.set('count', this.current_count);
      console.log(this.current_count);
  }

  addCount(num) {
      this.current_count += num*1;
  }
}
