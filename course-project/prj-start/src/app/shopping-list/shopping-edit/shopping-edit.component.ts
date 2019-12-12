import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editeditemIndex: number;
  editedItem: Ingredient;

  onSubmit(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editeditemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editeditemIndex);
    this.onClear();
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editeditemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
