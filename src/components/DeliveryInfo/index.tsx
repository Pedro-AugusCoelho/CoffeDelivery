import * as D from './styles'
import { ICON_COLORS } from './styles'

import CustomIcon, { IconName } from '../CustomIcon'

interface DeliveryInfoProps {
  color: keyof typeof ICON_COLORS
  title: string
  subtitle?: string
  icon: IconName
}

export function DeliveryInfo({
  color,
  title,
  subtitle,
  icon,
}: DeliveryInfoProps) {
  return (
    <D.ContainerDeliveryInfo>
      <D.ContainerIcon color={color}>
        <CustomIcon name={icon} size={16} weight="fill" />
      </D.ContainerIcon>

      <D.Info>
        <D.Title>{title}</D.Title>
        {subtitle && <D.SubTitle>{subtitle}</D.SubTitle>}
      </D.Info>
    </D.ContainerDeliveryInfo>
  )
}
