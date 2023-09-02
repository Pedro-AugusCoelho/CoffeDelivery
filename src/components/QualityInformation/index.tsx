import * as Q from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

interface QualityInformationProps {
  text: string
  icon: 'shopping_cart' | 'package' | 'timer' | 'coffee'
}

export function QualityInformation({ icon, text }: QualityInformationProps) {
  return (
    <Q.ContainerInformation>
      {icon === 'shopping_cart' && (
        <Q.ContainerIcon statusColor="yellowDark">
          <ShoppingCart size={16} weight="fill" />
        </Q.ContainerIcon>
      )}

      {icon === 'package' && (
        <Q.ContainerIcon statusColor="black">
          <Package size={16} weight="fill" />
        </Q.ContainerIcon>
      )}

      {icon === 'timer' && (
        <Q.ContainerIcon statusColor="yellowBase">
          <Timer size={16} weight="fill" />
        </Q.ContainerIcon>
      )}

      {icon === 'coffee' && (
        <Q.ContainerIcon statusColor="purple">
          <Coffee size={16} weight="fill" />
        </Q.ContainerIcon>
      )}

      <Q.Message>{text}</Q.Message>
    </Q.ContainerInformation>
  )
}
