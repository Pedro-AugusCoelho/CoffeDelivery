import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const BaseDivCenterComponents = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoContainer = styled(BaseDivCenterComponents)``

export const Logo = styled.img`
  width: 5.31rem;
  height: 2.5rem;
`

export const MenuRightContainer = styled(BaseDivCenterComponents)``

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
`

export const CityName = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
`

export const IconMapPin = styled(MapPin)`
  color: ${(props) => props.theme['purple-base']};
`

export const ShoppingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};

  margin-left: 0.75rem;

  cursor: pointer;

  position: relative;
`

export const IconShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const infoCartLength = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  width: 20px;
  height: 20px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
`
