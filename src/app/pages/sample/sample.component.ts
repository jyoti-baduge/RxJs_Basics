import { Component, OnInit } from '@angular/core';
import { interval, sample, take } from 'rxjs';

@Component({
  selector: 'app-sample-operator',
  templateUrl: './sample.component.html'
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
    .pipe(sample(interval(1000)),take(10))
    .subscribe(data => {
      console.log(data);
    })
    console.log('sample done')
  }


}
