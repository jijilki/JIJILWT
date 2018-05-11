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
  categoryList: category[];
  category: category;
  newCategoryName: string;
  srchWorkoutTxt: String;
  editAction: String;
  editedCat: number;

  constructor(
    private categoryService: CategoryService,


  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategoryList().subscribe(data => this.categoryList = data);
  }

  addnewcategory() {
    console.log(+"Adding");
    if (!this.newCategoryName) {
      this.error = "Category Name is Mandatory";
      return;
    }
    this.error = null;
    this.category = new category();
    this.category.categoryName = this.newCategoryName;
    console.log("this.category   " + this.category);
    this.categoryService.saveCategory(this.category).subscribe(data => {
     
    },
    error => {

    },
    () =>{
      this.getCategory();
      this.newCategoryName="";
    }
  );

  }

  delete(category: category) {
    console.log("Inside delete category");
    this.category = category;
    this.categoryService.deleteCategory(this.category).subscribe(data => {
      this.getCategory();
    });

  }

  edit(category: category) {
    console.log("Inside delete category");
    if (this.editedCat == category._catId) {
      this.category = category;


      this.categoryService.updateCategory(this.category).subscribe(
        data => {
            // this.activeworkouts = data;
        },
        error => {

        },
        () => {
          this.getCategory();
          this.editAction="Edit";
          this.editedCat=0;
            //this.getWeeklySplitWorkoutTime();
        }
    );
      // this.categoryService.updateCategory(this.category).subscribe(
      //   data => {

      //   },
      //   () => {
      //     this.getCategory();
      //     console.log("Testttt");
      //     this.editAction = "Edit"
      //   });
    }
    else{
      this.editedCat = category._catId;
      this.editAction = "Update";
    }

  }
}
