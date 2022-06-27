import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cancalling-observable',
  templateUrl: './cancalling-observable.component.html'
})
export class CancallingObservableComponent implements OnInit {
timerConsoleSubscription!: Subscription;
timerBrowserSubscription!: Subscription;
timers:number[] = []
  constructor() { }

  ngOnInit(): void {
    const newObservable = new Observable<number>(observer => {
      let i = 0;
      let interval=setInterval(() => {
        console.log('Interval excuting');
        observer.next(i++);
        // if(i===4){
        //   observer.error('error occoured')
        // }
      },1000)

      return()=>{
        console.log('called when observable unsubscribe');
        clearInterval(interval);
      }
    })

    this.timerConsoleSubscription = newObservable.subscribe(data=>{
      console.log(new Date + ' ' + data);
    });

    this.timerBrowserSubscription = newObservable.subscribe(data=>{
      this.timers.push(data);
    })
    //this.timerConsoleSubscription.remove();
    this.timerConsoleSubscription.add(this.timerBrowserSubscription);

  }

  cancelTimer(){
    console.log('canceled subscribtion')
    this.timerConsoleSubscription.unsubscribe();
  }

}
