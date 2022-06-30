import React from "react";
import {TrainingList, TrainingListElement} from "./TrainingNowElements";
import {SingleExerciseElementButton, TrainingListElementBackground} from "./TrainingElements";

export default ({trainingList, chooseTraining}) => {
    return (
        <TrainingList>
            {trainingList.map( (el, inx) => {
                console.log(inx)
                return (
                    <TrainingListElement props={(inx == trainingList.length-1)? true : false} key={el.name}>
                        <SingleExerciseElementButton  name={inx} onClick={(e) => chooseTraining(e)}/>
                        <p>{el.name}</p>
                        <p>ostatnio zrobiony: 22.04</p>
                    </TrainingListElement>
                )
            })}
        </TrainingList>
    )
}