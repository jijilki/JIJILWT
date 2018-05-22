import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { workout } from '../workout';
import { category } from '..//category';
import { WorkoutService } from '../services/workout.service';
import { CategoryService } from '../services/category.service';


import { WorkoutComponent } from './workout.component';



describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;
  let workServ :WorkoutService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations:[WorkoutComponent],
    providers:[WorkoutService],
    imports:[ReactiveFormsModule]
  })

  fixture = TestBed.createComponent(WorkoutComponent);
  component = fixture.componentInstance;
  workServ = TestBed.get(WorkoutService);

});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get workouts',() =>{
   expect(component).toBeTruthy();

  });

});


