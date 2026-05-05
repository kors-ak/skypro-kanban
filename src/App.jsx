import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard";
import PopUser from "./components/popups/PopUser";

function App() {
 return (
  <>
   <div className="wrapper">
    <PopUser />
    <PopNewCard />
    <PopBrowse />
    <Header />
    <Main />
   </div>

   <script src="js/script.js"></script>
  </>
 );
}

export default App;
