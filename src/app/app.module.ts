import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Myapp } from './app.component';

import { ShoppingPage } from '../pages/shopping/shopping';
import { AchievePage } from '../pages/achieve/achieve';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/SignUp/SignUp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { TaskServiceProvider } from '../providers/task-service/task-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { MyproviderProvider } from '../providers/myprovider/myprovider';

// Import AngularFire

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
 
 import {FIREBASE_CONFIG} from "./app.firebase.config"
// Firebase Configuration


@NgModule({
  declarations: [
    Myapp,
    ShoppingPage,
    AchievePage,
    TabsPage,
    LoginPage,
   SignUpPage,
   
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Myapp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Myapp,
    ShoppingPage,
    AchievePage,
    TabsPage,
    LoginPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskServiceProvider,
    StorageServiceProvider,
    MyproviderProvider,
  ]
})
export class AppModule {
//

}
