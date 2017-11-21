"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Question_1 = require("./Question");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var addQuestionsComponent = (function () {
    function addQuestionsComponent(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.questionForm = fb.group({
            id: [""],
            body: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])]
        });
    }
    addQuestionsComponent.prototype.getForm = function () {
        // må resette verdiene i skjema dersom skjema har blitt brukt til endringer
        this.questionForm.setValue({
            id: "",
            email: "",
            body: "",
        });
        this.questionForm.markAsPristine();
        this.showForm = true;
    };
    addQuestionsComponent.prototype.submitForm = function () {
        this.test = "Form Sendt";
        this.saveNewForm();
    };
    addQuestionsComponent.prototype.closeAddQuestion = function () {
        this.showForm = false;
    };
    addQuestionsComponent.prototype.saveNewForm = function () {
        var _this = this;
        var newQuestion = new Question_1.Question();
        newQuestion.body = this.questionForm.value.body;
        newQuestion.email = this.questionForm.value.email;
        var body = JSON.stringify(newQuestion);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.post("api/QA/", body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
            _this.getForm();
        }, function (error) { return alert(error); }, function () { return console.log("posted to api/QA/"); });
    };
    ;
    return addQuestionsComponent;
}());
addQuestionsComponent = __decorate([
    core_1.Component({
        selector: "add-question",
        templateUrl: "./app/addQuestion.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], addQuestionsComponent);
exports.addQuestionsComponent = addQuestionsComponent;
//# sourceMappingURL=addQuestion.component.js.map