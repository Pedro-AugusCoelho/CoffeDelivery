import styled from 'styled-components'

interface PropsBtn {
  type: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  typeSelection: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
}

export const Btn = styled.button<PropsBtn>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  gap: 0.5rem;
  padding: 1rem;

  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) =>
    props.type === props.typeSelection
      ? props.theme['purple-light']
      : props.theme['base-button']};

  border: 2px solid
    ${(props) =>
      props.type === props.typeSelection
        ? props.theme['purple-base']
        : 'transparent'};

  span {
    font-size: 0.75rem;
  }

  div {
    color: ${(props) => props.theme['purple-base']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:active {
    border: 2px solid ${(props) => props.theme['purple-base']};
    background: ${(props) => props.theme['purple-light']};
  }
`
