import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

export interface PeriodicElement {
  id: number;
  items: string;
  status: string;
  total: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, items: 'Hydrogen', status: 'pending', total: 'H' },
  { id: 2, items: 'Helium', status: 'pending', total: 'He' },
  { id: 3, items: 'Lithium', status: 'canceled', total: 'Li' },
  { id: 4, items: 'Beryllium', status: 'recieved', total: 'Be' },
  { id: 5, items: 'Boron', status: 'recieved', total: 'B' },
  { id: 6, items: 'Carbon', status: 'canceled', total: 'C' },
  { id: 7, items: 'Nitrogen', status: 'on hold', total: 'N' },
  { id: 8, items: 'Oxygen', status: 'canceled', total: 'O' },
  { id: 9, items: 'Fluorine', status: 'recieved', total: 'F' },
  { id: 10, items: 'Neon', status: 'pending', total: 'Ne' },
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
 
  displayedColumns: string[] = ['id', 'items', 'status', 'total', 'edit', 'delete'];
  dataToDisplay = [...ELEMENT_DATA];

  

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex],
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}
class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
