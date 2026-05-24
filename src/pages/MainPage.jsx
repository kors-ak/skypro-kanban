import styled from 'styled-components'
import Header from '../components/Header/Header.jsx'
import Main from '../components/Main/Main.jsx'
import { Outlet } from 'react-router-dom'

const SPage = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`

function MainPage({ loading }) {
  return (
    <>
      <SPage>
        <Header />
        <Main loading={loading} />

        <Outlet />
      </SPage>
    </>
  )
}

export default MainPage
