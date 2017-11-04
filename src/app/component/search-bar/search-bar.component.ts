import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent  {

  private result:Product[];

  @Output()public search:EventEmitter<Product[]>=new EventEmitter<Product[]>();
  
  constructor(private prodcutSvc:ProductService) { }

  public searchData(searchText)
  {
    let temp:Product[]=[];
    if(searchText===""){
      this.search.emit(temp);
      return;
    }
    this.prodcutSvc.getProducts()
    .subscribe(
      data=>{
        data.forEach((item)=>{
          if(item.name.toLowerCase().startsWith(searchText.toLowerCase()))
          {
            temp.push(item);
          }
        });
        this.search.emit(temp);
      },
      err=>console.log(err)

    )
   
  }

}
