import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { UnsavedComponentbase } from '../../guards/unsave.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, UnsavedComponentbase {

  private products: Product[];

  private categories:Category[];
  private hasError:boolean=false;
  private errorMessage:string;

  private product: Product;
  constructor(
    private ProductSvc:ProductService,
     private router:Router,
     private route: ActivatedRoute,
     private CategorySvc:CategoryService) 
      { 
        this.product = new Product();
      }

  ngOnInit() {
    this.categories = this.route.snapshot.data["categories"];
    //console.log(this.categories);
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
