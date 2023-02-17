import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./admin/layout/layout.component";
import {DahsboardComponent} from "./admin/components/dahsboard/dahsboard.component";
import {HomeComponent} from "./ui/components/home/home.component";

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      {path: "", component: DahsboardComponent},
      {
        path: "customers", loadChildren: () => import("././admin/components/customer/customer.module")
          .then(m => m.CustomerModule)
      },
      {
        path: "products", loadChildren: () => import("././admin/components/products/products.module")
          .then(m => m.ProductsModule)
      },
      {
        path: "dahsboard", loadChildren: () => import("././admin/components/dahsboard/dahsboard.module")
          .then(m => m.DahsboardModule)
      },
      {
        path: "orders", loadChildren: () => import("././admin/components/order/order.module")
          .then(m => m.OrderModule)
      }
    ]
  },
  {path: "", component: HomeComponent},
  {path: "basket", loadChildren: () => import("./ui/components/baskets/baskets.module").then(p => p.BasketsModule)},
  {path: "products", loadChildren: () => import("./ui/components/products/products.module").then(p => p.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
