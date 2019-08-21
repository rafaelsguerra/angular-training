import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretContent = false;
  clicks = []

  onClickButton() {
    this.showSecretContent = !this.showSecretContent;
    this.clicks.push(this.clicks.length + 1);

  }
}
