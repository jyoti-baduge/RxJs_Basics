import { interval, of, pipe, skipWhile } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-while-operator',
  templateUrl: './skip-while-operator.component.html'
})
export class SkipWhileOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //once skipWhile is false it will not check again. it prints value even x < 3 = true

    of(1,2,3,4,5,1,2).pipe(skipWhile(x=>x<3)).subscribe(data=>{
      console.log(data);   //output 3,4,5,1,2
    })
  }

}
