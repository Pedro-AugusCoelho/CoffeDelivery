import styled from 'styled-components'

export const ContainerCategory = styled.span`
  text-align: center;
  font-size: 0.625rem;
  font-weight: bold;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 10px;
`
