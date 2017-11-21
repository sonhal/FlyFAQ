import { Component, OnInit,Input, ViewChild } from "@angular/core";
import { Question } from "./Question"
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { showQuestionsComponent } from "./showQuestions.component"
import { addQuestionsComponent } from "./addQuestion.component"
import { showCustomerQuestionsComponent } from "./showCustomerQuestions.componet"



@Component({
    selector: "main-SPA",
    templateUrl: "./app/mainSPA.html"
})

export class mainSPA
{
    showCustomerQ: boolean = false;
    showForm: boolean = false;
    buttonText: string = "Vis Kundespørsmål";
    formButtonText: string = "Nytt spørsmål";
    @ViewChild(showCustomerQuestionsComponent) showCustomerChild: showCustomerQuestionsComponent;
    @ViewChild(addQuestionsComponent) addQuestionChild: addQuestionsComponent;
    @ViewChild(showQuestionsComponent) showQuestionChild: showQuestionsComponent;
    searchText: string;

    showCustomerQuestions() {
        
        if (this.showCustomerChild.showCustomerQ) {
            this.showCustomerChild.showCustomerQ = false;
            this.showQuestionChild.hideQuestions = false;
            this.buttonText = "Vis kundespørsmål";
        }
        else {
            this.showCustomerChild.showCustomerQ = true;
            this.showQuestionChild.hideQuestions = true;
            this.buttonText = "Vis FAQ";
            this.showCustomerChild.getAllQuestions();
        }
    }

    showNewQuestionForm() {
        if (this.addQuestionChild.showForm) {
            this.formButtonText = "Nytt spørsmål";
            this.addQuestionChild.closeAddQuestion();
        }
        else {
            this.formButtonText = "Tilbake";
            this.addQuestionChild.getForm();
        }
    }

}