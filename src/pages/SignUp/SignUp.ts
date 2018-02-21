import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../models/user';
 
@IonicPage()
@Component({
  selector: 'page-signUp',
  templateUrl: 'SignUp.html',
})
export class SignUpPage {

  user={} as User;
  
  constructor(private ofAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {

  }

   Signup(user: User){
    try{
      const result =  this.ofAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
    console.error(e);
   }
  }
}