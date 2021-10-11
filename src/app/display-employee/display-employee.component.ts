import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../shared/api.service";


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  employeeData !: any ;
  formValue !:FormGroup;
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
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.api.getEmployee()
      .subscribe(res=>{
        this.employeeData = res;
      })

  }

}
