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
import { AuthContext } from '../../context/ContextApi.js'

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { user } = useContext(AuthContext)

  return (
    <SHeader>
      <SContainer>
        <SBlock>
          <SLogo $isVisible>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </SLogo>
          <SLogo>
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </SLogo>
          <SNav>
            <SButton id="btnMainNew">
              <Link to="/task/add">Создать новую задачу</Link>
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
