import { Component, OnInit } from '@angular/core';
import { MealRecipesHttpService, MealRecipe } from '../../../services/meal-recipes-http.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes: MealRecipe[];

  constructor(private mealRecipesHttpServies: MealRecipesHttpService) { }

  ngOnInit() {
    this.mealRecipesHttpServies.getAllMealRecipes().pipe(map(recipes =>{
      this.recipes = recipes
    })).subscribe()
  }

  loadMore() {
    const moreItems: MealRecipe[] = []
    moreItems.forEach(item => {
      this.recipes.push(item);
    })
    
  }

}
