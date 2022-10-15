import { Component, OnInit } from '@angular/core';
import { elementAt, of } from 'rxjs';

@Component({
  selector: 'app-element-at-operator',
  templateUrl: './element-at-operator.component.html'
})
export class ElementAtOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4,5)
    // .pipe(elementAt(3))
    // .subscribe(data => {
    //   console.log(data);
    // })

    of(1,2,3,4,5)
    .pipe(elementAt(7,100))
    .subscribe(data => {
      console.log(data);
    })
  }

}
