import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/ContextApi'
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

const AuthForm = ({ IsSignUp }) => {
  const {
    loading,
    handleChange,
    formData,
    errors,
    error,
    handleSubmit,
    clearForm,
  } = useContext(AuthContext)

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
                  onChange={(e) => handleChange(e)}
                  value={formData.name}
                  $error={errors.name}
                />
              )}
              <SInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                onChange={(e) => handleChange(e)}
                value={formData.login}
                $error={errors.login}
              />
              <SInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={(e) => handleChange(e)}
                value={formData.password}
                $error={errors.password}
              />
              <SErrorP>{error}</SErrorP>
              <SButton
                disabled={!!error || loading}
                onClick={(e) => handleSubmit(e, IsSignUp)}
              >
                {IsSignUp ? 'Зарегистрироваться' : 'Войти'}
              </SButton>

              {IsSignUp ? (
                <SFooter>
                  <p>
                    Уже есть аккаунт?{' '}
                    <Link onClick={clearForm} to="/sign-in">
                      Войдите здесь
                    </Link>
                  </p>
                </SFooter>
              ) : (
                <SFooter>
                  <p>Нужно зарегистрироваться?</p>
                  <Link onClick={clearForm} to="/sign-up">
                    Регистрируйтесь здесь
                  </Link>
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
