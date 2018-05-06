import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import { ActiveworkoutService } from '../services/activeworkout.service';
import { activeworkout } from '../activeworkout';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    id = 'chart1';
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    //dataSource;
    activeworkouts: activeworkout[];
    activeWorkoutLoaded: boolean;
    pipe = new DatePipe('en-US');


    totalWorkoutToday:number =0;
    totalWorkoutThisWeek:number =0;
    totalWorkoutThisMonth:number=0;
    dataSource = {
        "chart": {
            "caption": "Week Mart",
            "subCaption": "Top 5 stores in last month by revenue",
            "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "label": "Bakersfield Central",
                "value": "880000"
            },
            {
                "label": "Garden Groove harbour",
                "value": "730000"
            },
            {
                "label": "Los Angeles Topanga",
                "value": "590000"
            },
            {
                "label": "Compton-Rancho Dom",
                "value": "520000"
            },
            {
                "label": "Daly City Serramonte",
                "value": "330000"
            }
        ]
    }

    dayGraphDataSource = {
        "chart": {
            "caption": "Day Graph",
            // "subCaption": "Top 5 stores in last month by revenue",
            // "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "index":0,
                "label": "Sun",
                "value": "0"
            },
            {
                "index":1,
                "label": "Mon",
                "value": "0"
            },
            {
                "index":2,
                "label": "Tue",
                "value": "0"
            },
            {
                "index":3,
                "label": "Wed",
                "value": "0"
            },
            {
                "index":4,
                "label": "Thu",
                "value": "0"
            },
            {
                "index":5,
                "label": "Fri",
                "value": "0"
            },
            {
                "index":6,
                "label": "Sat",
                "value": "0"
            },
           
        ]
    }
    constructor(private activeworkoutService: ActiveworkoutService) {

    }

    ngOnInit() {
        this.getAllActiveWorkout();
    }

    getAllActiveWorkout() {
        this.activeworkoutService.getAllActiveWorkouts().subscribe(
            data => {
                this.activeworkouts = data;
            },
            error => {

            },
            () => {
                this.getCurrentDayWorkoutTime();
                this.getWeeklyWorkoutTime();
                this.getMonthlyWorkoutTime();
            }
        );
    }
    
    getCurrentDayWorkoutTime() {
        this.activeworkouts.forEach(element => {
            if (element.start_date.toString() === this.transformDate(Date.now())) {                
                var workoutinMin =this.getMinsOfSingleWorkout(element);
                this.totalWorkoutToday = this.totalWorkoutToday+workoutinMin;
            }
           
        });


    }
    getWeeklyWorkoutTime(){
       //alert(this.getMonday(Date.now()));
        this.activeworkouts.forEach(element => {
            if (element.start_date.toString() >= this.transformDate(this.getMonday(Date.now()))) {                
                var workoutinMin =this.getMinsOfSingleWorkout(element);
                this.totalWorkoutThisWeek = this.totalWorkoutThisWeek+workoutinMin;
                var dt =new Date(element.start_date);
                var day = dt.getDay()+ (day == 0 ? -6 : 1);
                this.dayGraphDataSource.data.forEach(graphElement => {
                    if(graphElement.index===day){
                        graphElement.value = graphElement.value+ workoutinMin*element.workout.cbpm
                    }
                });
            }
          
        });

    }

    getMonthlyWorkoutTime(){
        //alert(this.getMonday(Date.now()));
         this.activeworkouts.forEach(element => {
             if (element.start_date.toString() >= this.transformDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))) {                
                 var workoutinMin =this.getMinsOfSingleWorkout(element);
                 this.totalWorkoutThisMonth = this.totalWorkoutThisMonth+workoutinMin;
             }
             
         });
 
     }

   

    transformDate(now) {
        const myFormattedDate = this.pipe.transform(now, 'yyyy-MM-dd');
        return myFormattedDate;
    }


    getMinsOfSingleWorkout(element){
        //Get the minutes of each workout....
        var actStartTime= Date.parse(element.start_date+'T'+element.start_time);
        var actEndTime= Date.parse(element.end_date+'T'+element.end_time);
        var minsWorkout =Math.ceil((Math.abs(actEndTime - actStartTime))/(1000*60));
        return minsWorkout;
        
    }
    
    getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1);
        return new Date(d.setDate(diff));
      }

}
