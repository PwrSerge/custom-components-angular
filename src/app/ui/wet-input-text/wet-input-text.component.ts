import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'wet-input-text',
  templateUrl: './wet-input-text.component.html',
  styleUrls: ['./wet-input-text.component.scss']
  
  
})
export class WetInputTextComponent implements OnInit {

  @Input() name: string = name || 'default';
  @Input() label: string;
  @Input() minlength: number = 4;
  @Input() group: FormGroup;
  // @ViewChild('textInpt') txtInput : NgModel;

  private _require: string;
 
  constructor() { }


  // @Input() required:boolean = (this.required !== undefined) ? true: false;

  @Input()
  set required(value:boolean) {
    this._require = value == true ? 'required' : '';

}
  onRequire() {
    return this._require ;
  }

 
 

  ngOnInit() {
    // console.log(this.txtInput._rawValidators['0']._required);
    // console.log(this.txtInput.hasOwnProperty('_rawValidators'));
    // console.log(this.txtInput);

    console.log(this.group.get('firstname'));

  
  }

}
