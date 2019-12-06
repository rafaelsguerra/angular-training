import { Component, OnInit, OnDestroy } from '@angular/core';
import { userService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: userService) {}

  userActivated = false;
  private activatedSub: Subscription;

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
