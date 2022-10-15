import { Component, OnInit } from '@angular/core';
import { ignoreElements, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html'
})
export class IgnoreElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4,5)
    // .pipe(ignoreElements())
    // .subscribe(
    //   (data) => {
    //   console.log(data);
    // },
    // (error) => {
    //   console.log(error);
    // },
    // ()=>{
    //   console.log('compplete');
    // }
    // )

    interval(1000)
    .pipe(take(5),ignoreElements())
    .subscribe(
      (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    },
    ()=>{
      console.log('ignore complete');
    }
    )
  }

}
