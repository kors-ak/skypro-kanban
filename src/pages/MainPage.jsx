import styled from 'styled-components'
import { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import Main from '../components/Main/Main.jsx'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse.jsx'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard.jsx'
import PopExit from '../components/popups/PopExit/PopExit.jsx'

const SPage = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`

function MainPage({ loading }) {
  const [showPopUser, setShowPopUser] = useState(false)
  const [showPopExit, setShowPopExit] = useState(false)
  const [showPopNewCard, setShowPopNewCard] = useState(false)
  const [showPopBrowse, setShowPopBrowse] = useState({
    isOpen: false,
    card: null,
  })

  return (
    <>
      <SPage>
        <Header
          showPopUser={showPopUser}
          setShowPopUser={setShowPopUser}
          showPopExit={showPopExit}
          setShowPopExit={setShowPopExit}
          showPopNewCard={showPopNewCard}
          setShowPopNewCard={setShowPopNewCard}
        />

        <Main loading={loading} setShowPopBrowse={setShowPopBrowse} />

        <PopExit showPopExit={showPopExit} />

        <PopNewCard
          showPopNewCard={showPopNewCard}
          setShowPopNewCard={setShowPopNewCard}
        />

        <PopBrowse
          showPopBrowse={showPopBrowse}
          setShowPopBrowse={setShowPopBrowse}
        />
      </SPage>
    </>
  )
}

export default MainPage
