import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datadic = "";

  constructor(public navCtrl: NavController,private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#ea2429');
  }

}
