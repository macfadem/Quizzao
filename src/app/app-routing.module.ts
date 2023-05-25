import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { DoYourQuizComponent } from './pages/do-your-quiz/do-your-quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:id', component: QuizPageComponent },
  { path: 'do-your-quiz', component: DoYourQuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
