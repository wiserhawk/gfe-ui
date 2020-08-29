import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface MealRecipe{
	id: string
	mealName: string
  	createDate: string
	topic: string
  	category: string
  	description: string
	mealTypes: string[]
  	image: string
	recipe: string
  	ingredients: string[]
  	nutritionFacts: NutritionFacts
  	tags: string[] 
	active: boolean
}

export interface NutritionFacts {
  	servingSize: number
	servingPerContainer: number
	calories: number
	caloriesFromFat: number
	totalFat: number
	totalFatPercent: number
	saturatedFat: number
	saturatedFatPercent: number
	transFat: number
	transFatPercent: number
	cholesterol: number
	cholesterolPercent: number
	sodium: number
	sodiumPercent: number
	totalCarbohydrates: number
	totalCarbohydratesPercent: number
	dietaryFiber: number
	dietaryFiberPercent: number
	sugars: number
	protein: number
	proteinPercent: number
	vitaminAPercent: number
	vitaminCPercent: number
	calciumPercent: number
	ironPercent: number
}

@Injectable()
export class MealRecipesHttpService {

  private apiRootUrl = environment.baseURL;

  
  constructor(private http: HttpClient) { }

  /**
   * Get all meal recipes
   */
  public getAllMealRecipes(): Observable<MealRecipe[]> {
    let url = this.apiRootUrl + "api/blogs/meal-recipes";
    return this.http.get<MealRecipe[]>(url);
  }

  }
