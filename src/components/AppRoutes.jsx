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
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  );
  const [tasks, setTasks] = useState([])

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={!!user} />}>
        <Route
          path="/"
          element={<MainPage tasks={tasks} setTasks={setTasks} user={user}/>}
        >
          <Route path="/user" element={<UserPage user={user}/>} />
          <Route path="/exit" element={<ExitPage setUser={setUser} />} />
          <Route path="/task/add" element={<NewCardPage user={user}/>} />
          <Route path="/task/:id" element={<CardPage setTasks={setTasks} user={user}/>} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setUser={setUser} />} />
      <Route path="/sign-up" element={<SignUpPage setUser={setUser} />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
