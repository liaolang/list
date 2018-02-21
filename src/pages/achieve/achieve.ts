import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { TaskItem } from '../../models/taskmodel';

@Component({
  selector: 'page-achieve',
  templateUrl: 'achieve.html'
})
export class AchievePage {


  groupListRef$: FirebaseListObservable<TaskItem[]>;


  constructor(private afDatabase: AngularFireDatabase,public navCtrl: NavController,public taskserviceprovider:TaskServiceProvider) {

  }

  ionViewWillLoad(){
    this.groupListRef$ = this.afDatabase.list('delete/');
  }
  updateStatus(task:TaskItem){

    this.afDatabase.list('task/').push(task);
    this.afDatabase.list('delete/').remove(task.$key);
  }

  deleteItem(task:TaskItem){
    console.log('task ID' + task.$key);
    this.afDatabase.list('delete/').remove(task.$key);
  }
}
