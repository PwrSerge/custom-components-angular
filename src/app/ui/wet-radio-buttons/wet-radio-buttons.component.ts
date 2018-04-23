import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'wet-radio-buttons',
  templateUrl: './wet-radio-buttons.component.html',
  styleUrls: ['./wet-radio-buttons.component.scss']
})
export class WetRadioButtonsComponent implements OnInit {
@Input() name;
@Input() lov;
@Input() groupName;
@Input() fCtrlName: string;
@Input() group: FormGroup;
// @Input() set required(value: boolean) {
//     (this.required !== undefined)  ? true : false;
//   }

  @Input()
  // set formCtrlName(value: string) {
  //   this.fCtrlName = value ;
  // }

  // @HostBinding('attr.formControlName') formControlName: string = this.fCtrlName;
  // @HostBinding(‘attr.role’)

private genders: any[] = [
  'Female',
  'Intersex',
  'Male',
 ' Unspecified',
  'None of the above'
]
  onRequired(){
  return true;
}

 


// setLov(list: string) {
//   return `let item of {list}`;
// }

  constructor() { }

  ngOnInit() {
  }

}
