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
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { DistinctComponent } from './pages/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctuntilkeychangedComponent } from './pages/distinctuntilkeychanged/distinctuntilkeychanged.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';

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
    SkipLastOperatorComponent,
    SkipUntilOperatorComponent,
    SkipWhileOperatorComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    DistinctuntilkeychangedComponent,
    FilterOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
