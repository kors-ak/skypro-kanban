import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(234, 238, 246);
`
const SHeader = styled.header`
  background-color: rgb(255, 255, 255);
`
const SLogo = styled.div`
  height: 70px;
  max-width: 1260px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 40px;

  img {
    width: 85px;
  }

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
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
    color: rgb(47, 53, 66);
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
  return (
    <SPage>
      <SHeader>
        <SLogo>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </SLogo>
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
