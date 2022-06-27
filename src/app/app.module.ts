import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { ComponentsComponent } from './components/Function-Observable/Function-Observable.component';
import { CancallingObservableComponent } from './components/cancalling-observable/cancalling-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    ComponentsComponent,
    CancallingObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
