import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import 'rxjs/add/operator/switchMap';

import {  workout } from '../workout';
import { WorkoutService } from '../services/workout.service' 


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutId: String;
  page: String;
  selectedworkouts:workout[];
  workout:workout;
  workoutPageAction:String;

  constructor(
    //This introduced for the snapshot error.
    private route: ActivatedRoute,
    private router: Router,
    private workoutService:WorkoutService,
  ) {
  }



  ngOnInit() {
    //Get details from Router
    this.workoutId = this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.data.page;
    if(this.page==='editworkout'){
      this.workoutPageAction="Update";
      this.getWorkout(this.workoutId);
    }
    else if (this.page=== 'createworkout'){
      this.workout = new workout();
      // this.selectedworkouts.push(this.workout);
    }
  }

 

  getWorkout(workoutId:String){
    //alert("Inside get Workout");
    this.workoutService.getAllWorkouts().subscribe(workouts => this.selectedworkouts = workouts.filter(selectedworkouts => selectedworkouts._id=== workoutId) );
    console.log(this.selectedworkouts);
  }

  insertupdateWorkout(workout:workout){
    this.workoutService.saveWorkout(workout).subscribe(workout =>{
      console.log("Workout inserted/updated");
      this.router.navigate(['/viewall']);
    })
  }


  //From UI
  updateworkitem(workout:workout){
    //alert(workoutId);
    // this.router.navigate(['/updateworkout/'+workout]);
    this.workout=workout;
    this.insertupdateWorkout(this.workout);
  }

}
