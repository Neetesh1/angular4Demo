
import { Routes, RouterModule } from "@angular/router";

import { ListCategoryComponent } from "./components/list-category/list-category.component";
import { AddCategoryComponent } from "./components/add-category/add-category.component";
import { NgModule } from "@angular/core";


const routes:Routes=[
    {
        path:'',
        component:ListCategoryComponent,
        pathMatch: "full"
    },
    {
        path:"add",
        component:AddCategoryComponent
    }
    
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
      RouterModule
    ],
    declarations: []
    
  })
  export class CategoryRouterModule { }