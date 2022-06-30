import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
import {mobileBreakpoint} from "../../settings/settings";
import {maxWidthContainer} from "../../settings/settings";

export const Nav = styled.nav `
  background: #000;
  @media screen and (max-width: 768px) {
    background: transparent;
    //background: rgba(0, 0, 0, 0.5);
    margin-top: -80px;
  }
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.nav `
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: ${maxWidthContainer};
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: ${(props) => props.color};
  @media screen and (min-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  @media screen and (min-width: ${mobileBreakpoint}) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #6BD1F7;
  }
`;

export const NavBtn = styled.nav`
  display: none;
  @media screen and (min-width: ${mobileBreakpoint}) {
    display: flex;
    align-items: center;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #6BD1F7;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`