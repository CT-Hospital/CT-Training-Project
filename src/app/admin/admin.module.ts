import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'registeremployee',
    component: RegisterEmployeeComponent,
  },
  {
    path: 'allemployee',
    component: AllEmployeeComponent,
  },
];

@NgModule({
  declarations: [RegisterEmployeeComponent, AllEmployeeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
