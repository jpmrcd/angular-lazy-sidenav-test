import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { Component2childComponent } from './component2child/component2child.component';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';


@NgModule({
  declarations: [Module2Component, Component2childComponent, Component2Component, Component1Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
