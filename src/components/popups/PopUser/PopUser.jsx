import { Link } from 'react-router-dom'
import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled'
import { sanitizeHtml } from '../../../utils.js'
import { useContext } from 'react'
import { AuthContext } from '../../../context/ContextApi.js'

const PopUser = () => {
  const { user } = useContext(AuthContext)

  return (
    <SPopUser onClick={(e) => e.stopPropagation()}>
      <SName>{sanitizeHtml(user.name)}</SName>
      <SMail>{sanitizeHtml(user.login)}</SMail>
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
