import { ReactNode, createContext, useReducer, useState } from 'react'
import { CoffeeReducer, buyCoffee } from '../reducers/coffee/reducer'
import {
  addCoffeeToCartAction,
  amountLessCoffeeToCartAction,
  amountMoreCoffeeToCartAction,
  orderDeliveryAction,
  removeCoffeeToCartAction,
} from '../reducers/coffee/actions'

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

interface coffeeContextType {
  coffees: Cart[]
  buyCoffee: buyCoffee[]
  totalValueCoffee: number
  coffeesShop: Coffee[]
  AddCoffeeCart: (coffee: Cart) => void
  RemoveCoffeeCart: (coffee: Cart) => void
  amountAddCoffee: (coffee: Cart) => void
  amountLessCoffee: (coffee: Cart) => void
  orderDelivery: (buyCoffee: buyCoffee) => void
}

interface coffeeContextProviderProps {
  children: ReactNode
}

export const coffeeContext = createContext({} as coffeeContextType)

export function CoffeeContextProvider({
  children,
}: coffeeContextProviderProps) {
  const [coffeesShop, setCoffeesShop] = useState<Coffee[]>([
    {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.9,
      category: ['Tradicional'],
    },

    {
      id: 2,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 7.5,
      category: ['Tradicional', 'Gelado'],
    },

    {
      id: 3,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 15,
      category: ['Especial', 'Gelado', 'Alcoólico'],
    },
  ])

  const [cartCoffeeState, dispatch] = useReducer(CoffeeReducer, {
    coffees: [],
    buyCoffee: [],
    totalValueCoffee: 0,
  })

  function AddCoffeeCart(coffee: Cart) {
    dispatch(addCoffeeToCartAction(coffee))
  }

  function RemoveCoffeeCart(coffee: Cart) {
    dispatch(removeCoffeeToCartAction(coffee))
  }

  function amountAddCoffee(coffee: Cart) {
    dispatch(amountMoreCoffeeToCartAction(coffee))
  }

  function amountLessCoffee(coffee: Cart) {
    dispatch(amountLessCoffeeToCartAction(coffee))
  }

  function orderDelivery(buyCoffee: buyCoffee) {
    dispatch(orderDeliveryAction(buyCoffee))
  }

  const { coffees, totalValueCoffee, buyCoffee } = cartCoffeeState

  return (
    <coffeeContext.Provider
      value={{
        coffees,
        buyCoffee,
        coffeesShop,
        totalValueCoffee,
        AddCoffeeCart,
        RemoveCoffeeCart,
        amountAddCoffee,
        amountLessCoffee,
        orderDelivery,
      }}
    >
      {children}
    </coffeeContext.Provider>
  )
}
