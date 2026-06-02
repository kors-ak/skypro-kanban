import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import MainPage from '../pages/MainPage.jsx'
import SignInPage from '../pages/SignInPage.jsx'
import SignUpPage from '../pages/SignUpPage.jsx'
import ExitPage from '../pages/ExitPage.jsx'
import NewCardPage from '../pages/NewCardPage.jsx'
import CardPage from '../pages/CardPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import PrivateRoute from '../components/PrivateRoute.jsx'
import { AuthContext } from '../context/ContextApi.js'

function AppRoutes() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={!!user} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/exit" element={<ExitPage />} />
          <Route path="/task/add" element={<NewCardPage />} />
          <Route path="/task/:id" element={<CardPage />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
