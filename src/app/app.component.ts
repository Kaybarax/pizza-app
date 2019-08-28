import {Component, OnInit} from '@angular/core';
import {Pizza, PizzaOrder, PizzaOrderCosting, PizzaTopping, Topping, ToppingSize} from './data-manager/interfaces';
import {PizzaListServiceService} from './services/pizza-list-service.service';
import {BasicToppingsServiceService} from './services/basic-toppings-service.service';
import {DeluxeToppingsServiceService} from './services/deluxe-toppings-service.service';

declare var $: any;

// noinspection TsLint
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private pizzasService: PizzaListServiceService,
    private basicToppingsService: BasicToppingsServiceService,
    private deluxeToppingsService: DeluxeToppingsServiceService
  ) {
    //
  }

  title = 'Pizza Order App';
  pizzaOrders: Set<PizzaOrder> = new Set<PizzaOrder>();

  pizzas: Array<Pizza>;
  basicToppings: Array<Topping>;
  deluxeToppings: Array<Topping>;
  choices: string[] = ['BASIC', 'DELUXE'];
  VAT = 0.16;
  pizzaOrderCosting: PizzaOrderCosting = {total: 0, subTotal: 0, vat: 0};

  ngOnInit() {
    this.pizzas = this.pizzasService.pizzas;
    this.basicToppings = this.basicToppingsService.basicToppings;
    this.deluxeToppings = this.deluxeToppingsService.deluxeToppings;
  }

  clearAllOrders() {
    this.pizzaOrders = new Set<PizzaOrder>();
  }

  createPizzaOrder(pizza: Pizza, toppings: Set<PizzaTopping> | Set<any>) {
    const pizzaOrder: PizzaOrder = {pizza, toppings};
    this.pizzaOrders.add(pizzaOrder);
    this._totalPizzaOrderCost();
  }

  deletePizzaOrder(pizzaOrder: PizzaOrder) {
    this.pizzaOrders.delete(pizzaOrder);
    this._totalPizzaOrderCost();
  }

  _addToppingToOrder(pizzaOrder: PizzaOrder, toppingSelection: string, choice) {
    console.log(' pizzaOrder ->', pizzaOrder);
    console.log(' toppingSelection ->', JSON.stringify(toppingSelection));
    const toppingSelectionStringArray = toppingSelection.split(',');
    console.log('toppingSelectionStringArray', toppingSelectionStringArray);
    const toppingsChoice = choice === this.choices[0] ? this.basicToppings : (choice === this.choices[1] ? this.deluxeToppings : []);
    if (toppingsChoice.length === 0) {
      return;
    }
    const topping: Topping = toppingsChoice.find(item => item.name === toppingSelectionStringArray[0]);
    const toppingSize: ToppingSize = topping.sizes.find(item => item.size === toppingSelectionStringArray[1]);
    const pizzaTopping: PizzaTopping = {topping, size: toppingSize};
    if (!pizzaOrder.toppings) {
      pizzaOrder.toppings = new Set([pizzaTopping]);
    } else {
      pizzaOrder.toppings.add(pizzaTopping);
    }
    this._totalPizzaOrderCost();
  }

  submitOrders() {
  }

  _removeToppingFromPizzaOrder(pizzaTopping: PizzaTopping, pizzaOrder: PizzaOrder) {
    pizzaOrder.toppings.delete(pizzaTopping);
    this._totalPizzaOrderCost();
  }

  _pizzaOrderToppingsCost(order: PizzaOrder): number {
    let cost = 0;
    if (!order.toppings) {
      return cost;
    }
    for (const topping of order.toppings) {
      cost += topping.size.price;
    }
    return cost;
  }

  _totalPizzaOrderCost() {
    const costing: PizzaOrderCosting = {total: 0, subTotal: 0, vat: 0};
    if (!this.pizzaOrders) {
      this.pizzaOrderCosting = costing;
      return;
    }
    for (const order of this.pizzaOrders) {
      costing.total += order.pizza.price + this._pizzaOrderToppingsCost(order);
    }
    // apply 16% VAT
    costing.vat = (this.VAT * costing.total);
    costing.subTotal = costing.total + costing.vat;
    this.pizzaOrderCosting = costing;
  }

}
