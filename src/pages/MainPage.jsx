import styled from 'styled-components'
import { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header/Header.jsx'
import Main from '../components/Main/Main.jsx'
import { Outlet } from 'react-router-dom'
import { fetchTasks } from '../services/api.js'

const SPage = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`

function MainPage({ user, tasks, setTasks }) {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const getTasks = useCallback(async () => {
    try {
      setLoading(true)

      const data = await fetchTasks({ token: user.token })
      data && setTasks(data)
    } catch (error) {
      setErr(error.message)
    } finally {
      setLoading(false)
    }
  }, [setTasks, user.token])

  useEffect(() => {
    const loadTasks = async () => {
      await getTasks()
    }
    loadTasks()
  }, [getTasks])

  return (
    <>
      <SPage>
        <Header user={user} />
        <Main loading={loading} tasks={tasks} err={err} />

        <Outlet />
      </SPage>
    </>
  )
}

export default MainPage
