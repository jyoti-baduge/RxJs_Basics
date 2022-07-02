import { bufferToggle, interval, tap, Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html'
})
export class BufferToggleOperatorComponent implements OnInit {
timerSubscription!:Subscription;
  constructor() { }

  ngOnInit(): void {
    let opening = interval(6000).pipe(tap(() => {console.log('opened')}));
    let closing = () => interval(3000).pipe(tap(() => {console.log('closed')}));

    this.timerSubscription = interval(1000).pipe(
      //tap(data=>{console.log(data)}),
      bufferToggle(opening, closing), take(3)).subscribe(data=>{
      console.log(data);
    })
  }


  cancelTimer(){
    this.timerSubscription.unsubscribe();
    console.log('canceled subscription');
  }
}
