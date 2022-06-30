import styled from "styled-components";


export const Container = styled.div`
  max-width: 1200px;
  height: ${(props) => props.height};
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 100%;
  //display: flex;
  position: relative;
  @media screen and (min-width: 769px){
    padding-left: 60px;
  }
`


export const Navigation = styled.nav`
  width: 100%;
  height: 80px;
  background: #000;
  z-index: 20;
  position: absolute;
  top: 0;
`

export const NavigationContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  z-index: 20;

`



export const Logo = styled.h2`
  font-size: 25px;
  color: white;
  font-weight: bold;
`

export const UserName = styled.h2`
  font-size: 25px;
  color: white;
  font-weight: bold;

`

export const Menu = styled.div`
  width: 80px;
  position: absolute;
  z-index: 10;
  transition: all 600ms ease-out;
  background: #3A3F44;
  @media screen and (min-width: 769px){
    &:hover{
      width: 240px;
    }
    height: 100%;
    left: 0;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
    opacity: 94%;
    position: fixed;
    z-index: 555;
    margin-top: -80px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 4;
  position: relative;
  @media screen and (min-width: 769px){
    //margin-left: 60px;
    //margin-right: 60px;
  }
  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(${props => props.blur? "10px" : "0"});
    transition: all 600ms ease;
    z-index: ${props => props.blur? "20" : "5"};
  }
`

export const MobileMenuIcon = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  top: 112px;
  right: 42px;
  z-index: 888;
  font-size: 2rem;
  color: #cccccc;
`
export const BackGround = styled.div`
  position: fixed;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  top: 0;
  @media screen and (min-width: 769px){
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  z-index: 0;
  background: #b3d4fc;
  &:after{
    transition: all 600ms ease;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2A2A2A;
    z-index: 3;
    opacity: 80%;
  }
`

export const BackGroundVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: relative;
  z-index: 1;
`



