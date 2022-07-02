import { Component, OnInit } from '@angular/core';
import { interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html'
})
export class TakeLastOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(take(10),takeLast(5)).subscribe(data=>{
      console.log(data);
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('Take Last Completed');
    }
    )
  }

}
