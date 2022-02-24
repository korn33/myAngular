import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngular';
  inputValue: string | number = "";

  constructor() {

  }

  onClick($event: MouseEvent) {
    console.log("click")
  }

  change($event: any) {
    this.inputValue = (<HTMLInputElement> $event.target).value;
  }

  onBluer(value: string) {
    this.inputValue = value;
  }
}
