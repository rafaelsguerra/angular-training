import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is a test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Another recipe", "Another test", "https://cdn.pixabay.com/photo/2015/08/18/22/56/fruit-895005_960_720.png")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
