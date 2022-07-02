import { bufferTime, interval, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html'
})
export class BufferTimeComponent implements OnInit {
timerSubscription!:Subscription;
  constructor() { }

  ngOnInit(): void {
    this.timerSubscription = interval(1000).pipe(bufferTime(2000, 1000)).subscribe(data => {
      console.log(data);
    })
  }
  cancelTimer(){
    this.timerSubscription.unsubscribe();
    console.log('canceled subscription');
  }
}
