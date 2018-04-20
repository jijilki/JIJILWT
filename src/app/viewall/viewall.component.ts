import { Component, OnInit } from '@angular/core';
import { workout } from '../=workout';

//mock imports

import { WORKOUTS } from '../mock/workoutmocks';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  workouts = WORKOUTS;

  constructor() { }

  ngOnInit() {
  }

  edit(workout:workout): void { 
    alert('inside edit of '+ workout.title);
  };

  delete(workout:workout): void { 
    alert('inside delete of '+ workout.title);
    var index = this.workouts.findIndex(x=>x.title === workout.title)
    this.workouts.splice(index,1);
  };
  
  start(workout:workout): void { 
    alert('inside start of '+ workout.title);
  };

  end(workout:workout): void { 
    alert('inside end of '+ workout.title);
  };

}
