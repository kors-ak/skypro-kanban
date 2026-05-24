import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainPage from '../pages/MainPage.jsx'
import SignInPage from '../pages/SignInPage.jsx'
import SignUpPage from '../pages/SignUpPage.jsx'
import ExitPage from '../pages/ExitPage.jsx'
import UserPage from '../pages/UserPage.jsx'
import NewCardPage from '../pages/NewCardPage.jsx'
import CardPage from '../pages/CardPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import PrivateRoute from '../components/PrivateRoute.jsx'

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          <Route path="/card/add" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
