import { Component, OnInit } from '@angular/core';


import { category } from '../category';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] 

})



export class CategoryComponent implements OnInit {
  error: any;
  categoryList : category[];
  category:category;
  newCategoryName:string;
  srchWorkoutTxt:String;

  constructor(
    private categoryService:CategoryService,
    

  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
     this.categoryService.getCategoryList().subscribe(data => this.categoryList = data );
  }

  addnewcategory(){
    console.log(+"Adding");
    if (!this.newCategoryName) { 
			this.error="Category Name is Mandatory";
			return; 
	   }	  
	  this.error=null;
      this.category=new category();	  
	  this.category.categoryName=this.newCategoryName;
	  console.log("this.category   "+this.category);
	  this.categoryService.saveCategory(this.category).subscribe(data => this.categoryList=data);        
  
  } 
  

  

}
