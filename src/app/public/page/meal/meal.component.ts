import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealRecipesHttpService, MealRecipe } from 'src/app/services/meal-recipes-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  private mealId: string
  recipe: MealRecipe
  imgBasePath = environment.imgBaseURL + 'meals/'


  constructor(private route: ActivatedRoute, private readonly mealHttpServer : MealRecipesHttpService) {
    this.route.params.subscribe( params => this.mealId = params.id ); 
    this.fetchMealRecipe(this.mealId);
  }

  ngOnInit() {
  }

  private fetchMealRecipe(mealId: string) {
    this.mealHttpServer.getMealRecipeById(mealId).subscribe(recipe => {
      this.recipe = recipe
    })
  }

  public converArrayToString(values: string[]): string {
    let valString: string = '' 
    values.forEach(value => {
      valString = valString +  value + ', '
    })
    // remove last comma from string
    return valString.substr(0, valString.length-2)
  }

}
