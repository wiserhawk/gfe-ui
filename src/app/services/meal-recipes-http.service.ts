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

  /**
   * Get all active food items.
   */
  public getAllActiveFoodItems(): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/foods/items/getAllActiveItems";
    return this.http.get(url);
  }

  /**
   * Get food item by itemId
   */
  public getFoodItemById(id: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/foods/items/getItemById/" + id;
    return this.http.get(url);
  }

  /** ######## USER SERVICE CALLS #########   */
  /**
   * Create new user account using user details.
   * @param userDetail 
   */
  public createUserAccount(userDetail: any): Observable<Response> {
    let status: boolean = false;
    let url = this.apiRootUrl + "/gfe-main/user-manager/userAccount/create";
    return this.http.post(url, userDetail);
  }

  public authenticateUser(loginId: string, pwd: string): Observable<Response> {
    let loginDetail = {identifier: loginId,  password: pwd};
    let url = this.apiRootUrl + "/gfe-main/user-manager/authenticate";
    return this.http.post(url, loginDetail);
  }

  public createAddressForUser(addressDetail: string): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/user-manager/userAddress/create";
    return this.http.post(url, addressDetail);
  }

  public getAddressesByUserId(userId: string): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/user-manager/addressDetailsByUserId/get";
    return this.http.post(url, userId);
  }

  /** ######## BILLING SERVICE CALLS #########   */
  /**
   * Calculate bill using bill details.
   * @param billDetail 
   */
  public calculateBill(billDetail: any): Observable<Response> {
    let status: boolean = false;
    let url = this.apiRootUrl + "/gfe-main/billing/calculateBill";
    //let url = "http://localhost:9002/billing/calculateBill";
    return this.http.post(url, billDetail);
  }

  /**
   * Check whether coupon is valid or not
   * @param coupon
   */
  public isValidCoupon(coupon: string): Observable<Response>  {
    let url = this.apiRootUrl + "/gfe-main/billing/isValidCoupon/" + coupon;
    return this.http.get(url);
  }
  
  
  /** ######## ORDER SERVICE CALLS #########   */
  
  public placeOrder(order: any): Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/order/createOrder/save";
    return this.http.post(url, order);
  }

  public getOrderDetail(orderId: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/order/orderByOrderId/" + orderId;
    return this.http.get(url);
  }

  /** ######## AVAILABILITY SERVICE CALLS #########   */
  
  public checkAvailabilityByPincode(pincode: string) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/availability/checkByPincode/" + pincode;
    return this.http.get(url);
  }

  public savePaymentDetails(paymentPayload: any) : Observable<Response> {
    let url = this.apiRootUrl + "/gfe-main/payment/payumoney/payment-details";
    return this.http.post(url, paymentPayload);
  }

  public submitToPayUmoney(data: any) : Observable<Response> {
    let url = "https://test.payu.in/_payment";
    return this.http.post(url, data);
  }
}
