import { interval, buffer, bufferCount, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer-count-operator',
  templateUrl: './buffer-count-operator.component.html'
})
export class BufferCOuntOperatorComponent implements OnInit {
timerSubscription!:Subscription;
  constructor() { }

  ngOnInit(): void {
    // interval(1000).pipe(bufferCount(3)).subscribe(data=>{
    //   console.log(data);
    // })

  this.timerSubscription = interval(1000).pipe(bufferCount(3,2)).subscribe(data=>{
    console.log(data);
  })

  }

  cancelTimer(){
    this.timerSubscription.unsubscribe();
    console.log('canceled subscription');
  }



}
