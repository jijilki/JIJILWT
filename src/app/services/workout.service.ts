import { Injectable } from '@angular/core';
import { workout } from '../workout';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response, Http} from '@angular/http';
 
//mock imports
// import { WORKOUTS } from '../mock/workoutmocks';

@Injectable()
export class WorkoutService {

  // workouts = WORKOUTS;
  APP_URL = 'http://localhost:8081/WorkoutTracker';
  _getWorkItemsURL = this.APP_URL + '/getWorkItems';
  _addWorkItemsURL = this.APP_URL + '/addWorkItem';
  _deleteWorkItemsURL = this.APP_URL + '/deleteWorkItem';
  
  constructor(private _http: Http) { }

  getAllWorkouts(): Observable<workout[]> {
   // return of(this.workouts);
  return this._http.get(this._getWorkItemsURL)
  .map((response: Response) => <workout[]>response.json())
  .do(data => console.log("Response For GET :" + JSON.stringify(data)));
  }

  saveWorkout(workout:workout):Observable<any>{
    return this._http.post(this._addWorkItemsURL, workout)
    .map(res => {
      this.responseHandling(res);
    });
  }

  deleteWorkout(workout_id:number):Observable<any>{
    return this._http.post(this._deleteWorkItemsURL, {workout_id})
    .map(res => {
      this.responseHandling(res);
    });
  }

  responseHandling(res){
    console.log(res);
    if (res.status === 200) {
      console.log("Successfully saved");
    }
    else {
      throw new Error('Save Failed');
    }
  }

}

