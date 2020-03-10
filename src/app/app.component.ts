import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { routes } from './module1/module1-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(router: Router) {
    console.log(router.config);
    console.log(router.routerState);
    // console.log(routes);
  }
}
