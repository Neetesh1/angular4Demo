import { RouterModule, Route } from "@angular/router";

import { NgModule, Component, OnInit } from '@angular/core';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';
import { AboutComponent } from '../component/about/about.component';
import { ContactComponent } from "../component/contact/contact.component";
import { AddProductComponent } from "../component/add-product/add-product.component";
import { ListProductComponent } from "../component/list-product/list-product.component";
import { EditProductComponent } from "../component/edit-product/edit-product.component";
import { ProductResolver } from "../resolvers/product.resolver";
import { CategoryResolver } from "../resolvers/category.resolver";

var routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: AddProductComponent },
  { path: 'list', component: ListProductComponent },
  { 
    path: 'edit/:id', 
    component: EditProductComponent,
     resolve:{
        product: ProductResolver,
        categories: CategoryResolver
      } 
  },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class InventoryRouterModule { }
