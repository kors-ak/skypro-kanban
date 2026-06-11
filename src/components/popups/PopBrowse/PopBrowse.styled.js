import styled from 'styled-components'

export const SPopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  overflow-y: auto;
  inset: 0;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;

    height: auto;
    min-height: 0;

    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`
export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.overlay};

  @media screen and (max-width: 660px) {
    max-width: 100vw;
    min-height: 0;
    padding: 0;
    justify-content: flex-start;
    height: auto;
  }
`
export const SBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.border};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`
export const SContent = styled.div`
  display: block;
  text-align: left;
`
export const STopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`
export const STitle = styled.h3`
  color: ${({ theme }) => theme.primaryText};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`
export const SThemeTop = styled.div`
  display: block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  background-color: ${({ theme, $cardTheme }) =>
    theme.cardThemes[$cardTheme].bg || theme.cardThemes.default.bg};

  &:not(:last-child) {
    margin-right: 7px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({ theme, $cardTheme }) =>
      theme.cardThemes[$cardTheme].text || theme.cardThemes.default.text};
  }

  @media screen and (max-width: 495px) {
    display: none;
  }
`
export const SStatus = styled.div`
  margin-bottom: 11px;
`
export const SStatusPar = styled.div`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const SStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const SStatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: rgb(148, 166, 190);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    ${({ theme, selected }) =>
      selected &&
      `
      color: ${theme.secondaryBg};
    `}
  }

  ${({ theme, $selected }) =>
    $selected &&
    `background: rgb(148, 166, 190);
    color: ${theme.secondaryBg};
  `};
`

export const SWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`
export const SForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`
export const SFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const SFormLabel = styled.label`
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const STextarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.primaryBg};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  font-weight: 400;
  color: rgb(148, 166, 190);

  &::placeholder,
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: rgb(148, 166, 190);
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`
export const SThemeDown = styled.div`
  display: none;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`
export const SThemePar = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const SThemeBlock = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  background-color: ${({ theme, $cardTheme }) =>
    theme.cardThemes[$cardTheme].bg || theme.cardThemes.default.bg};

  &:not(:last-child) {
    margin-right: 7px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({ theme, $cardTheme }) =>
      theme.cardThemes[$cardTheme].text || theme.cardThemes.default.text};
  }
`
export const SBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`
export const SBtnGroup = styled.div`
  button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    width: 100%;

    button {
      margin-right: 0px;
    }
  }
`
export const SBtnBg = styled.button`
  border-radius: 4px;
  background: rgb(86, 94, 239);
  border: none;
  outline: none;
  color: rgb(255, 255, 255);

  a {
    color: rgb(255, 255, 255);
  }

  &:hover {
    background-color: rgb(51, 57, 155);
  }
`
export const SBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.buttonBg};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.buttonBg};

  a {
    color: ${({ theme }) => theme.buttonBg};
  }

  &:hover {
    background-color: rgb(51, 57, 155);
    color: rgb(255, 255, 255);

    a {
      color: rgb(255, 255, 255);
    }
  }
`
