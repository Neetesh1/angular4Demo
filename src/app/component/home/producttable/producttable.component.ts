import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  @Input() private allProduct;

  constructor() { }

  ngOnInit() {
  }

}
