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

  ${({ theme, $active }) =>
    $active &&
    `
    background-color: ${theme.columnDrop}
  `};
`

export const STitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: rgb(148, 166, 190);
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
