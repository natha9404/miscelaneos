import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <hr>
  <app-ng-style></app-ng-style>
  <app-clases></app-clases>

  <!-- <p appResaltado>
      Hola Mundo</p> -->
      <app-ng-switch></app-ng-switch>
    `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
