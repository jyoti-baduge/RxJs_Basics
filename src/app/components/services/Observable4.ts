import { Observer } from "rxjs";

export class Observable4 implements Observer<number>{
  next(data:number){
    console.log('observable 4 '+data);
  }
  error(error:string){
    console.log(error);
  }
  complete(){
    console.log('complete done observer 4');
  }

}
