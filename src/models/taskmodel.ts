export class Task{
  constructor( public name:string, public status:number, public id:number = 0){
    this.name = name;
    this.status = status;
    this.id = new Date().getTime();
    return this;
  }
}

export interface TaskItem{
  $key? : string;
  value: string;
}
