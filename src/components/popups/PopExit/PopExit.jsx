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
                  <a href="/sign-in">Да, выйти</a>{' '}
                </SButtonYes>
                <SButtonNo id="exitNo">
                  <a href="/">Нет, остаться</a>{' '}
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
