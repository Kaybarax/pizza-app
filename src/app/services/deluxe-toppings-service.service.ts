import {Injectable} from '@angular/core';
import {Topping} from '../data-manager/interfaces';
import {DeluxeToppings} from '../data-manager/list-manager';

@Injectable({
  providedIn: 'root'
})
export class DeluxeToppingsServiceService {

  constructor() {
  }

  deluxeToppings: Array<Topping> = DeluxeToppings;
}
