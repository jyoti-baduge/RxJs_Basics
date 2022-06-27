import { Observable } from "rxjs";

export function functioObs(){
  console.log('function call');
  return '1';
}

export const funcObservable = new Observable(observer => {
  console.log('Observable call');
  observer.next('1');
  observer.next('2');
})
