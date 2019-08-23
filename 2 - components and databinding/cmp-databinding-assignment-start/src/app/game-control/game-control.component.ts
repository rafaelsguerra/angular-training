import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>();

  interval;
  time = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
      this.interval = setInterval(() => {
      this.intervalStarted.emit(this.time + 1);
      this.time++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval)
  }
}
