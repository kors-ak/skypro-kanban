import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sanitizeInput } from '../utils'
import { signIn, signUp } from '../services/auth'
import { AuthContext } from './ContextApi'

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  )

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    login: '',
    password: '',
  })

  const [error, setError] = useState('')

  const validateForm = (IsSignUp) => {
    const newErrors = { name: '', login: '', password: '' }
    let isValid = true
    const errorText = IsSignUp
      ? 'Введенные вами данные некорректны. Чтобы завершить регистрацию, заполните все поля в форме.'
      : 'Введенные вами данные некорректны. Чтобы войти, заполните все поля в форме.'

    if (IsSignUp && !formData.name.trim()) {
      newErrors.name = true
      setError(errorText)
      isValid = false
    }

    if (!formData.login.trim()) {
      newErrors.login = true
      setError(errorText)
      isValid = false
    }

    if (!formData.password.trim()) {
      newErrors.password = true
      setError(errorText)
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: sanitizeInput(value),
    })
    setErrors({ ...errors, [name]: false })
    setError('')
  }

  const clearForm = () => {
    setFormData({
      name: '',
      login: '',
      password: '',
    })
    setErrors({
      name: '',
      login: '',
      password: '',
    })
    setError('')
  }

  const handleSubmit = async (e, IsSignUp) => {
    e.preventDefault()
    if (!validateForm(IsSignUp)) {
      return
    }
    setLoading(true)

    try {
      const data = IsSignUp
        ? await signUp(formData)
        : await signIn({ login: formData.login, password: formData.password })

      if (data) {
        if (IsSignUp) {
          navigate('/sign-in')
        } else {
          localStorage.setItem('user', JSON.stringify(data))
          setUser(data)
          navigate('/')
        }

        clearForm()
      }
    } catch (error) {
      if (error.response.status === 400 && IsSignUp) {
        setError('Пользователь с таким логином уже существует.')
      } else if (error.response?.status === 400) {
        setError(
          'Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.',
        )
      } else {
        setError('Произошла непредвиденная ошибка. Попробуйте позже.')
      }

      !IsSignUp && setErrors({ login: true, password: true })
    } finally {
      setLoading(false)
    }
  }

  function handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('user')
    setUser(null)
    navigate('/sign-in')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleChange,
        formData,
        errors,
        error,
        handleSubmit,
        handleLogout,
        clearForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
