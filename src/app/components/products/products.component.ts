import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
// import { AddProductComponent } from '../add-product/add-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  displayedColumns: string[] = ['productName', 'category', 'expire_date', 'price', 'quantity', 'description', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog:MatDialog, private api:ApiService){}

  openDialog() {
    this.dialog.open(AddProductComponent, {
      width:'30%',
      height:'85%',
      // data: {
      //   animal: 'panda',
      // },
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
        this.getAllProducts();
      }
    })
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  editProduct(row:any){
    this.dialog.open(AddProductComponent, {
      width: '30%',
      height: '85%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully");
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting this product!!");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
