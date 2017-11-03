import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
    //private products:Product[] = [];
    private products:Observable<Array<Product>>;

  constructor(private ProductSvc:ProductService) { 
    //this.products = ProductSvc.getProducts();

  }

  ngOnInit() {
   // this.ProductSvc.getProducts()
    this.products = this.ProductSvc.getProducts();
    /*this.ProductSvc.getProducts()
     .subscribe
     (
       data=>this.products=data,
       err=>console.log(err)
     )*/
  }

}
