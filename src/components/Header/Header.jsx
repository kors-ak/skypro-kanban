import {
  SBlock,
  SButton,
  SContainer,
  SHeader,
  SLogo,
  SNav,
  SUser,
} from './Header.styled'
import { Link } from 'react-router-dom'

const Header = () => {
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
              <Link to="/card/add">Создать новую задачу</Link>
            </SButton>
            <SUser>
              <Link to="/user">Ivan Ivanov</Link>
            </SUser>
          </SNav>
        </SBlock>
      </SContainer>
    </SHeader>
  )
}

export default Header
