import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {RouterModule} from "@angular/router";
import {DahsboardComponent} from "../dahsboard/dahsboard.component";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild([
      {path: "", component: OrderComponent}
    ])
  ]
})
export class OrderModule { }
