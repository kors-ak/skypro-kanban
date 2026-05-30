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
      let retryCount = 0

      while (retryCount < 3) {
        const data = await fetchTasks({ token: user.token })

        if (data.status !== 500) {
          if (data.status === 200) {
            setTasks(data.data.tasks)
            return
          }
          throw new Error('Что-то пошло не так, попробуйте позже.')
        }

        retryCount++
        console.warn(`Попытка \${retryCount} неудачна, повторяем запрос...`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      throw new Error('Сервер недоступен, попробуйте позже.')
    } catch (error) {
      setErr(
        error.message === 'Failed to fetch' || error.message === 'Network Error'
          ? 'Кажется, у вас пропал интернет, попробуйте позже.'
          : 'Что-то пошло не так. \nОбновите страницу или попробуйте позже.',
      )
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
