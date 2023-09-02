import * as H from './styles'

import { Header } from '../../components/Header'

import { Banner } from './components/Banner'
import { MenuMain } from './components/MenuMain'

export function Home() {
  return (
    <H.MainContainer>
      <Header />
      <Banner />
      <MenuMain />
    </H.MainContainer>
  )
}
