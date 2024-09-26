import {Ingredient} from '../ingredients/ingredient.entity';
import {Category} from '../categories/category.entity';
export class Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: Ingredient[];
    instructions: string;
    category: Category;
}