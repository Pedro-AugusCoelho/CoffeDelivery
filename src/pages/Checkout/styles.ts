import styled from 'styled-components'

export const ContainerCheckout = styled.div`
  margin: 0 10rem;

  @media (max-width: 1024px) {
    margin: 0 5rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 425px) {
    margin: 0 0.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`

export const Left = styled.div`
  flex: 2;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
  }
`

export const Right = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const FormBase = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2.5rem;
`

export const FormAddress = styled(FormBase)`
  //
`

export const FormPayment = styled(FormBase)`
  //
`

const infoBase = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const InfoFormAddress = styled(infoBase)`
  //
`

export const InfoFormPayment = styled(infoBase)`
  //
`

export const Text = styled.div`
  margin-left: 1rem;
`

export const SpanTitle = styled.span`
  display: block;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerForm = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1rem;
  gap: 1rem;
  grid-template:
    'cep      .          . '
    'road     road       road'
    'number   complement complement'
    'district city       state';

  @media (max-width: 768px) {
    grid-template:
      'cep cep'
      'road road'
      'number number'
      'complement complement'
      'district district'
      'city state';
  }
`

export const CEPDiv = styled.div`
  grid-area: cep;
`

export const RoadDiv = styled.div`
  grid-area: road;
`

export const NumberDiv = styled.div`
  grid-area: number;
`

export const ComplementDiv = styled.div`
  grid-area: complement;
`
export const DistrictDiv = styled.div`
  grid-area: district;
`

export const CityDiv = styled.div`
  grid-area: city;
`

export const StateDiv = styled.div`
  grid-area: state;
`

export const InputStandard = styled.input`
  width: 100%;
  padding: 0.75rem;
  outline: 0;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-label']};
  background: ${(props) => props.theme['base-input']};
`

export const SpanSubTitle = styled.span`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  display: block;
  color: ${(props) => props.theme['base-text']};
`

export const IconMap = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
`

export const IconDollar = styled.div`
  color: ${(props) => props.theme['purple-base']};
`

export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: bold;
`

export const ContainerBtnsPayment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CardList = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;
  padding: 2.5rem;
`

export const TotalPayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
`

const BasicSpan = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const ItensValue = styled(BasicSpan)`
  //
`

export const DeliveryValue = styled(BasicSpan)`
  //
`

export const Total = styled(BasicSpan)`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: bold;
`

export const ContainerBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  border: 0;
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 1.5rem;
  padding: 12px;
  outline: 0;
  border-radius: 5px;
  background: ${(props) => props.theme['yellow-base']};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
