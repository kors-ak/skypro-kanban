import { Link } from 'react-router-dom'
import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled'

const PopUser = ({ user }) => {
  return (
    <SPopUser onClick={(e) => e.stopPropagation()}>
      <SName>{user.name}</SName>
      <SMail>{user.login}</SMail>
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
