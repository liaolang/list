import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationProvider {
//   public user:Observable;
  constructor(public http: HttpClient, private _AFAuth  : AngularFireAuth) {
    // this.user = this._AFAuth.authState;
  }

}
