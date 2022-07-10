import { Component, OnInit } from '@angular/core';
import { distinct, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html'
})
export class DistinctComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,1,2,3,4).pipe(distinct()).subscribe(data => {
      console.log(data);
    });

    var employes = [{id:1, name:'Jyoti'},
    {id:2, name:'Janhvi'},
    {id:3, name:'Rupali'},
    {id:4, name:'Jyoti'},
    {id:5,name:'Dipali'}]

    console.log('distinct by name');
    of(...employes).pipe(distinct(x=>x.name)).subscribe(data => {
      console.log(data);
    })
    console.log('distinct by id');
    from(employes).pipe(distinct(x=>x.id)).subscribe(data => {
      console.log(data);
    })
  }

}
