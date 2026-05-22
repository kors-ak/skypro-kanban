import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainPage from '../pages/MainPage.jsx'
import SignInPage from '../pages/SignInPage.jsx'
import SignUpPage from '../pages/SignUpPage.jsx'

function AppRoutes() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainPage loading={loading} />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default AppRoutes
