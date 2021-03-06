import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  employeeId: number;
  fullName: string;
  dob: Date;
  role: string;
  emailID: string;

  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  // check: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    employeeId: 1,
    fullName: 'KB',
    dob: new Date(),
    role: 'SE',
    emailID: 'ksuaisai@skja',
  },

  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , check:'sadsa'},
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css'],
})
export class AllEmployeeComponent {
  displayedColumns: string[] =  ['employeeId', 'fullName', 'dob', 'role','emailID'];

  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
