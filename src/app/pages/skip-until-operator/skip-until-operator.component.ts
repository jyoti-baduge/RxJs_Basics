import { Observable, interval, skipUntil, take, fromEvent } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html'
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;
  numbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.buttonEvent = fromEvent(document.getElementById('skip-until')!, 'click');

    interval(500).pipe(skipUntil(this.buttonEvent),take(20)).subscribe(data=>{
      console.log(data);
      this.numbers.push(data);
    })
  }
}
