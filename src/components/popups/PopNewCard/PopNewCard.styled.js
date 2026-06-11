import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SPopNewCard = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  height: 100vh;
  overflow-y: auto;

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
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.overlay};

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
    height: auto;
    min-height: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`
export const SBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
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
export const STitle = styled.h3`
  color: ${({ theme }) => theme.primaryText};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`
export const SLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: rgb(148, 166, 190);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primaryText};
  }
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
    width: 100%;
    display: block;
  }
`
export const SFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const SLabel = styled.label`
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const SInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder,
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: rgb(148, 166, 190);
    letter-spacing: -0.14px;
  }
`
export const STextarea = styled.textarea`
  width: 100%;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

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
    height: 34px;
  }
`
export const SCategories = styled.div`
  margin-bottom: 20px;
`
export const SCatText = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const SThemes = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 495px) {
    flex-wrap: wrap;
    gap: 7px 0;
  }
`
export const STheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 0.4;
  cursor: pointer;
  background-color: ${({ theme, $cardTheme }) =>
    theme.cardThemes[$cardTheme].bg || theme.cardThemes.default.bg};

  ${({ $active }) => $active && `opacity: 1 !important;`};

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
export const SButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: rgb(86, 94, 239);
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: rgb(255, 255, 255);
  float: right;

  &:hover {
    background-color: rgb(51, 57, 155);
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
