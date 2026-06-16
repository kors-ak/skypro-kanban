import { SCard, SCardGroup, SContainer, SContent } from './Card/Card.styled'
import styled from 'styled-components'

const SThemeLoader = styled.div`
  width: 82px;
  height: 20px;
  border-radius: 18px;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)'
      : 'linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)'};
`

const SButtonLoader = styled.div`
  width: 18px;
  height: 4px;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)'
      : 'linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)'};
`

const STitleLoader = styled.div`
  width: 113px;
  height: 13px;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)'
      : 'linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)'};
`

const SDateLoader = styled.div`
  width: 58px;
  height: 13px;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)'
      : 'linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)'};
`

const CardLoader = () => {
  return (
    <SContainer>
      <SCard $isLoader>
        <SCardGroup>
          <SThemeLoader />
          <SButtonLoader />
        </SCardGroup>
        <SContent>
          <STitleLoader></STitleLoader>
          <SDateLoader></SDateLoader>
        </SContent>
      </SCard>
    </SContainer>
  )
}

export default CardLoader
