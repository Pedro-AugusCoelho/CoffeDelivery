import * as H from './styles'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { coffeeContext } from '../../contexts/coffeeContext'

export function Header() {
  const { coffees } = useContext(coffeeContext)

  const coffeeAmount = coffees.reduce((acc, coffee) => {
    return acc + coffee.amount
  }, 0)

  return (
    <H.HeaderContainer>
      <H.Header>
        <H.LogoContainer>
          <NavLink to="/" title="cart">
            <H.Logo src={Logo} alt="Coffee Logo" />
          </NavLink>
        </H.LogoContainer>

        <H.MenuRightContainer>
          <H.Menu>
            <H.CityContainer>
              <H.IconMapPin weight="fill" size={22} />
              <H.CityName>Porto Alegre, RS</H.CityName>
            </H.CityContainer>
            <H.ShoppingCartContainer>
              {coffeeAmount > 0 && (
                <H.infoCartLength>{coffeeAmount}</H.infoCartLength>
              )}
              <NavLink to="/checkout" title="cart">
                <H.IconShoppingCart weight="fill" size={22} />
              </NavLink>
            </H.ShoppingCartContainer>
          </H.Menu>
        </H.MenuRightContainer>
      </H.Header>
    </H.HeaderContainer>
  )
}
