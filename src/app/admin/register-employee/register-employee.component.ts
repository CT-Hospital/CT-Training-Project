import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  registerEmployeeForm: FormGroup = new FormGroup({});
  constructor() {}

  options :string[]=["Mr","Ms.","Mrs.","Dr."];
  
  ngOnInit(): void {
    // title: new FormControl(this.post?.title ? this.post.title : null, []),
    // description: new FormControl(
    //   this.post?.description ? this.post.description : null,
    //   []
    // ),
    this.registerEmployeeForm = new FormGroup({
      // title:
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      Dob: new FormControl(),
      role: new FormControl(),
      employeeId: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.registerEmployeeForm);
  }

}
