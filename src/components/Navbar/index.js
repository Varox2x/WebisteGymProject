import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn} from './NavbarElements'
import {useAuth} from "../../context/AuthContext";

const Navbar = ({toggle}) => {

    const [mobileInconColor, setmobileInconColor] = useState("#fff");
    const {currentUser} = useAuth();

        document.addEventListener('scroll', function (e) {
            if (window.scrollY >= 800){
                setmobileInconColor("black");
            }
            if (window.scrollY < 800){
                setmobileInconColor("#fff");
            }
            if (window.scrollY >= 2950){
                setmobileInconColor("#fff");
            }
        })



  return (
      <>
          <Nav>
              <NavbarContainer>
                <NavLogo to='/'>Logo</NavLogo>
                  <MobileIcon color={mobileInconColor} onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='oplikacji' smooth={true} spy={true} offset={-50}  duration={500}>O aplikacji</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='Progres' smooth={true} spy={true} offset={-50}  duration={500}>Progres</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='howitworks' smooth={true} spy={true} offset={-50}  duration={500}>how it works</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/strefauzytkownika'>{"Strefa Użytkownika"}</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
      </>
  )
}


export default Navbar;