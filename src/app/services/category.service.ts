import { Injectable } from '@angular/core';
import {  category } from '../category';
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
  saveCategory(category1:category):Observable<category[]>{
    //Test Purpose
    category1._catid="0001";
    this.category.push(category1);
    return of(this.category);
  }
}
