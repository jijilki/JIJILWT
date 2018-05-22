/*import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

let httpClientSpy: {get :jasmine.Spy};
let workoutService:WorkoutService;

describe('WorkoutService', () => {
  beforeEach(() => {
    // httpClientSpy =jasmine.createSpyObj('HttpClient',['get']);
    // workoutService = new WorkoutService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [
       {provide: 'http://example.com', useValue: 'http://example.com' },
        WorkoutService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));

  describe('getWorkouts()',() =>{
    it('Should return an Observable <Workouts>',
    inject([WorkoutService,MockBackend],(workoutService,mockBackEnd) =>{
      const mockResponse ={
        data:[
          {},
          {},
          {}
        ]
      };
    
      mockBackEnd.connections.subscibe((connection)=>{
        connection.mockRespond(new Response(new ResponseOptions({
          body:JSON.stringify(mockResponse)
        })))
      });

      workoutService.getWorkouts().subscibe((workouts) => {
        expect(workouts.length).toBe(3);
      }
    
    )

    }

    ))
  });

});
*/