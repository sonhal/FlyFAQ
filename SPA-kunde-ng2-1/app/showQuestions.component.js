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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var showQuestionsComponent = (function () {
    function showQuestionsComponent(_http) {
        this._http = _http;
        this.clicked = false;
        this.responsTest = "test";
    }
    showQuestionsComponent.prototype.ngOnInit = function () {
        this.getAllQuestiosns();
    };
    showQuestionsComponent.prototype.changeQuestion = function (id) {
        this.responsTest = "Changing";
    };
    showQuestionsComponent.prototype.deleteQuestion = function (id) {
        this.questions.pop();
        this.responsTest = "Deleting";
    };
    showQuestionsComponent.prototype.getAllQuestiosns = function () {
        var _this = this;
        this._http.get("api/QA/")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.allQuestions = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var qObject = JsonData_1[_i];
                    _this.allQuestions.push(qObject);
                    _this.loading = false;
                }
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/kunde"); });
    };
    ;
    return showQuestionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], showQuestionsComponent.prototype, "searchText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], showQuestionsComponent.prototype, "hideQuestions", void 0);
showQuestionsComponent = __decorate([
    core_1.Component({
        selector: "show-questions",
        templateUrl: "./app/showQuestions.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], showQuestionsComponent);
exports.showQuestionsComponent = showQuestionsComponent;
//# sourceMappingURL=showQuestions.component.js.map