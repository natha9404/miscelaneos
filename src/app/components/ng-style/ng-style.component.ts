import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.FontSize.px]="tamano">
      Hola Mundo.. esta es una etiqueta
    </p>

    <button type="button" class="btn btn-primary" (click)=" tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button type="button" class="btn btn-primary" (click)=" tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
