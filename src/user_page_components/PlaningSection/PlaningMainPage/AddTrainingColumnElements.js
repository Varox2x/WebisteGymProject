import styled from "styled-components";
import {IoIosAddCircle} from "react-icons/io"
import {AiFillFileAdd} from "react-icons/ai"
import {AiOutlineCloseCircle} from "react-icons/ai"

export const SendIcon = styled(IoIosAddCircle)`
  font-size: 20px;
`
export const SaveExerciseIcon = styled(AiFillFileAdd)`
  font-size: 45px;
  position: absolute;
  top: 4px;
  right: 4px;
`
export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 30px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
`

export const FirstInfoWrapper = styled.div`
  width: 450px;
  height: 300px;
  border: 2px solid black;
  position: relative;
  border-radius: 20px;
  background: rgba(145,178,206,0.6502976190476191);

`

export const TraningNameInput = styled.input`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: block;
    z-index: 999;
    height: 15%;
    text-align: center;
  border-radius: 10px;
  border: none;
  text-align: center;
  &:focus{
    border: 2px solid black;
  }
`
export const TraningDescriptionInput = styled.textarea`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: block;
    z-index: 999;
    height: 60%;
    text-align: center;
    padding: 5px;
  border-radius: 10px;
  border: none;
  text-align: center;
  &:focus{
    border: 2px solid black;
  }
`
export const FirstInfoButton = styled.button`
      position: absolute;
      top: 0;
      padding:  5px;
      background: transparent;
    width: 40px;
  border: none;
`

export const ExercisesSectionWrapper = styled.div`
      height: 90%;
      width: 80%;
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(130,209,254,0.2) 0%);
      position: relative;
      border: 3px solid black;
      border-radius: 20px;
`

export const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  z-index: 5;
  background: transparent;
  border: none;
`

export const Errorp = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`


