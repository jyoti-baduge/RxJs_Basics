import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html'
})
export class MapOperatorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4,5)
    // .pipe(map(value => {
    //   return value * 10;
    // })).subscribe(data => {
    //   console.log(data);
    // })

    of(1,2,3,4,5)
    .pipe(filter(value => value % 2 == 0),
      map(value => {
      return value * 10;
    })).subscribe(data => {
      console.log(data);
    })
  }

   ngAfterViewInit(){
  //     let mapButtonEvent = fromEvent(document.getElementById('map_button')!,'click');

  //     mapButtonEvent
  //     .pipe(map((event:Event)=>{
  //       return {
  //         x:(event as PointerEvent).clientX,
  //         y:(event as PointerEvent).clientY,
  //       }
  //     }))
  //     .subscribe(data => {
  //       console.log(data);
  //     })
   }

}
