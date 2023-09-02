import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 6.25rem 0;
`

export const LeftContainer = styled.div`
  flex: 1;
`

export const Title = styled.span`
  font-size: 3rem;
  font-weight: bolder;
  font-family: 'Baloo 2', cursive;
`

export const QualityInformationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 5rem;
`

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const ImgBanner = styled.img`
  width: 30vw;
  height: auto;
`
