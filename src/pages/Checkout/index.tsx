import * as C from './styles'

import { Header } from '../../components/Header'

import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { BtnWithIconAndText } from '../../components/BtnWithIconAndText'
import { CoffeeCart } from '../../components/CoffeeCart'
import { useContext, useState } from 'react'
import { coffeeContext } from '../../contexts/coffeeContext'
import { buyCoffee } from '../../reducers/coffee/reducer'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export function Checkout() {
  const navigate = useNavigate()

  const { coffees, totalValueCoffee, orderDelivery } = useContext(coffeeContext)

  const [cep, setCep] = useState<number>()
  const [number, setNumber] = useState<number>()
  const [city, setCity] = useState<string>()
  const [complement, setComplement] = useState<string>()
  const [district, setDistrict] = useState<string>()
  const [street, setStreet] = useState<string>()
  const [uf, setUf] = useState<string>()

  const [paymentMethod, setPaymentMethod] = useState<
    'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  >('CARTÃO DE CRÉDITO')

  const delivery = 3.5
  const deliveryFormat = delivery.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const itensValueFormat = totalValueCoffee.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const total = delivery + totalValueCoffee
  const totalFormat = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleBuyCoffee() {
    if (
      !cep ||
      !city ||
      !complement ||
      !district ||
      !number ||
      !street ||
      !uf
    ) {
      return
    }
    const id = uuidv4()

    const data: buyCoffee = {
      id,
      orderAddress: {
        cep,
        city,
        complement,
        district,
        number,
        street,
        uf,
      },
      coffees,
      finalOrderValue: total,
      typePayment: paymentMethod,
    }
    orderDelivery(data)
    navigate(`/success/${id}`)
  }

  function handleSelectPaymentMethod(
    type: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO',
  ) {
    setPaymentMethod(type)
  }

  return (
    <C.ContainerCheckout>
      <Header />
      <C.Content>
        <C.Left>
          <C.Title>Complete seu pedido</C.Title>
          <C.FormAddress>
            <C.InfoFormAddress>
              <C.IconMap>
                <MapPinLine size={22} weight="bold" />
              </C.IconMap>

              <C.Text>
                <C.SpanTitle>Endereço de Entrega</C.SpanTitle>
                <C.SpanSubTitle>
                  Informe o endereço onde deseja receber seu pedido
                </C.SpanSubTitle>
              </C.Text>
            </C.InfoFormAddress>

            <C.ContainerForm>
              <C.CEPDiv>
                <C.InputStandard
                  placeholder="CEP"
                  id="cep"
                  type="number"
                  onChange={(e: any) => setCep(e.target.value)}
                />
              </C.CEPDiv>

              <C.RoadDiv>
                <C.InputStandard
                  placeholder="Rua"
                  id="road"
                  onChange={(e: any) => setStreet(e.target.value)}
                />
              </C.RoadDiv>

              <C.NumberDiv>
                <C.InputStandard
                  placeholder="Número"
                  id="number"
                  type="number"
                  onChange={(e: any) => setNumber(e.target.value)}
                />
              </C.NumberDiv>
              <C.ComplementDiv>
                <C.InputStandard
                  placeholder="Complemento"
                  id="complement"
                  onChange={(e: any) => setComplement(e.target.value)}
                />
              </C.ComplementDiv>

              <C.DistrictDiv>
                <C.InputStandard
                  placeholder="Bairro"
                  id="district"
                  onChange={(e: any) => setDistrict(e.target.value)}
                />
              </C.DistrictDiv>

              <C.CityDiv>
                <C.InputStandard
                  placeholder="Cidade"
                  id="city"
                  onChange={(e: any) => setCity(e.target.value)}
                />
              </C.CityDiv>

              <C.StateDiv>
                <C.InputStandard
                  placeholder="UF"
                  id="state"
                  onChange={(e: any) => setUf(e.target.value)}
                  maxLength={2}
                />
              </C.StateDiv>
            </C.ContainerForm>
          </C.FormAddress>

          <C.FormPayment>
            <C.InfoFormPayment>
              <C.IconDollar>
                <CurrencyDollar size={22} weight="bold" />
              </C.IconDollar>

              <C.Text>
                <C.SpanTitle>Pagamento</C.SpanTitle>
                <C.SpanSubTitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </C.SpanSubTitle>
              </C.Text>
            </C.InfoFormPayment>

            <C.ContainerBtnsPayment>
              <BtnWithIconAndText
                icon="CreditCard"
                size={22}
                text="CARTÃO DE CRÉDITO"
                onClick={handleSelectPaymentMethod}
                type="CARTÃO DE CRÉDITO"
                paymentMethod={paymentMethod}
              />

              <BtnWithIconAndText
                icon="Money"
                size={22}
                text="CARTÃO DE DÉBITO"
                onClick={handleSelectPaymentMethod}
                type="CARTÃO DE DÉBITO"
                paymentMethod={paymentMethod}
              />

              <BtnWithIconAndText
                icon="Bank"
                size={22}
                text="DINHEIRO"
                onClick={handleSelectPaymentMethod}
                type="DINHEIRO"
                paymentMethod={paymentMethod}
              />
            </C.ContainerBtnsPayment>
          </C.FormPayment>
        </C.Left>

        <C.Right>
          <C.Title>Cafés selecionados</C.Title>
          <C.CardList>
            {coffees.map((item) => {
              return <CoffeeCart data={item} key={item.id} />
            })}

            <C.TotalPayContainer>
              <C.ItensValue>
                <span>Total de itens</span>
                <span>{itensValueFormat}</span>
              </C.ItensValue>

              <C.DeliveryValue>
                <span>Entrega</span>
                <span>{deliveryFormat}</span>
              </C.DeliveryValue>

              <C.Total>
                <span>Total</span>
                <span>{totalFormat}</span>
              </C.Total>
            </C.TotalPayContainer>

            <C.ContainerBtn onClick={handleBuyCoffee}>
              CONFIRMAR PEDIDO
            </C.ContainerBtn>
          </C.CardList>
        </C.Right>
      </C.Content>
    </C.ContainerCheckout>
  )
}
