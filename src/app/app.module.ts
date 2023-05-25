import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { ResultComponent } from './components/result/result.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { DoYourQuizComponent } from './pages/do-your-quiz/do-your-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    HeaderComponent,
    QuizPageComponent,
    QuizListComponent,
    ResultComponent,
    QuizCardComponent,
    DoYourQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
