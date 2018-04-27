import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { activeworkout } from '../activeworkout'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActiveworkoutService } from '../services/activeworkout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutComponent } from '../workout/workout.component'
import { WorkoutService } from '../services/workout.service'
import { workout } from '../workout';
@Component({
  selector: 'app-activeworkout',
  templateUrl: './activeworkout.component.html',
  styleUrls: ['./activeworkout.component.css']
})


export class ActiveworkoutComponent implements OnInit {

  workoutId: String;
  page: String;
  workoutPageAction: String;
  activeWorkout: activeworkout;
  workoutComponent: WorkoutComponent;
  selectedworkouts: workout[];
  activeWorkoutForm = new FormGroup({
    activeTitle: new FormControl('', Validators.required),
    activeComment: new FormControl('', Validators.required),
    activeStartDate: new FormControl('', Validators.required),
    activeEndDate: new FormControl('', Validators.required),
    activeStartTime: new FormControl('', Validators.required),
    activeEndTime: new FormControl('', Validators.required)
  });
  pipe = new DatePipe('en-US');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activeworkoutService: ActiveworkoutService,
    private workoutService: WorkoutService
  ) {

  }



  ngOnInit() {
    // const now =Date.now();
    // const myFormattedDate = this.pipe.transform(now,'short');
    // alert(myFormattedDate);
    // new DatePipe().transform(new Date(),'yyyy-dd-MM');
    this.workoutId = this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.data.page;
    if (this.page === 'startworkout') {
      this.workoutPageAction = "End";
      this.activeWorkout = new activeworkout();

      ///Got to remove these...also has to identify how to show time alone....
      this.activeWorkout.start_dt = new Date();
      this.activeWorkout.end_dt = new Date();
      this.activeWorkout.start_time = new Date();
      this.activeWorkout.end_time = new Date();
      this.activeWorkout.workout = this.getWorkout();
      this.startActiveWorkout();

    }
    // else if (this.page === 'endActWorkout') {

    //   this.endActiveWorkout();

    // }

  }

    
  startActiveWorkout() {
    this.activeWorkoutForm.setValue({
      activeTitle: this.activeWorkout.workout.title,
      activeComment: this.activeWorkout.workout.note,
      activeStartDate: this.transformDate(Date.now()),
      activeEndDate: this.activeWorkout.end_dt,
      activeStartTime: this.activeWorkout.start_time,
      activeEndTime: this.activeWorkout.end_time,

    });

  }

  endActiveWorkout() { }

  startOrStopWorkitem() {

    if(this.workoutPageAction === "End"){
      console.log("Ending active work item");
      // Saving it in Database.
      this.activeWorkout = new activeworkout();
      this.workoutPageAction="Start";
    }

   }

  getWorkout() {
    this.workoutService.getAllWorkouts().subscribe(data => this.selectedworkouts = data.filter(selectedworkouts => selectedworkouts._id === this.workoutId));
    console.log(this.selectedworkouts);
    return this.selectedworkouts[0];
  }

  transformDate(now) {
    const myFormattedDate = this.pipe.transform(now,'short');
    return myFormattedDate;
  }

}
