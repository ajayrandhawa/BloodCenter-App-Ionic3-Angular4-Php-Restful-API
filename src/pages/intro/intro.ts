import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { RegisterPage } from '../../pages/register/register';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);

    // set status bar to white
    this.statusBar.hide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  gotohome(){
    this.navCtrl.setRoot(HomePage);
  }

  gotoregister(){
    this.navCtrl.push(RegisterPage);
  }
}
