import { Component, OnInit } from "@angular/core";



@Component({
    selector: "test-component",
    templateUrl: "./app/test.html"
})

export class TestComponent
{
    text: string;
    number: number;
    clicked: boolean = false;

    testClick() {
        if (!this.clicked) {
            this.text = "Hello, you clicked the button"
            this.clicked = true;
        }
        else {
            this.text = "Bye"
            this.clicked = false;
        }
        
    }



}