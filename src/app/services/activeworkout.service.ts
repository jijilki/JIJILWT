import { Injectable } from '@angular/core';
import { workout } from '../workout';
import { activeworkout } from '../activeworkout';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response, Http} from '@angular/http';


@Injectable()
export class ActiveworkoutService {

  APP_URL = 'http://localhost:8081'
  _addActiveWorkItemURL = this.APP_URL + '/addActiveWorkItem';
  _getAllActiveWorkItemsURL = this.APP_URL+'/getActiveWorkouts';
  
  constructor(private _http: Http) { }

  
  getAllActiveWorkouts(): Observable<activeworkout[]> {
   // return of(this.workouts);
  return this._http.get(this._getAllActiveWorkItemsURL)
  .map((response: Response) => <activeworkout[]>response.json())
  .do(data => console.log("Response For GET :" + JSON.stringify(data)));
  }

  saveActiveWorkout(activeworkout:activeworkout):Observable<any>{
    return this._http.post(this._addActiveWorkItemURL,activeworkout)
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


