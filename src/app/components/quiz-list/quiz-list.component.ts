import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import quiz_questions from '../../../assets/data/quiz_questions.json';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes: any[] = quiz_questions;
  filteredQuizzes: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.filteredQuizzes = this.quizzes.filter((quiz) =>
          quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        this.filteredQuizzes = this.quizzes;
      }
    });
  }
}
