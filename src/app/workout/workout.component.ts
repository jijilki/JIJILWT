import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import 'rxjs/add/operator/switchMap';

import { workout } from '../workout';
import { category } from '..//category';
import { WorkoutService } from '../services/workout.service';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutId: String;
  page: String;
  selectedworkouts: workout[];
  workout: workout;
  workoutPageAction: String;
  categories: category[];
  workoutForm = new FormGroup({
    _id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    cbpm: new FormControl('', Validators.required),
    category: new FormGroup({
      _catid: new FormControl('', Validators.required),
      categoryName: new FormControl('', Validators.required)
    })

  });


  constructor(
    //This introduced for the snapshot error.
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService,
    private categoryService: CategoryService
  ) {
  }



  ngOnInit() {
    this.getCategories();
    //Get details from Router
    this.workoutId = this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.data.page;
    if (this.page === 'editworkout') {
      this.workoutPageAction = "Update";
      this.getWorkout(this.workoutId);
    }
    else if (this.page === 'createworkout') {
      this.workout = new workout();
      // this.selectedworkouts.push(this.workout);
    }
  }



  getWorkout(workoutId: String) {
    //alert("Inside get Workout");
    this.workoutService.getAllWorkouts().subscribe(data => this.selectedworkouts = data.filter(selectedworkouts => selectedworkouts._id === workoutId));
    console.log(this.selectedworkouts);
    this.workoutForm.setValue({
      _id: this.selectedworkouts[0]._id,
      title: this.selectedworkouts[0].title,
      note: this.selectedworkouts[0].note,
      cbpm: this.selectedworkouts[0].cbpm,
      category:this.selectedworkouts[0].category
    });
  }

  insertupdateWorkout(workout: workout) {
    this.workoutService.saveWorkout(workout).subscribe(data => {
      console.log("Workout inserted/updated");
      this.router.navigate(['/viewall']);
    })
  }


  // //From UI
  // updateworkitem(workout:workout){
  //   //alert(workoutId);
  //   // this.router.navigate(['/updateworkout/'+workout]);
  //   this.workout=workout;
  //   this.insertupdateWorkout(this.workout);
  // }

  onWorkoutFormSubmit() {
    console.log("Inside onWorkoutFormSubmit");
    let workout = this.workoutForm.value;
    if (workout._id === undefined || workout._id === "") {
      //GetMax id from the table and assign
     
    }

    this.insertupdateWorkout(workout);
  };

  getCategories() {
    this.categoryService.getCategoryList().subscribe(data => { console.log("getting category"); this.categories = data });
    //this.workoutService.getAllWorkouts().subscribe(data => this.workouts = data );
  };

}
