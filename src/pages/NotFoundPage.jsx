import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../context/ContextApi'
import {
  SBlock,
  SContainer,
  SHeader,
  SLogo,
} from '../components/Header/Header.styled'

const SPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primaryBg};
`

const SContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  h1 {
    font-size: 160px;
    color: rgb(248, 77, 77);
    animation: bounce 1s ease-in-out infinite alternate;
  }

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.error404Text};
  }

  a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    color: rgb(255, 255, 255);
    background-color: rgb(86, 94, 239);
    border-radius: 5px;
  }

  a:hover {
    background-color: rgb(51, 57, 155);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
`

const NotFoundPage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <SPage>
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
          </SBlock>
        </SContainer>
      </SHeader>

      <SContent>
        <h1>404</h1>
        <p>
          Страница не найдена.
          <br />
          Возможно, вы ввели неправильный адрес.
        </p>
        <Link to="/">На главную</Link>
      </SContent>
    </SPage>
  )
}

export default NotFoundPage
