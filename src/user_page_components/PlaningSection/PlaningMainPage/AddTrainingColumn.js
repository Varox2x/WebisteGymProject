import React, {useEffect, useState} from "react";
import {
    Container,
    FirstInfoWrapper,
    TraningDescriptionInput,
    TraningNameInput,
    FirstInfoButton,
    ExercisesSectionWrapper, NextButton, ExercisesOrderWinodow, ExercisesOrderWinodowElements
} from "./AddTrainingColumnElements";
import SingleExerciseElement from "./SingleExerciseElement";
import {EscapeButton} from "./AddExerciseColumnElements";

export default ({display, changeExerciseIndex, exercisesInTraining, setExercisesInTraining, typingExercinseInfo, exerciseobject, moveUpInIndex, arraylength, addTrainingToBase, namedescriptionInfo, setnamedescriptionInfo, editMode}) => {

    const [treiningObjec, setTreiningObjec] = useState();
    const [mode, setMode] = useState("NaD") //ex Nad

    function createTreningNameDescription(){
        //validate
        setTreiningObjec({
            ...namedescriptionInfo
        })
        setMode("ex")
    }

    function typingNaD(e){
        setnamedescriptionInfo({
            ...namedescriptionInfo,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if(editMode !== false){
            setnamedescriptionInfo({trainingName: editMode.name, description: editMode.description})
            setExercisesInTraining([...editMode.exercises])
            console.log(editMode)
        }
    },[])



    return (
        <>
            <Container>
                {(mode == "NaD")?                 <FirstInfoWrapper >
                    <TraningNameInput onChange={(e) => typingNaD(e)} name="trainingName" value={namedescriptionInfo.trainingName} placeholder={"Podaj nazwe Treningu"}/>
                    <TraningDescriptionInput onChange={(e) => typingNaD(e)} name="description" value={namedescriptionInfo.description} placeholder={"Jeśli chcesz, dodaj opis"}/>
                    <FirstInfoButton onClick={() => display("basic")} style={{left: "0"}}>Dalej</FirstInfoButton>
                    <FirstInfoButton onClick={createTreningNameDescription} style={{right: "0"}}>Stwórz</FirstInfoButton>
                </FirstInfoWrapper> : null }

                {(mode == "ex")?                 <ExercisesSectionWrapper>
                    <EscapeButton onClick={()=> display("basic")}>X</EscapeButton>
                    <NextButton onClick={addTrainingToBase}>Zatwierdz trening</NextButton>
                    {exercisesInTraining.map( (el, index) => {
                        return(
                            <SingleExerciseElement exerciseobject={exerciseobject} typingExercinseInfo={typingExercinseInfo} key={index} placefirst={changeExerciseIndex} indexex={index} nameex={el.name}  series={el.series} phase={el.phase} repeats={el.repeats} description={el.description} breaks={el.break} moveUpInIndex={moveUpInIndex} arraylength={arraylength}/>
                        )
                    })}
                </ExercisesSectionWrapper> : null}

            </Container>
        </>
    )
}