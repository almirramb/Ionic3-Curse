import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert() { const alert = this.alertCtrl.create({ 
    title: 'Mensagem', 
    subTitle: 'Você logou!', 
    buttons: ['OK'] 
 }); 
 alert.present(); 
 }

}
