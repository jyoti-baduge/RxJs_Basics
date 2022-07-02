import { Observable, interval, filter, map, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-operator',
  templateUrl: './basics-operator.component.html'
})
export class BasicsOperatorComponent implements OnInit {
cancelSubscription! : Subscription;
  constructor() { }

  ngOnInit(): void {
    const newObservable = interval(1000);
    // newObservable.subscribe(num => {
    //   if(num % 2 === 0){
    //     console.log('Even number ' + num);
    //   }
    // })

    this.cancelSubscription = newObservable.pipe(
      filter(number=>{
        return number % 2 === 0;
      }),
      map(num=>{
        return 'even number ' + num;
      })
      ).subscribe(data=>{
        console.log(data);
      })
  }

  cancelSubscriptions(){
    this.cancelSubscription.unsubscribe();
    console.log('subscription canceled')
  }

}
