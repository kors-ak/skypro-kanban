import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import styled from "styled-components";
import GlobalStyles from "./globalStyles.js";

const SApp = styled.div`
 max-width: 100%;
 width: 100vw;
 min-height: 100vh;
 overflow: hidden;
 background-color: #f1f1f1;
`;

function App() {
 const [loading, setLoading] = useState(true);
 const [showPopUser, setShowPopUser] = useState(false);
 const [showPopExit, setShowPopExit] = useState(false);
 const [showPopNewCard, setShowPopNewCard] = useState(false);

 useEffect(() => {
  setTimeout(() => {
   setLoading(false);
  }, 2000);
 }, []);

 return (
  <>
   <GlobalStyles />
   <SApp>
    <Header
     showPopUser={showPopUser}
     setShowPopUser={setShowPopUser}
     showPopExit={showPopExit}
     setShowPopExit={setShowPopExit}
     showPopNewCard={showPopNewCard}
     setShowPopNewCard={setShowPopNewCard}
    />

    <Main loading={loading} />

    <PopExit showPopExit={showPopExit} />

    <PopNewCard
     showPopNewCard={showPopNewCard}
     setShowPopNewCard={setShowPopNewCard}
    />

    <PopBrowse />
   </SApp>

   <script src="js/script.js"></script>
  </>
 );
}

export default App;
