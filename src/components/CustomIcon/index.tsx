import React from 'react'
import {
  CreditCard,
  Money,
  Bank,
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  IconWeight,
  MapPin,
  Timer,
} from '@phosphor-icons/react'

const iconComponents = {
  CreditCard,
  Money,
  Bank,
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  MapPin,
  Timer,
}

export type IconName = keyof typeof iconComponents

interface IconProps {
  name: IconName
  size?: number
  weight?: IconWeight | undefined
}

const CustomIcon: React.FC<IconProps> = ({
  name,
  size = 22,
  weight = 'fill',
  ...restProps
}) => {
  const IconComponent = iconComponents[name]

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado.`)
    return null
  }

  return <IconComponent size={size} {...restProps} weight={weight} />
}

export default CustomIcon
