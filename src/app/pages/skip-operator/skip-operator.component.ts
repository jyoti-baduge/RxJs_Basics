import { Component, OnInit } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html'

})
export class SkipOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(skip(5),take(10)).subscribe(data=>{
      console.log(data); //print output 5 to 14
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('skip operator completed');
    })
  }
}

