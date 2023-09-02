import styled from 'styled-components'

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellowBase: 'yellow-base',
  black: 'base-text',
  purple: 'purple-base',
} as const

interface IconProps {
  statusColor: keyof typeof ICON_COLORS
}

export const ContainerIcon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  padding: 8px;
  background: ${(props) => props.theme[ICON_COLORS[props.statusColor]]};
  color: ${(props) => props.theme.white};
`

export const Message = styled.span`
  font-size: 1rem;
  font-weight: 400;
`
