import CustomIcon from '../CustomIcon'
import * as M from './styles'

interface MoreOrLessBuyProps {
  amount: number
  amountMore: () => void
  amountLess: () => void
  removeCoffee: () => void
  type: 'delete' | 'cart'
}

export function MoreOrLessBuy({
  amount,
  amountMore,
  type,
  amountLess,
  removeCoffee,
}: MoreOrLessBuyProps) {
  function handleAmountMore() {
    amountMore()
  }

  function handleAmountLess() {
    amountLess()
  }

  function handleRemoveCoffee() {
    removeCoffee()
  }

  return (
    <M.ContainerAmountCart>
      <M.AmountItems>
        <M.BtnIcon onClick={handleAmountLess}>
          <CustomIcon
            name="Minus"
            size={type === 'delete' ? 14 : 22}
            weight="regular"
          />
        </M.BtnIcon>

        <M.ShowAmount>{amount}</M.ShowAmount>

        <M.BtnIcon onClick={handleAmountMore}>
          <CustomIcon
            name="Plus"
            size={type === 'delete' ? 14 : 22}
            weight="regular"
          />
        </M.BtnIcon>
      </M.AmountItems>

      {type === 'cart' && (
        <M.BtnAction>
          <CustomIcon name="ShoppingCart" size={22} />
        </M.BtnAction>
      )}

      {type === 'delete' && (
        <M.BtnAction onClick={handleRemoveCoffee}>
          <CustomIcon name="Trash" size={14} weight="bold" />
          <span>REMOVER</span>
        </M.BtnAction>
      )}
    </M.ContainerAmountCart>
  )
}
