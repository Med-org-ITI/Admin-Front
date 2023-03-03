import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { AddProductComponent } from '../add-product/add-product.component';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public dialog:MatDialog){}

  openDialog() {
    this.dialog.open(AddProductComponent, {
      width:'30%',
      // height:'50%',
      // data: {
      //   animal: 'panda',
      // },
    });
  }
}
