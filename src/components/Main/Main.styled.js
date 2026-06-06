import styled from 'styled-components'

export const SMain = styled.main`
  width: 100%;
`

export const SContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 0 0 16px;
  }
`

export const SBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`

export const SContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`
