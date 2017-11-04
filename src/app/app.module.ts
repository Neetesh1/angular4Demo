import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import { ProducttableComponent } from './component/home/producttable/producttable.component';
import { MyDatePipe } from './pipes/my.date.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldDirective } from './directives/bold.directive';
import { InventoryRouterModule } from './module/inventory-router.module';
import { ContactComponent } from './component/contact/contact.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductService } from './services/product.service';
import { ListProductComponent } from './component/list-product/list-product.component';
import { MinValidator } from './validators/minimum.directive';
import { MaxValidator } from './validators/maximum.directive';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { CategoryService } from './services/category.service';
import { ProductResolver } from './resolvers/product.resolver';
import { CategoryResolver } from './resolvers/category.resolver';
import { UnsaveComponentGuard } from './guards/unsave.guard';
import { SearchComponent } from './component/search/search.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './interceptors/data.interceptors';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProducttableComponent,
    MyDatePipe,
    HighlightDirective,
    BoldDirective,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    AddProductComponent,
    ListProductComponent,
    MinValidator,
    MaxValidator,
    EditProductComponent,
    SearchComponent,
    SearchBarComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ProductService,
      CategoryService,
      ProductResolver,
      CategoryResolver,
      UnsaveComponentGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: DataInterceptor,
        multi: true
      } 
  ],
  entryComponents:[
    UserLoginComponent,
    AdminLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
