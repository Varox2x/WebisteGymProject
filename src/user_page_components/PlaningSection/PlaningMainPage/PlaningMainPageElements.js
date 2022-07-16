import styled from "styled-components";

import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"

import { keyframes } from 'styled-components'


const ColumnAnimation = keyframes`
 0% { opacity: 100% }
 25% { opacity: 100% }
 50% { opacity: 30%  }
 100% { opacity: 100% }
`


export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ColumnContainer= styled.div`
  display: block;
  @import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');
  font-family: 'Gantari', sans-serif;
  height: 30%;
  width: 100%;
  border-radius: 10px;
  position: relative;
  z-index: 8;
  overflow: hidden;
  @media screen and (max-width: 769px){
    overflow: scroll;
  }
  border-bottom: ${(props) => props.props? "0 solid black" : "3px solid black" };
  border-top : ${(props) => props.props? "3px solid black" : " 0 solid black" };
  background: rgba(145,178,206,0.5942752100840336);
  backdrop-filter: opacity(10%);
  animation-name: ${props => props.animation? ColumnAnimation : "none"};
  animation-duration: 300ms;
  animation-iteration-count: 1;
`

export const SingleBlockContainer = styled.div`
  height: 100%;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 20;
  background: white;
  transition: background 150ms ease-out;
  &:hover{
    background: #b3d4fc;
  }
`
export const SingleBlockContainerContent = styled.div`
    margin-top: 10px;
`

export const Glass = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 30px;
  z-index: 20;

`

export const EditColumnWrapper = styled.div`
  height: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid green;
  position: relative;
  display: ${(props) => props.display? "none" : "flex" };
`

export const EditColumnColumnsContainers = styled.div`
  width: 100%;
  border: 2px solid red;
  position: absolute;
  left: 0;
  right: 0;
`

export const EditColumnTitle = styled.div`
  font-size: 25px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: greenyellow;
`

export const EditExerciseArea = styled.div`
    height: 80%;
    width: 100%;
    border: 2px solid orange;
    position: relative;
    padding-left: 200px;
    padding-right: 100px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`



export const ViewListExercises = styled.ul`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 100px;
`

export const ListSingleElement = styled.li`
  height: 30%;
  width: 260px;
  background: #b3d4fc;
  border: 2px solid black;
  margin: auto;
  border-radius: 20px;
  display: flex;
  padding: 8px 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 2s ease;
  z-index: 9;
  cursor: pointer;
  position: relative;

  &:hover {
    background: lightpink;
  }
`

export const AddTreiningButton = styled.button`
  background: #91B2CE;
  margin: auto;
  z-index: 9;
  padding: 20px;
  border-radius: 20px;

`
export const AddExerciseButton = styled.button`
  background: #91B2CE;
  margin: auto;
  z-index: 9;
  padding: 20px;
  border-radius: 20px;
`

export const TreningSectionTitleButon = styled.button`
    background: #222222;
    padding: 10px;
  z-index: 9;
  color: white;
`

export const EditExerciseContainer = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
  border: 2px solid green;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const ButtonDisplayedOnAddTrening = styled.button`
    z-index: 25;
    position: absolute;
    bottom: 0;
    background: transparent;
    border: none;
`

export const ScrollRightButton = styled.button`
    position: absolute;
    z-index: 777;
    top: 40%;
    right: 0;
`

export const ScrollRightLeft = styled.button`
    position: absolute;
    z-index: 777;
    top: 40%;
    left: 0;
`
export const SingleBlockContainerTitle = styled.h4`
    font-size: 20px;
  margin-bottom: 5px;
`
export const SingleBlockContainerUnderTitle = styled.p`
    font-size: 14px;
  margin-bottom: 2px;
`

export const EditIcon = styled(AiFillEdit)`
  font-size: 30px;
  z-index: 0;
  position: absolute;
  bottom: 3px;
  right: 25%;

`
export const DeleteIcon = styled(AiFillDelete)`
  font-size: 30px;
  z-index: 0;
  position: absolute;
  bottom: 3px;
  left: 25%;
`

export const SingleBlockContainerAfter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &:after{
    content: "";
    position: absolute;
    right: 0;
    top: 30px;
    bottom: 30px;
    width: 3px;
    background: black;
  }
`




