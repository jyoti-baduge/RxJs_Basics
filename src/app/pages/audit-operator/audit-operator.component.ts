import { Component, OnInit } from '@angular/core';
import { audit, interval, take } from 'rxjs';

@Component({
  selector: 'app-audit-operator',
  templateUrl: './audit-operator.component.html'
})
export class AuditOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interval(500)
    .pipe(audit(((val)=> interval(2000))),take(30))
    .subscribe(data=>{
      console.log(data);
    })

    console.log('Audit done');
  }

}
