import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  constructor() { }


  upcase(strings, ...values) {
    return values.map(name => name[0].toUpperCase() + name.slice(1))
      .join(' ') + strings[2];
  };

  person = {
    first: 'brendan',
    last: 'eich',
    age: 56,
    position: 'CEO of Brave Software',
  };




  ngOnInit() {
    // es6 desctructuring
      let { first, last } = this.person;
    // console.log(this.upcase`${first} ${last} is the creator of JavaScript!`);
  }

}
