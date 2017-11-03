import { Product } from "../models/product";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  private readonly API_URL:string = 'http://bst-products-api.azurewebsites.net/api/products';
  private products: Product[] = [
    {id:101,name:"Pepsi", price: 120, mgdate: new Date(),categoryId:1},
    {id:102,name:"Cococol", price: 130, mgdate: new Date(),categoryId:2},
    {id:103,name:"Mirinda", price: 230, mgdate: new Date(),categoryId:2},
    {id:104,name:"Sprite", price: 140, mgdate: new Date(),categoryId:3}
  ];
  constructor(private http:Http) { }

  public getProducts(): Observable<Product[]> {
   return this.http.get(this.API_URL)
    .map((resp:Response)=>resp.json())
    .catch(err=>Observable.throw(err))
    //return Observable.of(this.products);
    //return this.products;
  }
  public getProduct(id:number): Product {
    var product:Product=null;
    this.products.forEach((item,index)=>{
      if(item.id==id)
      product= item;
    })
    return product;
  }
  public AddProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }
  public updateProduct(product:Product): void{
    this.products.forEach((item,index)=>{
        if(item.id == product.id)
        {
          this.products.splice(index,1,product);
        }
    })
  }


}
