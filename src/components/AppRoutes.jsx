import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('user'))
  const [tasks, setTasks] = useState([])

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage tasks={tasks} setTasks={setTasks} />}
        >
          <Route path="/user" element={<UserPage />} />
          <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          <Route path="/task/add" element={<NewCardPage />} />
          <Route path="/task/:id" element={<CardPage setTasks={setTasks} />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
