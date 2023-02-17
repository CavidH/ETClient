import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DahsboardComponent} from './dahsboard.component';
import {Router, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DahsboardComponent}
    ])
  ]
})
export class DahsboardModule {
}
