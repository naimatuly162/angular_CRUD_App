import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms";
import {EmployeeModel} from "./add-employee.component.model";
import {ApiService} from "../shared/api.service";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  formValue !:FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();

  constructor(private formbuilder: FormBuilder ,
              private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email :[''],
      mobile : [''],
      salary: ['']
    })
  }
 postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj)
      .subscribe( res =>{
     console.log(res);
     alert("Employee Added SuccessFully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
    },
    err =>{
        alert("Something went wrong")
    })
 }

}
