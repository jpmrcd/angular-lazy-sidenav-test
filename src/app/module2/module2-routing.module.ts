import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module2Component } from './module2.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  { path: '', component: Module2Component },  
  { path: '1', component: Component1Component },
  { path: '2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
