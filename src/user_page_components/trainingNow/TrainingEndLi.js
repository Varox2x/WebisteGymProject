import React from "react";
import {
    ButtonBackground, CloseTrainingIcon, CloseTrainingTitle,
    Excersisename,
    LastElementContentWrapper,
    SaveAndCloseTraining,
    SingleExerciseElement, SingleExerciseElementDoneIcon
} from "./TrainingElements";


export default ({index, setFocus, focus, addTrainingHistoryToBase, exercisesInfoArray, setBreakTime}) => {
    return (
        <SingleExerciseElement props={false}>
            <Excersisename>KONIEC
                <ButtonBackground  name={index} onClick={(e) => {
                    setFocus(e.target.name)
                    setBreakTime(0)
                }}>CLICK</ButtonBackground>
            </Excersisename>
            {(focus == index)? <LastElementContentWrapper><CloseTrainingTitle>Zapisz i wyjdź</CloseTrainingTitle><SaveAndCloseTraining onClick={() => addTrainingHistoryToBase(exercisesInfoArray.name, exercisesInfoArray.description, exercisesInfoArray.excersises, exercisesInfoArray.data)}><CloseTrainingIcon/></SaveAndCloseTraining></LastElementContentWrapper> : null}
        </SingleExerciseElement>
    )
}