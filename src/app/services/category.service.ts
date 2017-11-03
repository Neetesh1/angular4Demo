import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {

  private readonly API_URL: string = 'http://bst-products-api.azurewebsites.net/api/categories';
  
  
  constructor(private http: Http) { }

  public getCategories(): Observable<Category[]> {

    return this.http.get(this.API_URL)
      .map((resp: Response) => resp.json())
      .catch(err => Observable.throw(err))
    
  }




}

