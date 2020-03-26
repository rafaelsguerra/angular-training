import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingrdient.model';
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChanged = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
    this.loggingService.printLog('Hello from ShoppingListmpoComponent ngOnInit')
  }

  ngOnDestroy() {
    this.igChanged.unsubscribe();
  }

}
