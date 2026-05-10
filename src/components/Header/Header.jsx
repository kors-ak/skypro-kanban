import { useState } from "react";
import PopUser from "../popups/PopUser";

const Header = ({
 showPopExit,
 setShowPopExit,
 showPopNewCard,
 setShowPopNewCard,
}) => {
 const [showPopUser, setShowPopUser] = useState(false);

 return (
  <header className="header">
   <div className="container">
    <div className="header__block">
     <div className="header__logo _show _light">
      <a href="" target="_self">
       <img src="/images/logo.png" alt="logo" />
      </a>
     </div>
     <div className="header__logo _dark">
      <a href="" target="_self">
       <img src="/images/logo_dark.png" alt="logo" />
      </a>
     </div>
     <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
       <a
        href="#popNewCard"
        onClick={(e) => {
         e.preventDefault();
         setShowPopNewCard(!showPopNewCard);
        }}
       >
        Создать новую задачу
       </a>
      </button>
      <a
       href="#user-set-target"
       className="header__user _hover02"
       onClick={(e) => {
        e.preventDefault();
        setShowPopUser(!showPopUser);
       }}
      >
       Ivan Ivanov
      </a>

      <PopUser
       showPopUser={showPopUser}
       showPopExit={showPopExit}
       setShowPopExit={setShowPopExit}
      />
     </nav>
    </div>
   </div>
  </header>
 );
};

export default Header;
