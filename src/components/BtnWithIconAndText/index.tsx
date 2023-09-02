import * as B from './styles'

import CustomIcon, { IconName } from '../CustomIcon'

interface BtnWithIconAndTextProps {
  icon: IconName
  size: number
  text: string
  onClick: (type: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO') => void
  type: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  paymentMethod: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
}

export function BtnWithIconAndText({
  icon,
  text,
  size,
  onClick,
  type,
  paymentMethod,
}: BtnWithIconAndTextProps) {
  function handleClick() {
    onClick(type)
  }
  return (
    <B.Btn onClick={handleClick} type={type} typeSelection={paymentMethod}>
      <div>
        <CustomIcon name={icon} size={size} />
      </div>
      <span>{text}</span>
    </B.Btn>
  )
}
