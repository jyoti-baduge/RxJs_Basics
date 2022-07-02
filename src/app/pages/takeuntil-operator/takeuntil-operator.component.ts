import { Observable, interval, fromEvent, takeUntil } from 'rxjs';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-takeuntil-operator',
  templateUrl: './takeuntil-operator.component.html'
})
export class TakeuntilOperatorComponent implements OnInit, AfterViewInit, OnDestroy {
  buttonEvent!:Observable<Event>;
  constructor() {
    console.log('constructor called');
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    this.buttonEvent = fromEvent(document.getElementById('takeUntil')!, 'click');
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }
  startTimer(){
    interval(500).pipe(takeUntil(this.buttonEvent)).subscribe(data=>{
      console.log(data);
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('take until completed');
    })
  }
}
