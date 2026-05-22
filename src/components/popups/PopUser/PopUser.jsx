import { Link } from 'react-router-dom'
import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled'

const PopUser = () => {
  return (
    <SPopUser id="user-set-target">
      <SName>Ivan Ivanov</SName>
      <SMail>ivan.ivanov@gmail.com</SMail>
      <STheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </STheme>
      <SButton>
        <Link to="/exit">Выйти</Link>
      </SButton>
    </SPopUser>
  )
}

export default PopUser
