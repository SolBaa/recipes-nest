import { Recipe } from "src/recipes/recipe.entity";
export class Ingredient {
    id: number;
    name: string;
    quantity: number;
    unit: string;
    recipe: Recipe
   
}