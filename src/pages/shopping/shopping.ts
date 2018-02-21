import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';
import { AchievePage } from '../achieve/achieve';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import{IonicPage, NavParams,ToastController }from 'ionic-angular';
import { TaskItem } from '../../models/taskmodel';


@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html'
})
export class ShoppingPage {
  taskitem = {} as TaskItem;
  task:string = "";

  groupListRef$: FirebaseListObservable<TaskItem[]>;


  constructor(private afDatabase: AngularFireDatabase,
    private ofAuth:AngularFireAuth, public navCtrl: NavController,public taskserviceprovider:TaskServiceProvider) {

  }

ionViewWillLoad(){
  //this.ofAuth.authState.subscribe(data=>console.log(data));
  this.groupListRef$ = this.afDatabase.list('task/');
}

  addTask(task:string){
    if(task.length > 0){
      this.taskserviceprovider.add(task);
      this.taskitem.value = task;
      this.afDatabase.list('task/').push(this.taskitem);
    }
    this.task = "";
  }
  updateStatus(task: TaskItem){
    this.afDatabase.list('delete/').push(task);
    this.afDatabase.list('task/').remove(task.$key);
    // this.taskserviceprovider.updateItemStatus(id);
  }
  deleteTask(id){
    
  }
}
