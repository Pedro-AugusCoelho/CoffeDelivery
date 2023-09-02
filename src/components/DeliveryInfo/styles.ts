import styled from 'styled-components'

export const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellowBase: 'yellow-base',
  purple: 'purple-base',
} as const

interface ContainerIconProps {
  color: keyof typeof ICON_COLORS
}

export const ContainerDeliveryInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
`

export const ContainerIcon = styled.div<ContainerIconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  color: ${(props) => props.theme.white};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`

export const SubTitle = styled.div`
  font-weight: bold;
`
