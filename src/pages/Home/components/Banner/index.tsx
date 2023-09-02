import * as B from './styles'

import ImgBanner from '../../../../assets/Banner.svg'
import { QualityInformation } from '../../../../components/QualityInformation'

export function Banner() {
  return (
    <B.BannerContainer>
      <B.LeftContainer>
        <B.Title>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </B.Title>

        <B.QualityInformationContainer>
          <QualityInformation
            icon="shopping_cart"
            text="Compra simples e segura"
          />

          <QualityInformation
            icon="package"
            text="Embalagem mantém o café intacto"
          />

          <QualityInformation icon="timer" text="Entrega rápida e rastreada" />

          <QualityInformation
            icon="coffee"
            text="O café chega fresquinho até você"
          />
        </B.QualityInformationContainer>
      </B.LeftContainer>

      <B.RightContainer>
        <B.ImgBanner src={ImgBanner} alt="Coffee" />
      </B.RightContainer>
    </B.BannerContainer>
  )
}
