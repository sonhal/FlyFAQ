import { Component, OnInit, Input } from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Question } from "./Question"
import { Headers } from "@angular/http";




@Component({
    selector: "show-customer-questions",
    templateUrl: "./app/showCustomerQuestions.html"
})

export class showCustomerQuestionsComponent {

    text: string;
    number: number;
    showCustomerQuestions: boolean;
    clicked: boolean = false;
    questions: Question[];
    buttonText: string = "Vis kunde spørsmål";
    allQuestions: Question[];
    loading: boolean;
    @Input() searchText: string;
    showCustomerQ: boolean

    constructor(private _http: Http) { }


    ngOnInit() {
        this.getAllQuestions();
    }


    getCustomerQuestions() {
            this.getAllQuestions();    
    }

    getAllQuestions() {
        this._http.get("api/CustomerQA")
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
    }
}