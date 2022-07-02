import styled from "styled-components";
import BackgroundPhoto from '../../images/trainingnowbackground.jpg'
import { keyframes } from 'styled-components'

const afterAnimation = keyframes`
 0% { left: 0; right: 0; opacity: 0}
 10% { left: 50%; right: 50%; opacity: 80%}
 100% { left: 30px; right: 30px; opacity: 100%}
`

export const Container = styled.div`
    width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  //border: 2px solid red;
  background: #b3d4fc;
  @media screen and (min-width: 769px){
    height: 100%;
  }
`

export const Wrapper = styled.div`
    width: 100%;
  max-width: 900px;
    //background: blue;
  padding: 20px 15px;
  z-index: 20;
  @media screen and (min-width: 769px){
    min-height: 5%;
    max-height: 100%;
    overflow-y: scroll;
  }
`

export const TrainingList = styled.ul`
  border: 2px solid #85BAFF;
  width: 100%;
  background: #858585;
  border-radius: 20px;
  z-index: 20;
  opacity: 85%;
  min-height: 100px;
  height: 100%;
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 20px;
`
export const TrainingListElement = styled.li`
    width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: relative;
  height: 60px;
  &:after{
    content: "";
    position: absolute;
    height: 3px;
    background: black;
    bottom: 0;
    left: 25px;
    right: 25px;
    display: ${props => props.props ? 'none' : 'block'};
    animation-name: ${afterAnimation};
    animation-duration: 1200ms;
    animation-iteration-count: 1;
    }
`

export const BackGround = styled.div`
  position: fixed;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
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

export const NotrainingsParagraph = styled.p`
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
`


export const NotrainingsWrapper = styled.li`
    display: flex;
  width: 90%;
  margin: auto;
  height: 100px;
  justify-content: center;
  align-items: center;
`
