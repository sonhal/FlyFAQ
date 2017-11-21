import { Component, OnInit, Input } from "@angular/core";
import { Question } from "./Question"
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Headers } from "@angular/http";



@Component({
    selector: "add-question",
    templateUrl: "./app/addQuestion.html"
})

export class addQuestionsComponent
{
    questionForm: FormGroup;
    showForm: boolean;
    test: string;

    constructor(private _http: Http, private fb: FormBuilder) {
        this.questionForm = fb.group({
            id: [""],
            body: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])]
        });
    }

    getForm() {
        // må resette verdiene i skjema dersom skjema har blitt brukt til endringer
        this.questionForm.setValue({
            id: "",
            email: "",
            body: "",
        });
        this.questionForm.markAsPristine();
        this.showForm = true;
    }

    submitForm() {
        this.test = "Form Sendt"
        this.saveNewForm();
    }

    closeAddQuestion() {
        this.showForm = false;
    }

    saveNewForm() {
        var newQuestion = new Question();

        newQuestion.body = this.questionForm.value.body;
        newQuestion.email = this.questionForm.value.email;


        var body: string = JSON.stringify(newQuestion);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/QA/", body, { headers: headers })
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                this.getForm();
            },
            error => alert(error),
            () => console.log("posted to api/QA/")
            );
    };


}