import {Injectable} from '@angular/core';
import {BasicToppings} from '../data-manager/list-manager';
import {Topping} from '../data-manager/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BasicToppingsServiceService {

  constructor() {
  }

  basicToppings: Array<Topping> = BasicToppings;
}
