import { styled } from 'styled-components'
import { cardThemes } from '../../data'

export const SContainer = styled.div`
  padding: 5px;
`

export const SCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  ${({ $isDragging }) =>
    $isDragging &&
    `
    opacity: 0;
    cursor: grabbing;
  `}

  ${({ $isDragging, $isOverlay }) =>
    !$isDragging &&
    !$isOverlay &&
    `
      &:hover {
        cursor: grab;
      }
    `}

  ${({ $isOverlay }) =>
    $isOverlay &&
    `
    box-shadow: 0px 10px 39px rgba(148,166,190,0.4);
    cursor: grabbing;
  `}
`

export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $cardTheme }) =>
    cardThemes[$cardTheme].bg || cardThemes.default.bg};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $cardTheme }) =>
      cardThemes[$cardTheme].text || cardThemes.default.text};
  }
`

export const STextOrange = styled.p`
  background-color: #ffe4c2;
  color: #ff6d00;
`

export const STextGreen = styled.p`
  background-color: #ffe4c2;
  color: #ff6d00;
`

export const SButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`

export const SDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`

export const SContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const STitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const SDate = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    font-weight: 400;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`
