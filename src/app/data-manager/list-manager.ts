import {Pizza, Topping, ToppingSize} from './interfaces';

export const PizzaChoices: Array<Pizza> = [
  {
    size: 'Small',
    price: 1200
  },
  {
    size: 'Medium',
    price: 1400
  },
  {
    size: 'Large',
    price: 1600
  }
];

export const BasicToppingSizes: Array<ToppingSize> =
  [
    {size: 'Small', price: 50},
    {size: 'Medium', price: 75},
    {size: 'Large', price: 100}
  ]
;
export const DeluxeToppingSizes: Array<ToppingSize> =
  [
    {size: 'Small', price: 200},
    {size: 'Medium', price: 300},
    {size: 'Large', price: 400}
  ]
;

export const BasicToppings: Array<Topping> = [
  {
    name: 'Cheese',
    sizes: BasicToppingSizes
  },
  {
    name: 'Pepperoni',
    sizes: BasicToppingSizes
  },
  {
    name: 'Ham',
    sizes: BasicToppingSizes
  },
  {
    name: 'Pineapple',
    sizes: BasicToppingSizes
  }
];

export const DeluxeToppings: Array<Topping> = [
  {
    name: 'Sausage',
    sizes: DeluxeToppingSizes
  },
  {
    name: 'Feta Cheese',
    sizes: DeluxeToppingSizes
  },
  {
    name: 'Tomatoes',
    sizes: DeluxeToppingSizes
  },
  {
    name: 'Olives',
    sizes: DeluxeToppingSizes
  },
];
