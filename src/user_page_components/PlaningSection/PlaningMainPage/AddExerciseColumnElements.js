import styled from "styled-components";

import {IoIosAddCircle} from "react-icons/io"
import {AiFillFileAdd} from "react-icons/ai"
import {AiOutlineCloseCircle} from "react-icons/ai"


export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const SendIcon = styled(IoIosAddCircle)`
  font-size: 20px;
`
export const SaveExerciseIcon = styled(AiFillFileAdd)`
  font-size: 30px;
`
export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 30px;
`

export const Wrapper = styled.div`
  background: rgba(145,178,206,0.6502976190476191);

  width: 400px;
  //height: 400px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 10px;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  border-radius: 20px;
`

export const InfoGetWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 20px;
  padding-top: 20px;
  &:after{
    position: absolute;
    content: "";
    bottom: 0;
    height: 2px;
    right: 35%;
    left: 35%;
    background: black;
  }
`

export const    InfoInputName= styled.h2`
  margin: auto;
  margin-bottom: 10px;
  font-size: 20px;
`

export const InfoInput = styled.input`
  display: inline-block;
  z-index: 10;
  width: 60%;
  margin: auto;
  border-radius: 10px;
  border: none;
  text-align: center;
  &:focus{
    border: 2px solid black;
  }
`

export const AddTagButton = styled.button`
  width: 60px;
  height: 34px;
  margin: auto;
  z-index: 10;
  background: transparent;
  border: none;
`

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  z-index: 10;
`

export const TagListElement = styled.li`
  margin: 5px;
  z-index: 10;
  border: 2px solid black;
  background: #b3d4fc;
  padding: 0 5px;
  border-radius: 5px;
`
export const TagListElementButton = styled.button`
  z-index: 10;
  margin-left: 5px;
  border: none;
  outline: none;
`

export const InfoSelectType = styled.select`
  z-index: 10;
  width: 60%;
  margin: auto;
`

export const EscapeButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
  z-index: 10;
  background: transparent;
  width: 40px;
  height: 60px;
  border: none;
`
export const DoneButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
  background: transparent;
    width: 40px;
  height: 60px;
  border: none;
`
export const Rrrorp = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`



