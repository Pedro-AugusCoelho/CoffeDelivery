import styled from 'styled-components'

export const MainContainer = styled.div``

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bolder;
  font-family: 'Baloo 2', cursive;
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 3.375rem;
  margin-bottom: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
