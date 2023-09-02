import { Card } from '../../../../components/Card'
import { coffeeContext } from '../../../../contexts/coffeeContext'
import * as M from './styles'

import { useContext } from 'react'

export function MenuMain() {
  const { coffeesShop } = useContext(coffeeContext)

  return (
    <M.MainContainer>
      <M.Title>Nossos cafés</M.Title>

      <M.CoffeeContainer>
        {coffeesShop.map((item) => {
          return <Card data={item} key={item.id} />
        })}
      </M.CoffeeContainer>
    </M.MainContainer>
  )
}
