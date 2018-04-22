import { Component, OnInit } from '@angular/core';


import { category } from '../category';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] 

})



export class CategoryComponent implements OnInit {
  
  categoryList : category[];

  constructor(
    private categoryService:CategoryService,
    private category:category

  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategoryList().subscribe(category =>{this.categoryList = category});
  }


  

}
