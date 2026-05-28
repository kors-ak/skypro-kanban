import { Link, useNavigate } from 'react-router-dom'
import {
  SBlock,
  SButtonNo,
  SButtonYes,
  SContainer,
  SForm,
  SPopExit,
  STitle,
} from './PopExit.styled'

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate()

  function handleLogout(e) {
    e.preventDefault()
    localStorage.clear()
    setIsAuth(false)
    navigate('/sign-in')
  }

  return (
    <SPopExit id="popExit">
      <SContainer>
        <SBlock>
          <STitle>
            <h2>Выйти из аккаунта?</h2>
          </STitle>
          <form id="formExit" action="#">
            <SForm>
              <SButtonYes onClick={handleLogout}>
                <Link to="/sign-in">Да, выйти</Link>
              </SButtonYes>
              <SButtonNo>
                <Link to="/">Нет, остаться</Link>
              </SButtonNo>
            </SForm>
          </form>
        </SBlock>
      </SContainer>
    </SPopExit>
  )
}

export default PopExit
