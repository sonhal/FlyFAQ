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
require("rxjs/add/operator/map");
var showQuestions_component_1 = require("./showQuestions.component");
var addQuestion_component_1 = require("./addQuestion.component");
var showCustomerQuestions_componet_1 = require("./showCustomerQuestions.componet");
var mainSPA = (function () {
    function mainSPA() {
        this.showCustomerQ = false;
        this.showForm = false;
        this.buttonText = "Vis Kundespørsmål";
        this.formButtonText = "Nytt spørsmål";
    }
    mainSPA.prototype.showCustomerQuestions = function () {
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
    };
    mainSPA.prototype.showNewQuestionForm = function () {
        if (this.addQuestionChild.showForm) {
            this.formButtonText = "Nytt spørsmål";
            this.addQuestionChild.closeAddQuestion();
        }
        else {
            this.formButtonText = "Tilbake";
            this.addQuestionChild.getForm();
        }
    };
    return mainSPA;
}());
__decorate([
    core_1.ViewChild(showCustomerQuestions_componet_1.showCustomerQuestionsComponent),
    __metadata("design:type", showCustomerQuestions_componet_1.showCustomerQuestionsComponent)
], mainSPA.prototype, "showCustomerChild", void 0);
__decorate([
    core_1.ViewChild(addQuestion_component_1.addQuestionsComponent),
    __metadata("design:type", addQuestion_component_1.addQuestionsComponent)
], mainSPA.prototype, "addQuestionChild", void 0);
__decorate([
    core_1.ViewChild(showQuestions_component_1.showQuestionsComponent),
    __metadata("design:type", showQuestions_component_1.showQuestionsComponent)
], mainSPA.prototype, "showQuestionChild", void 0);
mainSPA = __decorate([
    core_1.Component({
        selector: "main-SPA",
        templateUrl: "./app/mainSPA.html"
    })
], mainSPA);
exports.mainSPA = mainSPA;
//# sourceMappingURL=mainSPA.js.map