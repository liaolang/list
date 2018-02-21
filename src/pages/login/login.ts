import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../SignUp/SignUp';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = {};
  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  SignUp(){console.log('Test');
    this.navCtrl.push(SignUpPage);
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.user["email"],this.user['password'])
      .then(data =>{
        this.navCtrl.push(TabsPage);
        
      })
      .catch(error => {

      })
  }
  }


