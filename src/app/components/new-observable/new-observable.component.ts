import { Observable4 } from './../services/Observable4';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html'
})
export class NewObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newObservable = new Observable<number>(observer =>{
      for(let i=0;i<=5;i++){
        // if(i===4){
        //   observer.error('error occoured i is value 4');
        //}
        observer.next(i)
      //  setTimeout(()=>{
      //  },5000)
      }
      observer.complete();
    });

    let observer = {
      next:(data:number)=>console.log('observer 1 '+data),
          error:(error:string)=>console.log(error),
          complete:()=>console.log('observer 1 all done')
    }
    newObservable.subscribe(observer);

    newObservable.subscribe({
      next:(data:number)=>console.log('observer 2 '+data),
          error:(error:string)=>console.log(error),
          complete:()=>console.log('observer 2 all done')
    });

    newObservable.subscribe(
      (data:number)=>console.log('observer 3 '+data),
      (error)=> console.log('error occourd' + error),
      ()=>console.log('observer 3 done')
    )

    newObservable.subscribe(new Observable4());
  }

}
