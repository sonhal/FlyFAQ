import {Component, OnInit, Input} from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Question } from "./Question"
import { Headers } from "@angular/http";




@Component({
    selector: "show-questions",
    templateUrl: "./app/showQuestions.html"
})

export class showQuestionsComponent {

    text: string;
    number: number;
    showQuestions: boolean;
    clicked: boolean = false;
    questions: Question[];
    responsTest: string = "test";
    allQuestions: Question[];
    loading: boolean;
    @Input() searchText: string;
    @Input() hideQuestions: boolean;

    constructor(private _http: Http) { }
    

    ngOnInit() {
        this.getAllQuestiosns();
    }

    changeQuestion(id: number) {
        this.responsTest = "Changing"
    }

    deleteQuestion(id: number) {
        this.questions.pop();
        this.responsTest = "Deleting"
    }

    getAllQuestiosns() {
        this._http.get("api/QA/")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.allQuestions = [];
                if (JsonData) {
                    for (let qObject of JsonData) {
                        this.allQuestions.push(qObject);
                        this.loading = false;
                    }
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/kunde")
            );
    };
    



}