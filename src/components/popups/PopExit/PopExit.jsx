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
import { SOverlay } from '../../Header/Header.styled'
import { useContext } from 'react'
import { AuthContext, TasksContext } from '../../../context/ContextApi'

const PopExit = () => {
  const { handleLogout } = useContext(AuthContext)
  const { clearTasks } = useContext(TasksContext)
  const navigate = useNavigate()

  return (
    <SOverlay onClick={() => navigate('/')}>
      <SPopExit>
        <SContainer>
          <SBlock onClick={(e) => e.stopPropagation()}>
            <STitle>
              <h2>Выйти из аккаунта?</h2>
            </STitle>
            <form id="formExit" action="#">
              <SForm>
                <SButtonYes
                  onClick={(e) => {
                    handleLogout(e)
                    clearTasks()
                  }}
                >
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
    </SOverlay>
  )
}

export default PopExit
