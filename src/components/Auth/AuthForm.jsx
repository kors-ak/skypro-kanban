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

const AuthForm = ({ IsSignUp }) => {
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
              <SButton id="btnEnter">
                {IsSignUp ? 'Зарегистрироваться' : 'Войти'}
              </SButton>

              {IsSignUp ? (
                <SFooter>
                  <p>
                    Уже есть аккаунт? <a href="/sign-in">Войдите здесь</a>
                  </p>
                </SFooter>
              ) : (
                <SFooter>
                  <p>Нужно зарегистрироваться?</p>
                  <a href="/sign-up">Регистрируйтесь здесь</a>
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
