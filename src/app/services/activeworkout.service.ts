import { Injectable } from '@angular/core';
import { activeworkout } from '../activeworkout';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response, Http} from '@angular/http';

@Injectable()
export class ActiveworkoutService {

  constructor(private _http: Http) { }
    APP_URL = 'http://localhost:8080'
  _addActiveWorkItemURL = this.APP_URL + '/addActiveWorkItem';

   saveActiveWorkout(activeworkout:activeworkout):Observable<any>{
    return this._http.post(this._addActiveWorkItemURL, activeworkout)
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
