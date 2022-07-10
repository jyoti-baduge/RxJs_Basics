import { Component, OnInit } from '@angular/core';
import { distinctUntilKeyChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinctuntilkeychanged',
  templateUrl: './distinctuntilkeychanged.component.html'
})
export class DistinctuntilkeychangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let employees = [{id:0,name:'jyoti'},
    // {id:1,name:'jyoti1'},,
    // {id:2,name:'jyoti2'},{id:3,name:'jyoti3'},{id:4,name:'jyoti4'},
    // {id:2,name:'janhvi'},
    // {id:4,name:'dipali'}]

    let employees = [
      { id: 1, name: 'Leela' },
      { id: 2, name: 'Leela2' },
      { id: 2, name: 'Leela2' }, //dropped
      { id: 3, name: 'Le4ela3' },
      { id: 3, name: 'Leela3' }, //dropped
      { id: 2, name: 'Leela2' },
      { id: 4, name: 'Leela4' },
    ];

    from(employees)
    .pipe(
      distinctUntilKeyChanged('name', (prev, cur) => {
            return prev.substr(0, 4) === cur.substr(0, 4);
            })
    ).subscribe(data=>{
      console.log(data);
    })

    // from(employees)
    //   .pipe(distinctUntilKeyChanged('name'))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

  }

}
