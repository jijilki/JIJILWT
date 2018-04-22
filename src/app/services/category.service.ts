import { Injectable } from '@angular/core';
import { category } from '../category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CATEGORIES } from '../mock/categorymocks' 

@Injectable()
export class CategoryService {

  category=CATEGORIES;
  constructor() { }


  getCategoryList():Observable<category[]>{
    return of(this.category);
  }

}
