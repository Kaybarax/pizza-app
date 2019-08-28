export interface Pizza {
  size: string,
  price: number
}

export interface Topping {
  name: string,
  sizes: Array<ToppingSize>
}

export interface ToppingSize {
  size: string,
  price: number
}

export interface PizzaOrder {
  pizza: Pizza,
  toppings?: Set<PizzaTopping>
}

export interface PizzaTopping {
  topping: Topping,
  size: ToppingSize
}

export interface PizzaOrderCosting {
  total: number,
  subTotal: number,
  vat: number
}
