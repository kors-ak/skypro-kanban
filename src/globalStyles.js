import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif, Arial, Helvetica;
  transition: background-color 0.2s ease, color 0.4s ease;

  }

  *:before,
  *:after {
  box-sizing: border-box;
  transition: background-color 0.2s ease, color 0.4s ease;

  }

  a,
  a:visited {
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  }

  button,
  ._btn {
  cursor: pointer;
  outline: none;
  }

  ul li {
  list-style: none;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.primaryText};
  scroll-behavior: smooth;
  }
`
export default GlobalStyles
