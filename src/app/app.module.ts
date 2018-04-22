import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewallComponent } from './viewall/viewall.component';
import { WorkoutComponent } from './workout/workout.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { TestComponent } from './test/test.component';

import { WorkoutService } from './services/workout.service'

@NgModule({
  declarations: [
    AppComponent,
    ViewallComponent,
    WorkoutComponent,
    CategoryComponent,
    TrackComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WorkoutService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
