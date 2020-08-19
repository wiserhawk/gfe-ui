import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  itemId;
  itemName;
  image;
  type;
  category;
  netPrice;
  price;
  quantity = 0;
  detail;
  ingredients;
  nutritionFacts: any;
  // cartItems proterty is used to see 
  // if any change are made in items quantity in cart. 
  // If yes reflect it on meal page.
  cartItems: any = [];
  cartItemsSubscription: Subscription;
  itemImagePath: string;


  constructor(private route: ActivatedRoute) {
    //this.route.params.subscribe( params => this.itemId = params.id ); 

    this.loadItemFromUsingHttp(this.itemId);
    
  }

  ngOnInit() {
  }

  private loadItemFromUsingHttp(itemId: string) {
    let item =  {
      "itemId": "hs0000001",
      "name": "Citrus Pomegranate Sprouts Salad - 782 (Kcal)",
      "ingredients": [
        "Mixed Sprouts, Boiled Pearl Barley, Orange, Tomato, Basil, Olive, Cucumber, Pomegranate, Feta, Olive Oil"
      ],
      "category": "Continental",
      "description": "Crunchy, refreshing and satiating this salad is a playground for flavours and textures. Blanched mixed sprouts, pearl barley, tomato, basil, black olive, cucumber, pomegranate and feta are seasoned, tossed with oil and topped with segments of fresh oranges. A zesty orange juice and basil vinaigrette accompanies the fab salad. Serves 1.",
      "price": 170,
      "discountedPrice": 136,
      "type": "VEG",
      "image": "veg-food-1.jpg",
      "recipe": "Not available on this item",
      "active": true,
      "nutritionFacts":{
        "servingSize":"350",
        "servingPerContainer":"1",
        "calories":"550",
        "caloriesFromFat":"210",
        "totalFat":"23",
        "totalFatPercent":"35",
        "saturatedFat":"10",
        "saturatedFatPercent":"50",
        "transFat":"0",
        "transFatPercent":"0",
        "cholesterol":"110",
        "cholesterolPercent":"37",
        "sodium":"800",
        "sodiumPercent":"33",
        "totalCarbohydrates":"52",
        "totalCarbohydratesPercent":"17",
        "dietaryFiber":"6",
        "dietaryFiberPercent":"24",
        "sugars":"21",
        "protein":"33",
        "proteinPercent":"66",
        "vitaminAPercent":"45",
        "vitaminCPercent":"60",
        "calciumPercent":"15",
        "ironPercent":"15"
      }
    };

    
      this.itemName = item.name;
      this.type = item.type;
      this.image = item.image;
      this.category = item.category;
      this.netPrice = item.discountedPrice;
      this.price = item.price;
      this.detail = item.description;
      this.ingredients = item.ingredients;
      this.nutritionFacts = item.nutritionFacts;
  }

}
