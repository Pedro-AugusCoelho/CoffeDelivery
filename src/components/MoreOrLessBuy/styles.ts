import styled from 'styled-components'

export const ContainerAmountCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const ShowAmount = styled.div`
  font-size: 0.875rem;
`

export const BtnIcon = styled.button`
  background: transparent;
  color: ${(props) => props.theme['purple-base']};
  outline: 0;
  border: 0;
  cursor: pointer;
`

export const AmountItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.5rem;
`

export const BtnAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: 0;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-base']};

  gap: 0.5rem;
  padding: 0.6rem;

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 0.75rem;
  }
`
