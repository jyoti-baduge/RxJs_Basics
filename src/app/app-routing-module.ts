import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { DistinctuntilkeychangedComponent } from './pages/distinctuntilkeychanged/distinctuntilkeychanged.component';
import { DistinctUntilChangedComponent } from './pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctComponent } from './pages/distinct/distinct.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { TakeuntilOperatorComponent } from './pages/takeuntil-operator/takeuntil-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferCOuntOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferTimeComponent } from './pages/buffer-time/buffer-time.component';
import { OperatorsComponent } from './pages/operators/operators.component';

const routes : Routes = [{
  path: 'operators',
  component: OperatorsComponent,
  children:[{path:'', pathMatch:'full',  component:BufferOperatorComponent},
  {path:'buffercount', component:BufferCOuntOperatorComponent},
  {path:'buffertime', component:BufferTimeComponent},
  {path:'buffertoggle', component:BufferToggleOperatorComponent},
  {path:'take', component:TakeOperatorComponent},
  {path:'takelast', component:TakeLastOperatorComponent},
  {path:'takeUntil', component:TakeuntilOperatorComponent},
  {path:'takeWhile', component:TakeWhileOperatorComponent},
  {path:'skip', component:SkipOperatorComponent},
  {path:'skipLast', component:SkipLastOperatorComponent},
  {path:'skipUntil', component:SkipUntilOperatorComponent},
  {path:'skipWhile', component:SkipWhileOperatorComponent},
  {path:'distinct', component:DistinctComponent},
  {path:'distinctUntilChanged', component:DistinctUntilChangedComponent},
  {path:'distinctUntilKeyChanged', component:DistinctuntilkeychangedComponent},
  {path:'filter', component:FilterOperatorComponent}]

}];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
