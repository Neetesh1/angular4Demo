import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers:[DatePipe]
})
export class EditProductComponent implements OnInit {
  private id: number;
  private product: Product;
  private forms: FormGroup;
  private categories: Category[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorySvc: CategoryService,
    private productSvc: ProductService,
    private fb: FormBuilder,
    private datepipe: DatePipe
  ) { }


  ngOnInit() {
   // this.id = this.route.snapshot.params.id;
   
    this.categories = this.route.snapshot.data["categories"];

    this.product = this.route.snapshot.data["product"];
    //console.log(this.product);

    var dt = this.datepipe.transform(this.product.mgdate,"yyyy-MM-dd");
    var nameControl = new FormControl(this.product.name, Validators.compose(
      [Validators.required, Validators.minLength(3)]));

    var priceControl = new FormControl(this.product.price, Validators.compose(
      [Validators.required, Validators.min(1), Validators.max(1000)]));

    this.forms=this.fb.group({
      'name':nameControl,
      'price':priceControl,
      'mfgdate':[dt,Validators.required],
      'cateroyId':[this.product.categoryId,Validators.required],
      'id':[this.product.id]
    });


    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.queryParams.price);
    // console.log(this.route.snapshot.queryParams.name);
    // console.log(`this is id ${id}`);

    // //scribe method
    // var myId;
    // this.route.params.subscribe(p=>myId=p.id);
    // console.log(myId);
    // var name;
    // var price;
    // this.route.params.subscribe(qp=>{
    //   name=qp.name,
    //   price=qp.price
    // });
    // console.log(name,price);
  }

  public update()
  {
    if(this.forms.valid)
    {
      this.productSvc.updateProduct(this.forms.value);
     // this.route.navigate[''];
    }
    else{
      alert('erro');
    }
  }

}
