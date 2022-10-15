import { Component, OnInit } from '@angular/core';
import { debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html'
})
export class DebounceOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
    .pipe(debounce(value => interval(value*100)))
    .subscribe(data => console.log(data))
  }
   //output -> 0*100 -> 0  (debounce time is 0 so will print 0)
   //          1*100 -> 1  (debounce time is 100 mili second latest value is 1 so it will print 1)
  //           2*100 -> 2  (debounce time is 200 mili second latest value is 2 so it will print 2)
  //           3*100 -> 3  (debounce time is 300 mili second latest value is 3 so it will print 2)
  //            .
  //            .
  ///           .
  //            9*100 -> 9 (debounce time is 900 mili second latest value is 9 so it will print 9)
  //            10*100  -> (debounce time is 1000 mili second as soon as it completes new value generate 11 so 11*100 = 1100 )
  //                10 -> 10*100 (1000) -> 11 -> 11*100 (1100) -> 12 -> 12*100 ->1200
//
//



ngAfterViewInit(){
  let debounceEvent = fromEvent(document.getElementById('button_debounce')!, 'click');

  debounceEvent
  .pipe(debounce(value => interval(1000)))
  .subscribe(data => {
    console.log(data);
  })
}
}
