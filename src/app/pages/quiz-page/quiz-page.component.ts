import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  result: string = '';
  finished: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
