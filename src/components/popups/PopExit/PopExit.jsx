import { Link } from 'react-router-dom'
import {
  SBlock,
  SButtonNo,
  SButtonYes,
  SContainer,
  SForm,
  SPopExit,
  STitle,
} from './PopExit.styled'

const PopExit = ({ showPopExit }) => {
  return (
    showPopExit && (
      <SPopExit id="popExit">
        <SContainer>
          <SBlock>
            <STitle>
              <h2>Выйти из аккаунта?</h2>
            </STitle>
            <form id="formExit" action="#">
              <SForm>
                <SButtonYes id="exitYes">
                  <Link to="/sign-in">Да, выйти</Link>
                </SButtonYes>
                <SButtonNo id="exitNo">
                  <a href="/">Нет, остаться</a>
                </SButtonNo>
              </SForm>
            </form>
          </SBlock>
        </SContainer>
      </SPopExit>
    )
  )
}

export default PopExit
