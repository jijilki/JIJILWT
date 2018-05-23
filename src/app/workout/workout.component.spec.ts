import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutService } from '../services/workout.service'
import { WorkoutComponent } from '../workout/workout.component';
import { AppModule } from '../app.module';
import { workout } from '../workout';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { Observable} from 'rxjs/Observable';

class mockWorkitem extends workout{
  
}

 class mockWorkItemService extends WorkoutService{
  getAllWorkouts(){
    return new Observable<mockWorkitem[]>();
   }
 }

describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;
  let workoutService:mockWorkItemService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports:[ BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppModule
    ],
      providers:[WorkoutService,{provide: APP_BASE_HREF, useValue: '/'}]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.get(WorkoutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get work item',() =>{
    spyOn(workoutService,'getAllWorkouts').and.returnValue(mockWorkitem );
    expect(component.getWorkout(1)).toBeTruthy();
    expect(workoutService.getAllWorkouts).toHaveBeenCalled();
  });

});

