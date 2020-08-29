import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { AgGridModule } from 'ag-grid-angular/main';


import { AppComponent } from './app.component';
import { MainHeaderComponent } from './public/header/main-header/main-header.component';
import { MainFooterComponent } from './public/footer/main-footer/main-footer.component';
import { SideMenuComponent } from './public/menu/side-menu/side-menu.component';
import { HomeComponent } from './public/page/home/home.component';
import { ItemTileComponent } from './public/controls/item-tile/item-tile.component';
import { MealComponent } from './public/page/meal/meal.component';
import { NutritionFactComponent } from './public/controls/nutrition-fact/nutrition-fact.component';
import { MealRecipesHttpService } from './services/meal-recipes-http.service';
import { ErrorComponent } from './public/page/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'meal/:id', component: MealComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SideMenuComponent,
    HomeComponent,
    ItemTileComponent,
    MealComponent,
    NutritionFactComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    //AgGridModule.withComponents(null),
  ],
  providers: [
    MealRecipesHttpService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
