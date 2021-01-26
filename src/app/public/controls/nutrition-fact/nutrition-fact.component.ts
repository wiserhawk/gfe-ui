import { Component, OnInit, Input } from '@angular/core';
import { NutritionFacts } from 'src/app/services/meal-recipes-http.service';

@Component({
  selector: 'app-nutrition-fact',
  templateUrl: './nutrition-fact.component.html',
  styleUrls: ['./nutrition-fact.component.css']
})
export class NutritionFactComponent implements OnInit {

  @Input() nutritionFacts;

  constructor() {}

  ngOnInit() {}

}
