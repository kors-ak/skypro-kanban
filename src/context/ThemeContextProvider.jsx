import { useState } from 'react'
import { ThemeContext } from './ContextApi'
import { ThemeProvider } from 'styled-components'

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
  )

  const LightTheme = {
    mode: 'light',

    primaryText: 'rgb(0, 0, 0)',
    border: 'rgb(212, 219, 229)',
    shadow: 'rgba(26, 56, 101, 0.21)',
    primaryBg: 'rgb(234, 238, 246)',
    secondaryBg: 'rgb(255, 255, 255)',
    buttonBg: 'rgb(86, 94, 239)',
    hover: 'rgb(51, 57, 155)',
    columnDrop: 'rgba(207, 213, 234, 0.3)',
    overlay: 'rgba(0, 0, 0, 0.4)',
    error404Text: 'rgb(47, 53, 66)',

    cardThemes: {
      'Web Design': { bg: 'rgb(255, 228, 194)', text: 'rgb(255, 109, 0)' },
      Research: { bg: 'rgb(180, 253, 209)', text: 'rgb(6, 177, 110)' },
      Copywriting: { bg: 'rgb(233, 212, 255)', text: 'rgb(154, 72, 241)' },
      default: { bg: 'rgb(148, 166, 190)', text: 'rgb(255, 255, 255)' },
    },
  }

  const DarkTheme = {
    mode: 'dark',

    primaryText: 'rgb(255, 255, 255)',
    border: 'rgb(78, 85, 102)',
    shadow: 'rgba(148, 166, 190, 0.4)',
    primaryBg: 'rgb(21, 20, 25)',
    secondaryBg: 'rgb(32, 32, 44)',
    buttonBg: 'rgb(255, 255, 255)',
    hover: 'rgb(186, 186, 207)',
    columnDrop: 'rgba(40, 51, 92, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.8)',
    error404Text: 'rgb(182, 187, 196)',

    cardThemes: {
      'Web Design': { text: 'rgb(255, 228, 194)', bg: 'rgb(255, 109, 0)' },
      Research: { text: 'rgb(180, 253, 209)', bg: 'rgb(6, 177, 110)' },
      Copywriting: { text: 'rgb(233, 212, 255)', bg: 'rgb(154, 72, 241)' },
      default: { bg: 'rgb(148, 166, 190)', text: 'rgb(255, 255, 255)' },
    },
  }

  const currentTheme = theme === 'dark' ? DarkTheme : LightTheme

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
