import { useContext, useState } from 'react'
import { AuthContext, TasksContext } from './ContextApi'
import { deleteTask, fetchTasks, postTask } from '../services/api'
import { useNavigate } from 'react-router-dom'

const TasksContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [tasks, setTasks] = useState([])

  const [loading, setLoading] = useState(false)
  const [loadingErr, setloadingErr] = useState('')
  const [posting, setPosting] = useState(false)

  const getTasks = async () => {
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
      setloadingErr(
        error.message === 'Failed to fetch' || error.message === 'Network Error'
          ? 'Кажется, у вас пропал интернет, попробуйте позже.'
          : 'Что-то пошло не так. \nОбновите страницу или попробуйте позже.',
      )
    } finally {
      setLoading(false)
    }
  }

  const clearTasks = () => setTasks([])

  const handlePostTask = async (e, task) => {
    try {
      e.preventDefault()
      setPosting(true)
      const updatedTasks = await postTask({ token: user.token, task: task })
      if (updatedTasks) {
        setTasks(updatedTasks.data.tasks)
        navigate('/')
      }
    } catch {
      alert('Произошла непредвиденная ошибка. Попробуйте позже.')
    } finally {
      setPosting(false)
    }
  }

  const handleDeleteTask = async (e, id, setError) => {
    e.preventDefault()

    try {
      const updatedTasks = await deleteTask({ token: user.token, id: id })
      setTasks(updatedTasks.data.tasks)
      navigate('/')
    } catch (err) {
      if (
        err.message === 'Failed to fetch' ||
        err.message === 'Network Error'
      ) {
        setError('Кажется, у вас пропал интернет, попробуйте позже.')
      } else {
        setError('Что-то пошло не так, попробуйте позже.')
      }
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        posting,
        loadingErr,
        getTasks,
        clearTasks,
        handlePostTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider
