import React from "react";
import {
    ButtonBackground, CloseTrainingIcon, CloseTrainingTitle,
    Excersisename,
    LastElementContentWrapper,
    SaveAndCloseTraining,
    SingleExerciseElement, SingleExerciseElementDoneIcon
} from "./TrainingElements";


export default ({
    index, setFocus, focus, addTrainingHistoryToBase, exercisesInfoArray: {
        name, description,excersises, data }, setBreakTime}) => {
        return(
<SingleExerciseElement props={false}>
    <Excersisename>KONIEC
        <ButtonBackground name={index} onClick={(e) => {
            setFocus(e.target.name)
            setBreakTime(0)
        }}>CLICK</ButtonBackground>
    </Excersisename>
    {(focus == index) ?
        <LastElementContentWrapper><CloseTrainingTitle>Zapisz i wyjdź</CloseTrainingTitle><SaveAndCloseTraining
            onClick={() => addTrainingHistoryToBase(name, description,excersises, data)}><CloseTrainingIcon/></SaveAndCloseTraining></LastElementContentWrapper> : null}
</SingleExerciseElement>
)
}