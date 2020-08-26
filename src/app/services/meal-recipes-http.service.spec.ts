import { TestBed, inject } from '@angular/core/testing';

import { MealRecipesHttpService } from './meal-recipes-http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealRecipesHttpService]
    });
  });

  it('should be created', inject([MealRecipesHttpService], (service: MealRecipesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
