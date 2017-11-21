import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SPA } from './SPA';
import { showQuestionsComponent } from "./showQuestions.component"
import { addQuestionsComponent } from "./addQuestion.component"
import { showCustomerQuestionsComponent} from "./showCustomerQuestions.componet"
import { mainSPA } from "./mainSPA"
import { FilterPipe } from "./search"
import { FormsModule} from '@angular/forms';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule, FormsModule],
    declarations: [mainSPA, showQuestionsComponent, addQuestionsComponent, FilterPipe, showCustomerQuestionsComponent],
    bootstrap: [mainSPA]
})
export class AppModule { }

