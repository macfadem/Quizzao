import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import quiz_questions from '../../../assets/data/quiz_questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  title:string = '';
  questions:any;
  questionSelected:any;

  answers:string[] = [];
  answerSelected:string = '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;
  finished:boolean = false;

  quizquestions:any;

  @Output() quizFinished = new EventEmitter<string>();
  @Output() quizStatus = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.quizquestions = quiz_questions[id];

      if(this.quizquestions){
        this.finished = false;
        this.title = this.quizquestions.title;
        this.questions = this.quizquestions.questions;
        this.questionIndex = 0;
        this.questionMaxIndex = this.questions.length;
        this.questionSelected = this.questions[this.questionIndex];

        
      }
    });
  }

  selectOption(value:string){
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep(){
    this.questionIndex++;
    if(this.questionIndex < this.questionMaxIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      const finalAnswer:string = await this.checkResult(this.answers);
      this.answerSelected = this.quizquestions.results[finalAnswer as keyof typeof this.quizquestions.results];
      this.quizFinished.emit(this.answerSelected);
      this.quizStatus.emit(true);
    }
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((previous, current, i, arr) => {
      if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length){
        return previous;
      }else{
        return current;
      }
    });
    return result;
  }
}
