import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Answer} from './answer.model';
import {Question} from '../question/question.model';
import {User} from '../auth/user.model';
import {QuestionService} from '../question/question.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'app-answer-form',
  templateUrl:'./answer-form.component.html',
    styles:[`
     form{
        
         margin-top: 20px;
        
     }
    `],
    providers:[QuestionService]
})

export class AnswerFormComponent{
   @Input() question:Question;


   constructor(private questionService:QuestionService
               ,private authService:AuthService,
               private router:Router)
   {

   }


    onSubmit(form:NgForm){
        const answer=new Answer(
            form.value.description,
            this.question,
        );

         console.log(answer);
         console.log("Todo en orden !");

        this.questionService
            .addAnswer(answer)
            .subscribe(
                a => this.question.answers.unshift(a),
                this.authService.handleError
            );

          console.log("Ejecucion correcta del metodo del servicio ");
        form.reset();
    }
}