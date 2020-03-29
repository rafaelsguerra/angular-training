import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-alteration-alert',
  templateUrl: './alteration-alert.component.html',
  styleUrls: ['./alteration-alert.component.css']
})

export class AlterationAlertComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }

  ngOnInit() {

  }
}