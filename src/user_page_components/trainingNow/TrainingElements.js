import styled, {keyframes} from "styled-components";
import {MdDoneOutline} from "react-icons/md"
import {AiOutlineFileDone} from "react-icons/ai"
import {MdOutlineDownloadDone} from "react-icons/md"


const nextSeries = keyframes`
 0% {opacity: 40%}
 50% {opacity: 100%}
 100% {opacity: 40%}
`
const clock = keyframes`
 0% {opacity: 100%}
 50% {opacity: 0}
 100% {opacity: 100%}
`

export const Container = styled.div`
    width: 100%;
    //height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 769px){
    max-height: 100%;
  }
  
`

export const ExerciseList = styled.ul`
    width: 100%;
  background: #85BAFF;
  border: 2px solid #85BAFF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  opacity: 90%;
`
export const SingleExerciseElement = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.props ? "50px" : "0"};
    margin-bottom: ${props => props.props ? "50px" : "0"};
    opacity: 100%;
    position: relative;
  //border-bottom: 2px solid #9EBCD5;
  border-bottom: ${props => props.end ? "2px solid #9EBCD5" : "0 solid #9EBCD5"};
  padding-top: 15px;
  padding-bottom: 15px;
`
export const SingleExerciseElementDoneIcon = styled(MdOutlineDownloadDone)`
  position: absolute;
  right: 10%;
  top: 32%;
  font-size: 2rem;
`
export const SingleExerciseElementButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0%;
`

export const Excersisename = styled.p `
    height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 25px;
  font-weight: ${props => props.props ? "bold" : "normal"};
`
export const SingleExerciseInfoWrapper = styled.div `
  width: 100%;
  //height: 100%;
`

export const SingleSeries = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 20;
  background: ${props => props.primary ? "white" : "#728EA5"};
  opacity:  ${props => props.primary ? "50%" : "100%"};
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  animation-name: ${props => props.animation ? nextSeries : null};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  &:after{
    content: "";
    position: absolute;
    bottom: -1px;
    left: 10px;
    right: 10px;
    height: 3px;
    background: #858585;
    display: ${props => props.last ? "none" : "block"};
  }
`

export const SeriesInputWrapper = styled.div`
  height: 60px;
  width: 33%;
  //padding: 5px 10px;
  max-height: 85px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:after{
    position: absolute;
    content: "";
    bottom: 10px;
    top: 10px;
    right: 0;
    background: #858585;
    width: 2px;
  }
`

export const SeriesInput = styled.input`
  height: 100%;
  display: block;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  width: 20%;
  background: #85BAFF;
  padding-left: 2px;
  &:focus{
    border: 2px solid white;
  }
`

export const SeriesInputTitle = styled.p`
  display: block;
  text-align: center;
`

export const Timer = styled.p`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  text-align: center;
  font-size: 80px;
  animation-name: ${props => props.animation ? clock : null};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`

export const ButtonBackground = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`

export const ExcersiseDoneButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`

export const DoneIcon = styled(MdDoneOutline)`
    font-size: ${props => props.props ? "2.5rem" : "1.7rem"};
  font-weight: bold;
`
export const LastElementContentWrapper = styled.div`
    width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SaveAndCloseTraining = styled.div`
    width: 40px;
  height: 40px;
`
export const CloseTrainingIcon = styled(AiOutlineFileDone)`
   font-size: 2.5rem;
`
export const CloseTrainingTitle = styled.p`
   font-size: 20px;
`



