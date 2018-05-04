import { Component, OnInit } from '@angular/core';
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
            }
        );
    }
    //a.	Current day workout time. It will calculate the sum of all the workouts done on the current day.
    getCurrentDayWorkoutTime() {
        this.activeworkouts.forEach(element => {
            if (element.start_date.toString() === this.transformDate(Date.now())) {
                alert('same date');
            }
        });


    }

    transformDate(now) {
        const myFormattedDate = this.pipe.transform(now, 'yyyy-MM-dd');
        return myFormattedDate;
    }
}
