import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  template: `
    <p>
      module2 works!
    </p>
  `,
  styles: [
  ],
})
export class Module2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
