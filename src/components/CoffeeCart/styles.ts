import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  padding: 2rem 0;
  gap: 1rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ContainerImg = styled.div`
  img {
    width: 64px;
    height: 64px;
  }
`

export const ContainerContent = styled.div`
  flex: 1;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme['base-title']};
`

export const Title = styled.span``

export const Value = styled.span`
  font-weight: bold;
`

export const ContainerBtns = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`
