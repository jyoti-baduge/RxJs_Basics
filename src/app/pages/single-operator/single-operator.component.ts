import { Component, OnInit } from '@angular/core';
import { interval, of, single } from 'rxjs';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html'
})
export class SingleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // of(1,2)
    // .pipe(single(value => value % 2 == 0))
    // .subscribe(data => console.log(data),
    // (error) => {
    //   console.log(error);   /output -> 2
    // },
    // () =>{
    //   console.log('complete');
    // }
    // )

    // of(1,2,3,4)
    // .pipe(single(value => value % 2 == 0))
    // .subscribe(data => console.log(data),
    // (error) => {
    //   console.log(error);  //ouput -> error more than one element 
    // },
    // () =>{
    //   console.log('complete');
    // }
    // )

   of(1,2,3,4,5)
    .pipe(single(value => value > 5))
    .subscribe(data => console.log(data),
    (error) => {
      console.log(error);  //ouput -> undefined
    },
    () =>{
      console.log('complete');
    }
    )
  }

}
