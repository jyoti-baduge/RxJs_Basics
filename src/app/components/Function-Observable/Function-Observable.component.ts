import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'function-observable-components',
  templateUrl: './Function-Observable.component.html'
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('push to git');
  }

}
