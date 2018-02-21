// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../models/taskmodel';
import { StorageServiceProvider } from '../storage-service/storage-service';
/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskServiceProvider {

  public tasks:Array<any> = [];
  public now:number;

  constructor(public storage:StorageServiceProvider) {
    this.now = new Date().getTime();
  }
  add( task:string ){
    let item = new Task(task,0);
    this.tasks.push(item);
  }
  getTasksWithStatus(status){
    let FilteredTasks:Array<any> = [];
    let len:number = this.tasks.length;
    for(let i=0; i<len; i++){
      let item = this.tasks[i];
      if(item.status == status){
        FilteredTasks.push(item);
      }
    }
    return FilteredTasks;
  }
  updateItemStatus(id){
    this.tasks.forEach((item,index) => {
      if(item.id == id){
        if( item.status == 1){
          item.status = 0;
        }
        else{
          item.status = 1;
        }
      }
    });
  }
  deleteItem(id){
    this.tasks.forEach((item,index) => {
      if(item.id == id){
        this.tasks.splice(index,1);
      }
    });
  }
}
