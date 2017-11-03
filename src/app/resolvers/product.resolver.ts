import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/product";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolver implements  Resolve<Product>
{
    constructor(private productSvc:ProductService){
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
       let id=route.params.id;
       return this.productSvc.getProduct(id);
       // throw new Error("Method not implemented.");
    }

}