import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './create/create.component';
import { TrackComponent } from './track/track.component';
import { ViewallComponent } from './viewall/viewall.component';
const routes:Routes=[
  {path:'viewall' ,component:ViewallComponent},
  {path:'create' , component:CreateComponent},
  {path:'track' , component:TrackComponent},
  {path:'category',component:CategoryComponent}
];
alert("hhhhh")

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
 
})
export class AppRoutingModule { }
