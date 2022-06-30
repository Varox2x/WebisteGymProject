import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
`

export const FirstInfoWrapper = styled.div`
  width: 450px;
  height: 300px;
  border: 2px solid orange;
  position: relative;
`

export const TraningNameInput = styled.input`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: block;
    z-index: 999;
    height: 15%;
    text-align: center;
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
`
export const FirstInfoButton = styled.button`
      position: absolute;
      top: 0;
      padding:  5px;
`

export const ExercisesSectionWrapper = styled.div`
      height: 90%;
      width: 80%;
      background: lightblue;
       position: relative;
`

export const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  
`


