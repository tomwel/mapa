import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.css']
})
export class CardLessonComponent implements OnInit {

  public lessonList: Array<any> = [
    {
      id:1,
      title: "Lesson 1",
      hasComplete: 30,
      exercises: 45,
      lessonSummary: "Lesson for dummies",
      available: true 
    },
    {
      id:2,
      title: "Lesson 2",
      hasComplete: 0,
      exercises: 45,
      lessonSummary: "Lesson for beginners",
      available: false 
    },
    {
      id:3,
      title: "Lesson 3",
      hasComplete: 0,
      exercises: 45,
      lessonSummary: "Lesson for beginners 2",
      available: false  
    },{
      id:4,
      title: "Lesson 4",
      hasComplete: 0,
      exercises: 45,
      lessonSummary: "Lesson for beginners 3",
      available: false  
    },
    {
      id:5,
      title: "Lesson 5",
      hasComplete: 0,
      exercises: 45,
      lessonSummary: "Lesson for beginners 4",
      available: false  
    },
    {
      id:6,
      title: "Lesson 6",
      hasComplete: 0,
      exercises: 45,
      lessonSummary: "Lesson for beginners 5",
      available: false  
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
