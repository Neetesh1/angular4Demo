import { Category } from '../models/category';

//@Injectable()
export class CategoryService {
 
    private categories: Category[] = [
      {id:1, name: 'Electronic', description:"Mobile and Laptop"},
      {id:2, name: 'Home Application', description:"House Hold Items"},
      {id:3, name: 'Cosmetic', description:"Cosmetic items"}
    ]

  constructor() { }

  public getCategories()
  {
    return this.categories;
  }

}
