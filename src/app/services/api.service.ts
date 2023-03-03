import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:3000';
  // ------------------------- Products ---------------------------
  postProduct(data:any){
    return this.http.post<any>(`${this.baseUrl}/productList`, data);
  }
  getProduct(){
    return this.http.get<any>(`${this.baseUrl}/productList`);
  }
  putProduct(data:any, id:number){
    return this.http.put<any>(`${this.baseUrl}/productList/${id}`, data);
  }
  deleteProduct(id:number){
    return this.http.delete<any>(`${this.baseUrl}/productList/${id}`);
  }
  // ------------------------- Orders ---------------------------
  getAllOrders(){
    return this.http.get(`${this.baseUrl}/ELEMENT_DATA`);
  }
  // ------------------------- Categories ---------------------------
   // get all Categories
  getAllCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
 //2) Add New Category
  addNewCategory(newCategory: any) {
    return this.http.post(`${this.baseUrl}/categories`, newCategory);
  }
  //3] get category by ID
  getCategoryByID(id: any) {
    return this.http.get(`${this.baseUrl}/categories/${id}`);
  }
  //3) Update Category
  updateCategory(id: any, updatedCategory: any) {
    return this.http.put(`${this.baseUrl}/categories/${id}`, updatedCategory);
  }
  //5] delete Category
  deleteCategory(id: any) {
    return this.http.delete(`${this.baseUrl}/categories/${id}`);
  }
}
