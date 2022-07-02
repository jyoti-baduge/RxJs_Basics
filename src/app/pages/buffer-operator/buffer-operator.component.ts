import { fromEvent, Observable, tap } from 'rxjs';
import { buffer, interval } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html'
})
export class BufferOperatorComponent implements OnInit, AfterViewInit {
intervalData:any=[];
bufferData$!:Observable<Event>;
  constructor() { }

  ngOnInit(): void {
  }

  staertInterval(){
    interval(1000).pipe(buffer(this.bufferData$)).subscribe(number=>{
      this.intervalData.push(...number); // console.log(number);
    })
  }

  ngAfterViewInit(){
    this.bufferData$ = fromEvent(document.getElementById('buffer-data')!, 'click');
  }
}
