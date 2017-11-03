import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private products: Product[];

  private categories:Category[];
  private hasError:boolean=false;
  private errorMessage:string;

  private product: Product;
  constructor(private ProductSvc:ProductService, private router:Router,private CategorySvc:CategoryService) { 
    this.product = new Product();
    
  }

  ngOnInit() {
    this.categories = this.CategorySvc.getCategories();
  }
  public save(frm){
    if(frm.valid)
    {
      this.ProductSvc.AddProduct(this.product)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(["/list"]);
        },
        err=>{
          this.hasError = err;
        }
      )
      

    }
    
    else
    alert('Invalid');
  }

}
