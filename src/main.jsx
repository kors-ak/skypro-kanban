import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import GlobalStyles from './globalStyles.js'
import App from './App.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import TasksContextProvider from './context/TasksContextProvider.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <TasksContextProvider>
          <ThemeContextProvider>
            <GlobalStyles />
            <App />
          </ThemeContextProvider>
        </TasksContextProvider>
      </AuthContextProvider>
    </HashRouter>
  </StrictMode>,
)
