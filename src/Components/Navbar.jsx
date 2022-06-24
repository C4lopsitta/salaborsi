import "./Stylesheets/Navbar.css"
import { AccountCircleRounded, SettingsRounded, CloseRounded, HomeRounded, DescriptionRounded, SchoolRounded, EditRounded, SearchRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { deviceType, isDeveloping, currentPos as pageCode, wait, stringSanitizer } from "../LibUseful";

const Navbar = () => {
   //* ///////////////////////////
   //* Functions and states     //
   //* ///////////////////////////

   const currentPos = pageCode();
   const [isOpen, toggleState] = useState(false);
	const [navStatus, setNavStatus] = useState(0); //0 no class, 1 fix, 2 scroll, 3 mobile, 4 mobile on scroll, 5 mobile w/ search, 6 mobile search close animation
   const title = "PAGENAME";

   const toggleUserPopup = () => {
		switch(isOpen){
			case true:
				toggleState(false);
				if(window.scrollY == 0){setNavStatus(0)} else {setNavStatus(2)}
				break;
			case false:
				toggleState(true);
				if(window.scrollY == 0){setNavStatus(1)} else {setNavStatus(1)}
				break;
			default:
				toggleState(false);
				break;
		}
	}

   const navStatusHandler = (event) => {
		if(isOpen === true){
			if(window.scrollY === 0){
				setNavStatus(1);
			}else{
				setNavStatus(1);
			}
		} else {
			if(window.scrollY === 0){
				setNavStatus(0);
			}else{
				setNavStatus(2);
			}
		}
	}

   useEffect(() => {
      window.addEventListener("scroll", (e) => navStatusHandler(e));
      if(deviceType().isMobile) setNavStatus(3);
      return  () => {
         window.removeEventListener("scroll", (e) => navStatusHandler(e));
   };}, []);

   const goto = {
      home: () => window.location.pathname = "/",
      pr: () => window.location.pathname = "/proiezione",
      cira: () => window.location.pathname = "/rassegna",
      adp: () => window.location.pathname = "/admin",
      loc: () => window.location.pathname = "/info"
   }
   //* ///////////////////////////
   //* JSX                      //
   //* ///////////////////////////

   return (
      <>
         
			{deviceType().isMobile ? 
               <>
               <nav className={navStatus===5 ? "navSearchBar navMobile" : "navMobile"}>
                  <span aria-label="Home" className={navStatus === 5 ? "hidden" : navStatus === 6 ? "navIcon navIconFade" : currentPos===0 ? "navIcon navCurrentPos" : "navIcon"} onClick={goto.home}>
                     <HomeRounded />
                     <small>Home</small>
                  </span>

                  <span aria-label="Lezioni" className={navStatus === 5 ? "hidden" : navStatus === 6 ? "navIcon navIconFade" : currentPos===1 ? "navIcon navCurrentPos" :  "navIcon"} onClick={goto.pr}>
                     <SchoolRounded />
                     <small>In proiezione</small>
                  </span>

                  <span aria-label="Esercizi" className={navStatus === 5 ? "hidden" : navStatus === 6 ? "navIcon navIconFade" : currentPos===2 ? "navIcon navCurrentPos" :  "navIcon"} onClick={goto.cira}>
                  <EditRounded />
                     <small>Rassegna</small>
                  </span>
                  
                  <span aria-label="Opzioni - Impostazioni - Account" className={navStatus === 5 ? "hidden" : navStatus === 6 ? "navIcon navIconFade" : currentPos===3 ? "navIcon navCurrentPos" : "navIcon"} onClick={goto.loc}>
                     <SettingsRounded />
                     <small>Informazioni</small>
                  </span>
               </nav>
               </>
			:
               <><nav className={navStatus == 0 ? "" : navStatus == 1 ? "navFixed" : "navOnScroll"}>
                  <span className="navTitle">
                     {/* Add icon */}
                     <h2 className="nunito">{title}</h2>
                  </span>
                  <span className="navLinks">
                     <Link to="/">Home</Link>
                     <Link to="/proiezione">In proiezione</Link>
                     <Link to="/rassegna">Cine Rassegna</Link>
                     <Link to="/info">Informaizoni</Link>

                     <span onClick={toggleUserPopup}>
                        <AccountCircleRounded />
                     </span>
                  </span>
               </nav>
               <section className={isOpen ? "navbarPopups" : "hidden navbarPopupsAni"}>
                  <div className="userPopup">
                     {
                        isDeveloping && <div className="navDevMenu">
                           <h3>Development Menu</h3>
                           <a href="http://figma.com" target="_blank" rel="noopener noreferrer">Figma</a>
                        </div>
                     }
                  </div>
               </section>
               <span className={navStatus != 0 ? "navPlaceholder" : ""}></span></>
			}

			
		</>
   )
}

export default Navbar;