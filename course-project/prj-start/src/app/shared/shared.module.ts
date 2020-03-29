import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlterationAlertComponent } from './alteration-alert/alteration-alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    AlterationAlertComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    AlterationAlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule { }