import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private name:string;
  private location:string;
  private today:Date;
  private colors:string[]=['red','green','blue'];
  private products:any[]=[
    {id:101,name:'Abc',price:19939340,mgdate: undefined},
    {id:212,name:'xyz',price:12,mgdate: new Date(2016,12,12)},
    {id:311,name:'mno',price:15,mgdate: new Date(2015,8,7)},
    {id:12124,name:'pqr',price:20,mgdate: new Date(2017,5,6)},
    {id:5,name:'mnb',price:30,mgdate: new Date(2014,2,3)},
    {id:5,name:'Thumb ups',price:30,mgdate: new Date(2014,2,3)},
  ];
  private currentYear:number=new Date().getFullYear();

  private count:number=3;

  private mycssClass:string='highlight';
  private colorName:string='red';
  private size:number=20;

  //@Input()  private userType:string;

  

  constructor() {
    this.name="Neetesh Vishwakarma";
    this.location="LRN Goreaon";
    this.today=new Date;


   }
   public chnageClass()
   {
    // console.log("ere");
    this.mycssClass = (this.mycssClass == 'highlight') ? 'strike' : 'highlight';
   }

  ngOnInit() {
  }

}
