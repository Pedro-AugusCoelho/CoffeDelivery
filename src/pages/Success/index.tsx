import { Header } from '../../components/Header'
import * as S from './styles'

import { DeliveryInfo } from '../../components/DeliveryInfo'

import ImgIllustration from '../../assets/Illustration.png'
import { useContext } from 'react'
import { coffeeContext } from '../../contexts/coffeeContext'
import { useParams } from 'react-router-dom'

export function Success() {
  const { buyCoffee } = useContext(coffeeContext)

  const { id } = useParams()

  const order = buyCoffee.find((item) => item.id === id)

  const address = order
    ? `Entrega em ${order.orderAddress.street}, ${order.orderAddress.number} ${order.orderAddress.district} - ${order.orderAddress.city}, ${order.orderAddress.uf}`
    : 'Ocorreu um erro ao tentar encontrar o endereço informado'

  return (
    <S.ContainerSuccess>
      <Header />

      <div>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </S.Subtitle>
      </div>

      <S.Content>
        <S.Left>
          <S.Wrapper>
            <DeliveryInfo icon="MapPin" color="purple" title={address} />

            <DeliveryInfo
              icon="Timer"
              color="yellowBase"
              title="Previsão de entrega"
              subtitle="20 min - 30 min"
            />

            <DeliveryInfo
              icon="Money"
              color="yellowDark"
              title="Pagamento na entrega"
              subtitle={order!.typePayment}
            />
          </S.Wrapper>
        </S.Left>

        <S.Right>
          <S.ContainerImg>
            <img src={ImgIllustration} alt="Homem na moto de entrega" />
          </S.ContainerImg>
        </S.Right>
      </S.Content>
    </S.ContainerSuccess>
  )
}
