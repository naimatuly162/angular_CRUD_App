
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { DisplayEmployeeComponent } from "./display-employee/display-employee.component";
import { EmployeeDashboardComponent } from "./employee-dashboard/employee-dashboard.component";

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'display', component:  DisplayEmployeeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
