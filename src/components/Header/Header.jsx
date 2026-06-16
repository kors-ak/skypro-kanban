import {
  SBlock,
  SButton,
  SContainer,
  SHeader,
  SLogo,
  SNav,
  SUser,
  SOverlay,
} from './Header.styled'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import PopUser from '../popups/PopUser/PopUser.jsx'
import {
  AuthContext,
  TasksContext,
  ThemeContext,
} from '../../context/ContextApi.js'

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { setTask, setErrors } = useContext(TasksContext)
  const { theme } = useContext(ThemeContext)

  return (
    <SHeader>
      <SContainer>
        <SBlock>
          <SLogo $isVisible={theme.mode === 'light'}>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </SLogo>
          <SLogo $isVisible={theme.mode === 'dark'}>
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </SLogo>
          <SNav>
            <SButton id="btnMainNew">
              <Link
                to="/task/add"
                onClick={() => {
                  setTask({
                    title: '',
                    description: '',
                    topic: '',
                    date: '',
                  })
                  setErrors({
                    title: '',
                    description: '',
                    topic: '',
                    date: '',
                  })
                }}
              >
                Создать новую задачу
              </Link>
            </SButton>
            <SUser onClick={() => setIsPopupOpen(true)} role="button">
              <p>{user.name}</p>
            </SUser>
            {isPopupOpen && (
              <PopUser
                setIsPopupOpen={setIsPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            )}
          </SNav>
        </SBlock>
      </SContainer>
      {isPopupOpen && <SOverlay onClick={() => setIsPopupOpen(false)} />}
    </SHeader>
  )
}

export default Header
