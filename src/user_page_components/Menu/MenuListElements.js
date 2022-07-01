import styled from "styled-components";
import {FaTimes} from "react-icons/fa";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 11;
  box-shadow: 38px 0px 79px -11px rgba(66, 68, 90, 1);
  position: relative;
`

export const MenuContainers = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

`

export const SingleTitle = styled.p`
  @media screen and (min-width: 769px){
    position: absolute;
  }
  left: 80px;
  color: white;
  height:  100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  transition: all 1s ease-out;
`

export const MenuListElement = styled.li`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  //margin-top: ${props => (props.isTitle ? "20px" : "20px")};
  height:  ${props => (props.isTitle ? "80px" : "80px")};
  box-sizing: border-box;
  transition: all 450ms ease-out;
  cursor: pointer;
  @media screen and (max-width: 768px){
    justify-content: center;
  }
  &:after{
    position: absolute;
    content: "";
    bottom: 0;
    left: 10px;
    //width: 60px;
    width: 95%;
    @media screen and (min-width: 769px){
      width: ${props => (props.display ? "200px" : "60px")};
    }
    height: 3px;
    background: white;
    transition: all 500ms ease-in-out;
  }
  &:hover{
    background: #7FBADF;
  }
`

export const MenuListElementA = styled.a`
  display: flex;
  width: 80px;
  height: 100%;
  border-radius: 20px;
  text-decoration: none;
`

export const Search = styled.li`
  height: 160px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
`

export const SearchIcon = styled.div`
  width: 80px;
  height: 80px;
`
export const InputContainerSearch = styled.div`
  height: 80px;
  position: absolute;
  left: 40px;
  top: 80px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

`

export const SearschTitle = styled.p`
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 80px;
  right: 0;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: 25px;
`

export const CloseMenu = styled.div`
    width: 50px;
    height: 50px;
  align-self: flex-end;
  margin-right: 40px;
  margin-top: 30px;
  z-index: 666;
  font-size: 2rem;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;


export const InputSearch = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 7px;
  border: none;
  &:focus{
    border: 2px solid #85BAFF;
  }
`
