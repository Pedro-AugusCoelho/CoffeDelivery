import { Cart, buyCoffee } from './reducer'

export enum TypesAction {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_TO_CART = 'REMOVE_COFFEE_TO_CART',
  AMOUNT_MORE_COFFEE_TO_CART = 'AMOUNT_MORE_COFFEE_TO_CART',
  AMOUNT_LESS_COFFEE_TO_CART = 'AMOUNT_LESS_COFFEE_TO_CART',
  SELL_COFFEES = 'SELL_COFFEES',
}

export function addCoffeeToCartAction(newCoffee: Cart) {
  return {
    type: TypesAction.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeToCartAction(newCoffee: Cart) {
  return {
    type: TypesAction.REMOVE_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function amountMoreCoffeeToCartAction(newCoffee: Cart) {
  return {
    type: TypesAction.AMOUNT_MORE_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function amountLessCoffeeToCartAction(newCoffee: Cart) {
  return {
    type: TypesAction.AMOUNT_LESS_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function orderDeliveryAction(buyCoffee: buyCoffee) {
  return {
    type: TypesAction.SELL_COFFEES,
    payload: {
      buyCoffee,
    },
  }
}
