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
import { updateToken, user } from '../../services/api'

const AuthForm = ({ IsSignUp, setIsAuth }) => {
  const navigate = useNavigate()

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
      [name]: value,
    })
    setErrors({ ...errors, [name]: false })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const data = IsSignUp
        ? await signUp(formData)
        : await signIn({ login: formData.login, password: formData.password })

      if (data) {
        setIsAuth(true)
        localStorage.setItem('user', JSON.stringify(data))
        updateToken(user.token)
        navigate('/')
      }
    } catch (error) {
      setError(
        error && IsSignUp
          ? 'Введенные вами данные некорректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.'
          : 'Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.',
      )

      !IsSignUp && setErrors({ login: true, password: true })
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

            <SForm>
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
              <SButton disabled={!!error} onClick={handleSubmit}>
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
