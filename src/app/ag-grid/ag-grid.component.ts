import { Component, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgDataTypes } from '../data-types';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {

  colDefs: ColDef[] = [
    {field: 'image'},
    {field: 'name', checkboxSelection:true},
    {field: 'price'},
    {field: 'color'},
    {field: 'category'},
    {field: 'description'},
  ];

  public rowData!: Observable<AgDataTypes[]>;

  public defaultColDef: ColDef = {
    sortable: true,
    filter:true,
    editable:true
  };

  constructor(private http: HttpClient){}

  // onGridReady(params: GridReadyEvent<AgDataTypes>) {
  //   this.http.get<AgDataTypes[]>('http://localhost:3000/products').subscribe((data)=>{
  //     this.rowData$= data;
  //     console.log(data);
  //   });
  // }

  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular

  ngOnInit(){
    this.rowData = this.http.get<AgDataTypes[]>('http://localhost:3000/products');
    console.log(this.rowData)
  }


}
