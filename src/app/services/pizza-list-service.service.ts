import {Injectable} from '@angular/core';
import {Pizza} from '../data-manager/interfaces';
import {PizzaChoices} from '../data-manager/list-manager';

@Injectable({
  providedIn: 'root'
})
export class PizzaListServiceService {

  constructor() {
  }

  pizzas: Array<Pizza> = PizzaChoices;
}
