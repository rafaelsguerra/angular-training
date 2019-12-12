import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("Schnitzel",
      "Tastes like chicken",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg/800px-2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]),
    new Recipe("Big Burguer",
      "Better than BK's",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1), new Ingredient('Cheese', 1), new Ingredient("Tomato", 2), new Ingredient('Lettuce', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    window.alert("New ingredients were added!")
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice()); 
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}