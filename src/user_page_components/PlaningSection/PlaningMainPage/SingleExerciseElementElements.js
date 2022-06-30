import styled from "styled-components";


export const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
  background: #cccccc;
`

export const TopWrap = styled.div`
  margin: auto;
  height: 10%;
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
`

export const WrapperInfo = styled.div`
    height: 90%;
    width: 95%;
    margin: auto;
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const InfoInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 33%;
`

export const InputTitle = styled.h3`
    
`

export const TrainingExerciseInput = styled.input`
    display: block;
    height: 30%;
`