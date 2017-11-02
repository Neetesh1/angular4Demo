import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
    private products:Product[] = [];
  constructor(private ProductSvc:ProductService) { 
    this.products = ProductSvc.getProducts();

  }

  ngOnInit() {
  }

}
