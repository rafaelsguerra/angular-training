import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingrdient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // } this approach generates unnecessary event emissions
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    } 
}