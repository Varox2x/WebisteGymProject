import styled from "styled-components";
import {BsArrowDownUp} from "react-icons/bs"
import {AiOutlineArrowDown} from "react-icons/ai"
import {AiOutlineArrowUp} from "react-icons/ai"



export const Container = styled.div`
  border: 2px solid #0980FF;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(212,228,255,1) 0%);
  border-radius: 20px;
  padding-top: 7px;
  @import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');
  font-family: 'Gantari', sans-serif;
`

export const TopWrap = styled.div`
  margin: auto;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`
export const TopWrapButton = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  width: 10%;
`

export const ExerciseName = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`

export const WrapperInfo = styled.div`
    height: 85%;
    width: 95%;
    margin: auto;
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const InfoInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  height: 33%;
`

export const InputTitle = styled.h3`
    width: 30%;
`

export const TrainingExerciseInput = styled.input`
    display: block;
    height: 38%;
    width: 20%;
  border-radius: 8px;
  border: none;
  text-align: center;
  &:focus{
    border: 2px solid black;
  }
`

export  const SwitchOrderButton = styled.button`
    height: 38px;
    position: absolute;
    top: -9px;
  background: transparent;
  z-index: 2;
  border: none;
`

export  const UpIcon = styled(AiOutlineArrowDown)`
  position: absolute;
  top: 0;
  right: 20%;
  font-size: 20px;
  z-index: 0;
`

export  const DownIcon = styled(AiOutlineArrowUp)`
  position: absolute;
  top: 0;
  left: 20%;
  font-size: 20px;
  z-index: 0;
`

export  const ChangePositionIcon = styled(AiOutlineArrowUp)`
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 20px;
`

