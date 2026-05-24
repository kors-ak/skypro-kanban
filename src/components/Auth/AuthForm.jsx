import { Link, useNavigate } from 'react-router-dom'
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
} from './AuthForm.Styled'

const AuthForm = ({ IsSignUp, setIsAuth }) => {
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuth(true)
    navigate('/')
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
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <SInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SInput
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <SButton onClick={handleLogin}>
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
