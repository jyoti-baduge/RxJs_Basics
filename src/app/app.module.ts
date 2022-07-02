import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { ComponentsComponent } from './components/Function-Observable/Function-Observable.component';
import { CancallingObservableComponent } from './components/cancalling-observable/cancalling-observable.component';
import { BasicsOperatorComponent } from './components/basics-operator/basics-operator.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { AppRoutingModule } from './app-routing-module';
import { BufferCOuntOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeComponent } from './pages/buffer-time/buffer-time.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeuntilOperatorComponent } from './pages/takeuntil-operator/takeuntil-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    ComponentsComponent,
    CancallingObservableComponent,
    BasicsOperatorComponent,
    OperatorsComponent,
    BufferOperatorComponent,
    BufferCOuntOperatorComponent,
    BufferTimeComponent,
    BufferToggleOperatorComponent,
    TakeOperatorComponent,
    TakeLastOperatorComponent,
    TakeuntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipOperatorComponent,
    SkipLastOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
