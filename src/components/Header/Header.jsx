import { useState } from 'react'
import PopUser from '../popups/PopUser/PopUser.jsx'
import {
  SBlock,
  SButton,
  SContainer,
  SHeader,
  SLogo,
  SNav,
  SUser,
} from './Header.styled'

const Header = ({
  showPopExit,
  setShowPopExit,
  showPopNewCard,
  setShowPopNewCard,
}) => {
  const [showPopUser, setShowPopUser] = useState(false)

  return (
    <SHeader>
      <SContainer>
        <SBlock>
          <SLogo $isVisible>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </SLogo>
          <SLogo>
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </SLogo>
          <SNav>
            <SButton id="btnMainNew">
              <a
                href="#popNewCard"
                onClick={(e) => {
                  e.preventDefault()
                  setShowPopNewCard(!showPopNewCard)
                }}
              >
                Создать новую задачу
              </a>
            </SButton>
            <SUser
              href="#user-set-target"
              className="header__user _hover02"
              onClick={(e) => {
                e.preventDefault()
                setShowPopUser(!showPopUser)
              }}
            >
              Ivan Ivanov
            </SUser>

            <PopUser
              showPopUser={showPopUser}
              showPopExit={showPopExit}
              setShowPopExit={setShowPopExit}
            />
          </SNav>
        </SBlock>
      </SContainer>
    </SHeader>
  )
}

export default Header
