import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
})
  export class AppComponent implements OnInit {
   
  title = 'angularSpreadsheet';
  public data: Object[] = [{

    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    ShipAddress: '59 rue de lAbbaye'
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    ShipAddress: 'Luisenstr. 48'
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67'
  }];

  ngOnInit(): void {
    this.data = this.data;
   }
}
