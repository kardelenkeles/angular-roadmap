import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  //numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4]
  onlyOdd = false;

  employees: any[] = [
    {
      code: 'emp1', name: 'Karthik', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
      code: 'emp2', name: 'sachin', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
      code: 'emp3', name: 'rahul', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
      code: 'emp4', name: 'Mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    },
  ];
}
