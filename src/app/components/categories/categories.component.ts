import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddCategoryComponent } from '../categories/add-category/add-category.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesPageComponent implements OnInit{
  constructor(public myService: ApiService, private dialog: MatDialog) {}
  categories: any;

  //Responsible calling API
  ngOnInit(): void {
    this.myService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteCategory(id: any) {
    this.myService.deleteCategory(id).subscribe();
  }

  openDialogNewCategory() {
    this.dialog.open(AddCategoryComponent, { width: '30%' });
  }

  // openDialogUpdateCategory() {
  //   this.dialog.open(UpdateCategoryComponent, { width: '30%' });
  // }

}
