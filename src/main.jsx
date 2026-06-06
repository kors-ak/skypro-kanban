import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './globalStyles.js'
import App from './App.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import TasksContextProvider from './context/TasksContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <TasksContextProvider>
          <GlobalStyles />
          <App />
        </TasksContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
