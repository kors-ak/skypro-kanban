import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled'

const PopUser = ({ showPopUser, showPopExit, setShowPopExit }) => {
  return (
    showPopUser && (
      <SPopUser id="user-set-target">
        <SName>Ivan Ivanov</SName>
        <SMail>ivan.ivanov@gmail.com</SMail>
        <STheme>
          <p>Темная тема</p>
          <input type="checkbox" name="checkbox" />
        </STheme>
        <SButton>
          <a
            href="#popExit"
            onClick={(e) => {
              e.preventDefault()
              setShowPopExit(!showPopExit)
            }}
          >
            Выйти
          </a>
        </SButton>
      </SPopUser>
    )
  )
}

export default PopUser
