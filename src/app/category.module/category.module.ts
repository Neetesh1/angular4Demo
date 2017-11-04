import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryRouterModule } from './category.routes';

@NgModule({
  imports: [
    CommonModule,
    CategoryRouterModule
  ],
  declarations: [ListCategoryComponent, AddCategoryComponent]
})
export class CategoryModule { }
