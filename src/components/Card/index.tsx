import { useContext, useState } from 'react'

import * as C from './styles'
import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'

import CoffeeImg from '../../assets/Coffee.svg'
import { Category } from '../Category'
import { Coffee, coffeeContext } from '../../contexts/coffeeContext'

interface CardProps {
  data: Coffee
}

export function Card({ data }: CardProps) {
  const { AddCoffeeCart } = useContext(coffeeContext)

  const [amount, setAmount] = useState(0)

  const valueFormat = data.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleAddAmount() {
    setAmount(amount + 1)
  }

  function handleRemoveAmount() {
    if (amount <= 0) {
      return
    }
    setAmount(amount - 1)
  }

  function handleAddCoffee() {
    if (amount <= 0) {
      return
    }

    const coffee = {
      ...data,
      amount,
    }

    AddCoffeeCart(coffee)
  }

  return (
    <C.CardContainer>
      <C.ContainerCoffee>
        <C.ImgCoffee src={CoffeeImg} alt="Imagem de uma xícara de café" />
      </C.ContainerCoffee>
      <C.ContainerCategories>
        {data.category.map((item, key) => {
          return <Category label={item} key={key} />
        })}
      </C.ContainerCategories>

      <C.Title>{data.name}</C.Title>

      <C.SubTitle>{data.description}</C.SubTitle>

      <C.Footer>
        <C.Price>{valueFormat}</C.Price>

        <C.ContainerAmountCart>
          <C.AmountItems>
            <C.BtnIcon onClick={handleRemoveAmount}>
              <Minus size={22} weight="bold" />
            </C.BtnIcon>

            <C.ShowAmount>{amount}</C.ShowAmount>

            <C.BtnIcon onClick={handleAddAmount}>
              <Plus size={22} weight="bold" />
            </C.BtnIcon>
          </C.AmountItems>

          <C.BtnShoppingCart onClick={handleAddCoffee}>
            <ShoppingCart size={22} weight="fill" />
          </C.BtnShoppingCart>
        </C.ContainerAmountCart>
      </C.Footer>
    </C.CardContainer>
  )
}
