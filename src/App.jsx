import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard";
import PopExit from "./components/popups/PopExit";

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
   <div className="wrapper">
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
   </div>

   <script src="js/script.js"></script>
  </>
 );
}

export default App;
