import { Link, useNavigate } from 'react-router-dom'
import { signUp, signIn } from '../../services/auth'
import { useState } from 'react'
import {
  SAuth,
  SBlock,
  SButton,
  SContainer,
  SFooter,
  SForm,
  SInput,
  SModal,
  STitle,
  SErrorP,
} from './AuthForm.Styled'
import { sanitizeInput } from '../../utils'

const AuthForm = ({ IsSignUp, setUser }) => {
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

  const validateForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
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
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error)

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

  return (
    <SAuth>
      <SContainer>
        <SModal>
          <SBlock>
            <STitle>
              <h2>{IsSignUp ? 'Регистрация' : 'Вход'}</h2>
            </STitle>

            <SForm disabled={loading}>
              {IsSignUp && (
                <SInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя"
                  onChange={handleChange}
                  value={formData.name}
                  $error={errors.name}
                />
              )}
              <SInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                onChange={handleChange}
                value={formData.login}
                $error={errors.login}
              />
              <SInput
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={handleChange}
                value={formData.password}
                $error={errors.password}
              />
              <SErrorP>{error}</SErrorP>
              <SButton disabled={!!error || loading} onClick={handleSubmit}>
                {IsSignUp ? 'Зарегистрироваться' : 'Войти'}
              </SButton>

              {IsSignUp ? (
                <SFooter>
                  <p>
                    Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                  </p>
                </SFooter>
              ) : (
                <SFooter>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </SFooter>
              )}
            </SForm>
          </SBlock>
        </SModal>
      </SContainer>
    </SAuth>
  )
}

export default AuthForm
