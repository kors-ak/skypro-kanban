import styled from 'styled-components'
import Header from '../components/Header/Header.jsx'
import Main from '../components/Main/Main.jsx'
import { Outlet } from 'react-router-dom'

const SPage = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: rgb(234, 238, 246);
`

function MainPage() {
  return (
    <>
      <SPage>
        <Header />
        <Main />
        <Outlet />
      </SPage>
    </>
  )
}

export default MainPage
