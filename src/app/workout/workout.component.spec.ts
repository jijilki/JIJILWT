import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
// import 'rxjs/add/operator/switchMap';

import { workout } from '../workout';
import { category } from '..//category';
import { WorkoutService } from '../services/workout.service';
import { CategoryService } from '../services/category.service';
import { AppModule } from '../app.module'


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { WorkoutComponent } from './workout.component';



describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;
  let workServ: WorkoutService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppModule
      ],
      providers: [WorkoutService, { provide: APP_BASE_HREF, useValue: '/' }]

    })
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should not get workitem for which no workout id doesnt exist',()=>{
    spyOn(workServ,'getAllWorkouts').and.returnValue({});
    expect(component.getWorkout(22)).toBeFalsy();
    expect(workServ.getAllWorkouts()).toHaveBeenCalled();
  })

  
  it('should  get workitem for which for the given workout id',()=>{
    spyOn(workServ,'getAllWorkouts').and.returnValue({});
    expect(component.getWorkout(22)).toBeFalsy();
    expect(workServ.getAllWorkouts()).toHaveBeenCalled();
  })

});

