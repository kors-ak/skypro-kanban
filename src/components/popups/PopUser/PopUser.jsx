import { Link } from 'react-router-dom'
import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled'
import { useContext } from 'react'
import { AuthContext, ThemeContext } from '../../../context/ContextApi.js'

const PopUser = ({ setIsPopupOpen }) => {
  const { user } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <SPopUser onClick={(e) => e.stopPropagation()}>
      <SName>{user.name}</SName>
      <SMail>{user.login}</SMail>
      <STheme>
        <p>Темная тема</p>
        <input
          type="checkbox"
          name="checkbox"
          onChange={() => toggleTheme()}
          checked={theme.mode === 'dark'}
        />
      </STheme>
      <SButton onClick={() => setIsPopupOpen(false)}>
        <Link to="/exit">Выйти</Link>
      </SButton>
    </SPopUser>
  )
}

export default PopUser
