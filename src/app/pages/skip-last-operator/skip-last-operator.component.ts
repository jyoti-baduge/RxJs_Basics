import { Component, OnInit } from '@angular/core';
import { of, skipLast, interval, pipe, tap, take } from 'rxjs';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html'

})
export class SkipLastOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // of(1,2,3,4,5).pipe(skipLast(2)).subscribe(data=>{
    //   console.log(data);
    // })

    interval(1000).pipe(

      tap(data => {
        console.log(data)
      }),
      skipLast(10), take(20)).subscribe(data=>{
      console.log('skip last started to print number');
      console.log(data); //wait till 10 number from 11 num start to print
    })
  }

}
