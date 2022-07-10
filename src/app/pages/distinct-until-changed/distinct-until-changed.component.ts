import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html'
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,2,1,3).pipe(distinctUntilChanged()).subscribe(data => {
    //   console.log(data); //output 1,2,1,3
    // })

    // of(1,2,3,4).pipe(distinctUntilChanged((prev,curr)=>{
    //   return curr === prev+1;
    // })).subscribe(data => {
    //   console.log(data); //expected 1 , output 1,3
    // })

    let employees = [{id:1,name:'jyoti'},
    {id:1,name:'jyoti'},
    {id:2,name:'janhvi'},
    {id:4,name:'dipali'}]

    from(employees).pipe(distinctUntilChanged((prev,curr)=>{
      return prev === curr;
    },(k)=>k.id)).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
