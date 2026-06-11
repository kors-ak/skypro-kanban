import styled from 'styled-components'

export const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  ${({ $isPopCalendar }) =>
    $isPopCalendar &&
    `
    width: 100%;
  `}

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`

export const STitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const SBlock = styled.div`
  display: block;
`
export const SNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const SMonth = styled.div`
  color: rgb(148, 166, 190);
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const SNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: rgb(148, 166, 190);
  }
`

export const SContent = styled.div`
  margin-bottom: 12px;
`

export const SDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const SDayName = styled.div`
  color: rgb(148, 166, 190);
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`

export const SCells = styled.div`
  width: 182px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -4px;

  @media screen and (max-width: 660px) {
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-self: self-start;
  }
`

export const SCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: rgb(148, 166, 190);
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: rgb(148, 166, 190);
    background-color: rgb(234, 238, 246);
  }

  @media screen and (max-width: 660px) {
    width: 12%;
    height: 0;
    padding-top: 6%;
    padding-bottom: 6%;
    font-size: 14px;
  }

  ${({ $isOtherMonth }) =>
    $isOtherMonth &&
    `
    opacity: 0;
  `}

  ${({ $isToday }) =>
    $isToday &&
    `
    font-weight: 700;
  `}

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: rgb(148, 166, 190);
    color: rgb(255, 255, 255);
  `}
`

export const SPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const SText = styled.p`
  color: rgb(148, 166, 190);
  font-size: 10px;
  line-height: 1;

  span {
    color: rgb(0, 0, 0);
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }

  ${({ $error }) =>
    $error &&
    `
      color: rgb(248, 77, 77); 
    `};
`
