import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

export const ContainerCoffee = styled.div`
  width: 120px;
  height: 120px;

  margin-top: -2rem;
`

export const ImgCoffee = styled.img`
  width: 100%;
  height: auto;
`

export const ContainerCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.25rem;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: bold;
`

export const SubTitle = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`

export const Price = styled.div`
  font-size: 1.5rem;
  font-family: 'Baloo 2', cursive;
  font-weight: bolder;
  color: ${(props) => props.theme['base-text']};
`

export const ContainerAmountCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const AmountItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.75rem;
`

export const BtnIcon = styled.button`
  background: transparent;
  color: ${(props) => props.theme['purple-base']};
  outline: 0;
  border: 0;
  cursor: pointer;
`

export const ShowAmount = styled.div``

export const BtnShoppingCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: 0;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  padding: 0.75rem;

  &:hover {
    background: ${(props) => props.theme['purple-base']};
  }
`
