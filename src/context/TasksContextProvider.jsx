import { useContext, useState } from 'react'
import { AuthContext, TasksContext } from './ContextApi'
import { deleteTask, editTask, fetchTasks, postTask } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

  const [task, setTask] = useState({
    title: '',
    description: '',
    topic: '',
    date: '',
  })

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    topic: '',
    date: '',
  })

  const validateForm = () => {
    const newErrors = { title: '', description: '', topic: '', date: '' }
    let isValid = true

    if (!task.title.trim()) {
      newErrors.title = true
      isValid = false
    }

    if (!task.description.trim()) {
      newErrors.description = true
      isValid = false
    }

    if (!task.topic) {
      newErrors.topic = true
      isValid = false
    }

    if (!task.date) {
      newErrors.date = true
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handlePostTask = async (e, task) => {
    e.preventDefault()
    if (posting) return
    setPosting(true)

    if (!validateForm()) {
      toast('Все поля должны быть заполнены')
      setPosting(false)
      return
    }

    try {
      e.preventDefault()
      setPosting(true)
      const updatedTasks = await postTask({ token: user.token, task: task })
      if (updatedTasks) {
        setTasks(updatedTasks.data.tasks)
        navigate('/')

        return
      }
    } catch {
      toast.error('Произошла непредвиденная ошибка. Попробуйте позже.')
    } finally {
      setPosting(false)
    }
  }

  const handleDeleteTask = async (e, id, setError) => {
    e.preventDefault()

    try {
      const updatedTasks = await deleteTask({ token: user.token, id: id })
      setTasks(updatedTasks.data.tasks)
      setTask({
        title: '',
        description: '',
        topic: '',
        date: '',
      })
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

  const handleEditTask = async (e, id, task) => {
    try {
      e.preventDefault()
      setPosting(true)
      const updatedTasks = await editTask({
        token: user.token,
        id: id,
        task: task,
      })
      if (updatedTasks) {
        setTasks(updatedTasks.data.tasks)
        navigate('/task/' + id)

        setErrors({
          title: '',
          description: '',
          topic: '',
          date: '',
        })
      }
    } catch {
      toast.error('Произошла непредвиденная ошибка. Попробуйте позже.')
    } finally {
      setPosting(false)
    }
  }

  const moveTask = async (taskId, newStatus) => {
    const currentTask = tasks.find((task) => task._id === taskId)

    if (!currentTask) return

    const updatedTask = {
      ...currentTask,
      status: newStatus,
    }

    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task,
      ),
    )

    try {
      await editTask({
        token: user.token,
        id: taskId,
        task: updatedTask,
      })
    } catch {
      setTasks(tasks)
      toast.error(
        'Что-то пошло не так, попробуйте изменить статус задачи через редактирование карточки',
      )
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        posting,
        loadingErr,
        task,
        setTask,
        getTasks,
        clearTasks,
        handlePostTask,
        handleDeleteTask,
        handleEditTask,
        validateForm,
        errors,
        setErrors,
        moveTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider
