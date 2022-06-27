import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { functioObs, funcObservable } from './components/services/Function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit{
  title = 'rxjs_Basics';
  postArray = [{title:'rxjs1', description:'rxjs description1'},
  {title:'rxjs2', description:'rxjs description2'},
  {title:'rxjs3', description:'rxjs description3'}]

  postArrayObservable$ = from(this.postArray);

  promise = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('resolve promise data, sending done');
    }, 3000);
  })

  promiseObservable$ = from(this.promise);
  constructor(){
    // this.postArrayObservable$.subscribe({
    //   next: (data)=>console.log(data),
    //   error: (error) => console.log(error),
    //   complete: ()=> console.log('rxjs complete done')
    // })

    // this.promiseObservable$.subscribe({
    //   next: (data)=>console.log(data),
    //   error: (error) => console.log(error),
    //   complete: ()=> console.log('rxjs complete done! promise done')
    // })
    console.log('before function call');
        console.log(functioObs());
    console.log('after function call');

    console.log('before observable call');
    funcObservable.subscribe( data => {
      console.log(data);
    })
    console.log('after observable call');


  }

  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('click-button')!,'click').subscribe({
    //   next: (data)=>console.log(data),
    //   error: (error) => console.log(error),
    //   complete: ()=> console.log('click event done')
    // })
  }
}
