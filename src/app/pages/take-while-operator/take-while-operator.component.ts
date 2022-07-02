import { interval, takeWhile } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html'
})
export class TakeWhileOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(takeWhile((x)=>x<5, true)).subscribe(data=>{
      console.log(data);
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('take While completed');
    })
  }

}
