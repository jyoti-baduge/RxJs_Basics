import { interval, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html'
})
export class TakeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(take(5)).subscribe(data=>{
      console.log(data);
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('complete');
    }
    )
  }

}
