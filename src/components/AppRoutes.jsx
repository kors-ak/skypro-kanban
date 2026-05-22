import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainPage from '../pages/MainPage.jsx'
import SignInPage from '../pages/SignInPage.jsx'
import SignUpPage from '../pages/SignUpPage.jsx'
import ExitPage from '../pages/ExitPage.jsx'
import UserPage from '../pages/UserPage.jsx'
import NewCardPage from '../pages/NewCardPage.jsx'
import CardPage from '../pages/CardPage.jsx'

function AppRoutes() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainPage loading={loading} />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/card/add" element={<NewCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default AppRoutes
