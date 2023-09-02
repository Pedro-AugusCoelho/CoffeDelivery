import * as C from './styles'

import imgCoffee from '../../assets/Coffee.svg'
import { MoreOrLessBuy } from '../MoreOrLessBuy'
import { useContext } from 'react'
import { Cart, coffeeContext } from '../../contexts/coffeeContext'

interface CoffeeCartProps {
  data: Cart
}

export function CoffeeCart({ data }: CoffeeCartProps) {
  const { amountAddCoffee, amountLessCoffee, RemoveCoffeeCart } =
    useContext(coffeeContext)

  function handleSetAmountMore() {
    amountAddCoffee(data)
  }

  function handleSetAmountLess() {
    if (data.amount <= 1) {
      return
    }
    amountLessCoffee(data)
  }

  function handleRemoveCoffeeCart() {
    RemoveCoffeeCart(data)
  }

  const valueCurrent = data.amount * data.value
  const valueFormat = valueCurrent.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <C.Main>
      <C.ContainerImg>
        <img src={imgCoffee} alt="Uma xícara de café" />
      </C.ContainerImg>
      <C.ContainerContent>
        <C.Info>
          <C.Title>{data.name}</C.Title>
          <C.Value>{valueFormat}</C.Value>
        </C.Info>
        <C.ContainerBtns>
          <MoreOrLessBuy
            amount={data.amount}
            amountMore={handleSetAmountMore}
            amountLess={handleSetAmountLess}
            removeCoffee={handleRemoveCoffeeCart}
            type="delete"
          />
        </C.ContainerBtns>
      </C.ContainerContent>
    </C.Main>
  )
}
