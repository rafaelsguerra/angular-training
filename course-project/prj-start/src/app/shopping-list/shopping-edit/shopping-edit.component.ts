import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingrdient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdditem() {
    const ingrdientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrdientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
