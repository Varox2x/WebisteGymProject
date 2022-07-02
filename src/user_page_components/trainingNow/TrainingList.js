import React from "react";
import {
    NotrainingsParagraph,
    TrainingList,
    TrainingListElement,
    NotrainingsLinks,
    NotrainingsWrapper
} from "./TrainingNowElements";
import {SingleExerciseElementButton, TrainingListElementBackground} from "./TrainingElements";
import { Link } from "react-router-dom";


export default ({trainingList, chooseTraining}) => {
    return (
        <TrainingList>
            {(trainingList.length == 0)? <NoTrainings/> : null}
            {trainingList.map( (el, inx) => {
                console.log(inx)
                return (
                    <TrainingListElement props={(inx == trainingList.length-1)? true : false} key={el.name}>
                        <SingleExerciseElementButton  name={inx} onClick={(e) => chooseTraining(e)}/>
                        <p>{el.name}</p>
                    </TrainingListElement>
                )
            })}
        </TrainingList>
    )
}


const NoTrainings = () => {
    return (
        <NotrainingsWrapper>
            <NotrainingsParagraph>Nie stworzono jeszcze żadnych treningów, odwiedź sekcję
            <Link style={{textDecoration: "none"}} to={`/strefauzytkownika/planmain`}> planuj </Link>by stworzyć trening</NotrainingsParagraph>
        </NotrainingsWrapper>
    )
}