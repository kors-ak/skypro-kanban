import styled from 'styled-components'

export const SColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  transition: 0.2s;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  border-radius: 8px;

  ${({ $active }) =>
    $active &&
    `
    background-color: rgba(207, 213, 234, 0.3)
  `};
`

export const STitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`

export const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`
