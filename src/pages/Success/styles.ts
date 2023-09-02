import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  margin: 0 10rem;

  @media (max-width: 1024px) {
    margin: 0 5rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 425px) {
    margin: 0 0.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`

export const Left = styled.div`
  flex: 2;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
  }
`

export const Right = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 2rem;
  font-weight: bolder;
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: transparent;

  border: 2px solid ${(props) => props.theme['purple-dark']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ContainerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`
