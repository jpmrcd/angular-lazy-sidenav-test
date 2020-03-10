import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component2childComponent } from './component2child/component2child.component';


@NgModule({
  declarations: [Module1Component, Component1Component, Component2Component, Component2childComponent],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
