import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2child',
  template: `
    <p>
      component2child works!
    </p>
  `,
  styles: [
  ],
})
export class Component2childComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
