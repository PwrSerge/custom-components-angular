import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
  <h1> Alert {{ type }} </h1>
  `,
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }
  @Input() type: string = 'succes';
  ngOnInit() {
  }

}
