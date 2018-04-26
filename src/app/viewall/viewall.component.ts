import { Component, OnInit } from '@angular/core';
import { workout } from '../workout';

import { WorkoutService } from '../services/workout.service'
import { Router } from '@angular/router';
//mock imports

//import { WORKOUTS } from '../mock/workoutmocks';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  //workouts = WORKOUTS;
  workouts : workout[];

  constructor(private workoutService:WorkoutService ,private router:Router) { }

  ngOnInit() {
    //on init get all the workouts.
    this.getAllWorkouts();
    }

  getAllWorkouts():void{
    this.workoutService.getAllWorkouts().subscribe(data => this.workouts = data );
  }

  edit(workout:workout): void { 
    //alert('inside edit of '+ workout.title);
    this.router.navigate(['/editworkout/'+workout._id]);
  };

  delete(workout:workout): void { 
    alert('inside delete of '+ workout.title);
    var index = this.workouts.findIndex(x=>x.title === workout.title)
    this.workouts.splice(index,1);
  };
  
  start(workout:workout): void { 
    alert('inside start of '+ workout.title);
    this.router.navigate(['/startworkout/'+workout._id]);
  };

  end(workout:workout): void { 
    alert('inside end of '+ workout.title);
    this.router.navigate(['/endworkout/'+workout._id]);
  };

}
