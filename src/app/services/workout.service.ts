import { Injectable } from '@angular/core';
import { workout } from '../workout';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//mock imports
import { WORKOUTS } from '../mock/workoutmocks';

@Injectable()
export class WorkoutService {

  workouts = WORKOUTS;

  getAllWorkouts(): Observable<workout[]> {
    return of(this.workouts);
  }

  saveWorkout(workout:workout):Observable<workout[]>{
    //Test Purpose
    this.workouts.push(workout);
    return of(this.workouts);
  }

  constructor() { }

}
