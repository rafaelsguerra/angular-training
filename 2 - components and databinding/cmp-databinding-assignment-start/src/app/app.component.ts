import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddNumbers = [];
  EvenNumbers = [];

  onIntervalStarted(event: number) {
    console.log(event);
    event % 2 === 0 ? this.EvenNumbers.push(event) : this.OddNumbers.push(event)
  }
}
