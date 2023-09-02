import { produce } from 'immer'
import { TypesAction } from './actions'

export interface Coffee {
  id: number
  name: string
  description: string
  value: number
  category: string[]
}

export interface Cart extends Coffee {
  amount: number
}

export interface Address {
  cep: number
  street: string
  number: number
  complement: string
  district: string
  city: string
  uf: string
}

export interface buyCoffee {
  id: string
  orderAddress: Address
  coffees: Cart[]
  finalOrderValue: number
  typePayment: string
}

export interface CartCoffee {
  coffees: Cart[]
  totalValueCoffee: number
  buyCoffee: buyCoffee[]
}

export function CoffeeReducer(state: CartCoffee, action: any) {
  switch (action.type) {
    case TypesAction.ADD_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const findCoffeeCart = state.coffees.find(
          (item) => item.id === action.payload.newCoffee.id,
        )
        if (findCoffeeCart) {
          const updatedCoffeeArray = state.coffees.map((item) => {
            if (item.id === findCoffeeCart.id) {
              return { ...item, amount: action.payload.newCoffee.amount }
            }
            return item
          })
          draft.coffees = updatedCoffeeArray
        } else {
          draft.coffees.push(action.payload.newCoffee)
        }

        draft.totalValueCoffee = draft.coffees.reduce((total, coffee) => {
          return total + coffee.value * coffee.amount
        }, 0)
      })

    case TypesAction.REMOVE_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const filterCoffeeCart = state.coffees.filter(
          (item) => item.id !== action.payload.newCoffee.id,
        )
        draft.coffees = filterCoffeeCart

        draft.totalValueCoffee = draft.coffees.reduce((total, coffee) => {
          return total + coffee.value * coffee.amount
        }, 0)
      })

    case TypesAction.AMOUNT_MORE_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const findCoffeeCart = state.coffees.find(
          (item) => item.id === action.payload.newCoffee.id,
        )

        if (findCoffeeCart) {
          const updatedCoffeeArray = state.coffees.map((item) => {
            if (item.id === findCoffeeCart.id) {
              return { ...item, amount: action.payload.newCoffee.amount + 1 }
            }
            return item
          })
          draft.coffees = updatedCoffeeArray
        }

        draft.totalValueCoffee = draft.coffees.reduce((total, coffee) => {
          return total + coffee.value * coffee.amount
        }, 0)
      })
    case TypesAction.AMOUNT_LESS_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const findCoffeeCart = state.coffees.find(
          (item) => item.id === action.payload.newCoffee.id,
        )

        if (findCoffeeCart) {
          const updatedCoffeeArray = state.coffees.map((item) => {
            if (item.id === findCoffeeCart.id) {
              return { ...item, amount: action.payload.newCoffee.amount - 1 }
            }
            return item
          })
          draft.coffees = updatedCoffeeArray
        }

        draft.totalValueCoffee = draft.coffees.reduce((total, coffee) => {
          return total + coffee.value * coffee.amount
        }, 0)
      })
    case TypesAction.SELL_COFFEES:
      return produce(state, (draft) => {
        draft.buyCoffee.push(action.payload.buyCoffee)
        draft.coffees = []
        draft.totalValueCoffee = 0
      })
    default:
      return state
  }
}
