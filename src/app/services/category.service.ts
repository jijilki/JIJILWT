import { Injectable } from '@angular/core';
import { category } from '../category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//import { CATEGORIES } from '../mock/categorymocks'

@Injectable()
export class CategoryService {

 // category = CATEGORIES;
  APP_URL = 'http://localhost:8080'
  _getCategoryUrl = this.APP_URL + '/getCategories';
  _addCategoryUrl = this.APP_URL + '/addCategory';
  _deleteCategoryurl = this.APP_URL + '/deleteCategory';
  _updateCategoryurl = this.APP_URL+'/updateCategory';
  
  constructor(private _http: Http) {

  }


  getCategoryList(): Observable<category[]> {
    return this._http.get(this._getCategoryUrl)
      .map((response: Response) => <category[]>response.json())
      .do(data => console.log("Response For GET :" + JSON.stringify(data)));

    //  return of(this.category);
  }
  saveCategory(category1: category): Observable<any> {
    return this._http.post(this._addCategoryUrl, category1)
      .map(res => {
        this.responseHandling(res);
      });

  }


  deleteCategory(category1: category): Observable<any> {
    return this._http.post(this._deleteCategoryurl, category1)
    .map(res => {
      this.responseHandling(res);
    });
      
  }

  updateCategory(category1: category): Observable<any> {
    return this._http.post(this._updateCategoryurl, category1)
    .map(res => {
      this.responseHandling(res);
    });
      
  }
  responseHandling(res){
    console.log(res);
    if (res.status === 200) {
      console.log("Successfully saved");
    }
    else {
      throw new Error('Save Failed');
    }
  }

}
