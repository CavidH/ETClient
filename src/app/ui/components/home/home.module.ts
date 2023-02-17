import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {DahsboardComponent} from "../../../admin/components/dahsboard/dahsboard.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DahsboardComponent}
    ])

  ]
})
export class HomeModule {
}
