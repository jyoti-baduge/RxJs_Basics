import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';

@Component({
  selector: 'app-last-operator',
  templateUrl: './last-operator.component.html'
})
export class LastOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4,5)
    // .pipe(last())
    // .subscribe(data=>{
    //   console.log(data); //output -> 5
    // },
    // (error) => {
    //   console.log(error);
    // },
    // () =>{
    //   console.log('complete');
    // })

    // of(1,2,3,4,5)
    // .pipe(last(el => el > 2))
    // .subscribe(data=>{
    //   console.log(data);  //output -> 5
    // },
    // (error) => {
    //   console.log(error);
    // },
    // () =>{
    //   console.log('complete');
    // })

    // of(1,2,3,4,5)
    // .pipe(last(el => el > 6))
    // .subscribe(data=>{
    //   console.log(data);  //output -> Error message :  "no elements in sequence"
    // },
    // (error) => {
    //   console.log(error);
    // },
    // () =>{
    //   console.log('complete');
    // })


     of(1,2,3,4,5)
    .pipe(last(el => el > 6, 10))
    .subscribe(data=>{
      console.log(data);  //output -> 10
    },
    (error) => {
      console.log(error);
    },
    () =>{
      console.log('complete');
    })
  }

}
