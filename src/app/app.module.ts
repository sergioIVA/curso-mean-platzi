import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


//materialize angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import 'hammerjs';
import {QuestionDetailComponent} from './question/question-detail.component';
import { MomentModule } from 'angular2-moment';
import {AnswerFormComponent} from './answer/answer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SigninScreenComponent} from './auth/signin-screen.component';
import {SignupScreenComponent} from './signup/signup-screen.component';
import {QuestionListComponent} from './question/question-list.component';
import { MatListModule} from '@angular/material';
import {QuestionFormComponent} from './question/question-form.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {QuestionScreenComponent} from './question/question-screen.component';

@NgModule({
  declarations: [
    AppComponent,
      QuestionDetailComponent,
      AnswerFormComponent,
      SigninScreenComponent,
      SignupScreenComponent,
      QuestionListComponent,
      QuestionFormComponent,
      QuestionScreenComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      MomentModule,
      FormsModule,
      ReactiveFormsModule,
      MatListModule,
      Routing,
      HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
