import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUrl } from './ui/url.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  title = 'app';
  signupForm: FormGroup;
  // @ViewChild('f') signupForm: NgForm;

  defaultQuestion = "default";

  onSubmit() {
    console.log(this.signupForm);
  }
  console.log('test');
  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'telephone': new FormControl(null),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'websiteUrl': new FormControl('', [Validators.required, ValidateUrl]),
      'gender': new FormControl('Female')
    }) 
  
  
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

}
