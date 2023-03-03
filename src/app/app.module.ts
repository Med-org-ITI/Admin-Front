import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AddProductComponent } from './components/products/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //   },
    //   {
    //     path: 'products',
    //     component: ProductsComponent,
    //   },
    //   {
    //     path: 'orders',
    //     component: OrdersComponent,
    //   },
    //   {
    //     path: 'users',
    //     component: UsersComponent,
    //   }
    // ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShellComponent,
    DashboardComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
