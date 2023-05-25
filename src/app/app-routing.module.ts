import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz/:id', component: QuizPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
