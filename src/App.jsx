import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard";
import PopExit from "./components/popups/PopExit";

function App() {
 const [showPopUser, setShowPopUser] = useState(false);
 const [showPopExit, setShowPopExit] = useState(false);

 return (
  <>
   <div className="wrapper">
    <Header
     showPopUser={showPopUser}
     setShowPopUser={setShowPopUser}
     showPopExit={showPopExit}
     setShowPopExit={setShowPopExit}
    />
    <Main />

    <PopExit showPopExit={showPopExit} />

    <PopNewCard />
    <PopBrowse />
   </div>

   <script src="js/script.js"></script>
  </>
 );
}

export default App;
