import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { WorkoutComponent } from './workout/workout.component';
import { TrackComponent } from './track/track.component';
import { ViewallComponent } from './viewall/viewall.component';
const routes:Routes=[
  //Route from landing page.
  {path:'viewall' ,component:ViewallComponent},
  {path:'create' , component:WorkoutComponent,data:{page:'createworkout'}},
  {path:'track' , component:TrackComponent},
  {path:'category',component:CategoryComponent},

  //Route from other screens.
  {path:'editworkout/:id',component:WorkoutComponent,data:{page:'editworkout'}},
  {path:'updateworkout/:id',component:WorkoutComponent,data:{page:'updateworkout'}},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})], // <-- debugging purposes only
  exports:[ RouterModule]
 
})
export class AppRoutingModule { }
