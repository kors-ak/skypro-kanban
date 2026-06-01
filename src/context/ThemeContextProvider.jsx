import { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  )

  const LightTheme = {
    primaryText: '#000000',
    secondaryText: '#94a6be',
    authFooterText: 'rgba(148, 166, 190, 0.4)',

    primaryBg: '#eaeef6',
    secondaryBg: '#ffffff',

    buttonBg: '#565eef',
    buttonHover: '#33399b',

    error: 'rgb(248, 77, 77)',
    error404Text: '#2f3542',
  }

  const DarkTheme = {}

  const userTheme = () => {
    switch (theme) {
      case 'light':
        return LightTheme

      case 'dark':
        return DarkTheme

      default:
        return LightTheme
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme: userTheme(), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
