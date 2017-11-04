import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private result:Product[]=[];
  constructor() { }

  ngOnInit() {
  }

  public onSearch(result:Product[]){
    this.result=result;
  }

}
