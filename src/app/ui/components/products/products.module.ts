import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule} from "@angular/router";
import {DahsboardComponent} from "../../../admin/components/dahsboard/dahsboard.component";



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: ProductsComponent}
    ])
  ]
})
export class ProductsModule { }
