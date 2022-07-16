import React, {useEffect, useState} from "react";
import {
    Container,
    FirstInfoWrapper,
    TraningDescriptionInput,
    TraningNameInput,
    FirstInfoButton,
    ExercisesSectionWrapper, NextButton, SaveExerciseIcon, Errorp
} from "./AddTrainingColumnElements";
import SingleExerciseElement from "./SingleExerciseElement";
import {CloseIcon, EscapeButton} from "./AddExerciseColumnElements";

export default ({
                    display,
                    changeExerciseIndex,
                    exercisesInTraining,
                    setExercisesInTraining,
                    typingExercinseInfo,
                    exerciseobject,
                    moveUpInIndex,
                    arraylength,
                    addTrainingToBase,
                    namedescriptionInfo,
                    setnamedescriptionInfo,
                    editMode
                }) => {

    const [mode, setMode] = useState("NaD") //ex Nad
    const [error, setError] = useState("")

    function createTreningNameDescription() {
        if (namedescriptionInfo.trainingName.length > 4) {
            setMode("ex")
        } else {
            setError("Nazwa treningu musi składać się conajmniej z 5 liter")
        }
    }

    function typingNaD(e) {
        setnamedescriptionInfo({
            ...namedescriptionInfo,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (editMode !== false) {
            setnamedescriptionInfo({trainingName: editMode.name, description: editMode.description})
            setExercisesInTraining([...editMode.exercises])
        }
    }, [])


    return (
        <>
            <Container>
                {mode === "NaD" && <FirstInfoWrapper>
                    <Errorp>{error}</Errorp>
                    <TraningNameInput onChange={(e) => typingNaD(e)} name="trainingName"
                                      value={namedescriptionInfo.trainingName} placeholder={"Podaj nazwe Treningu"}/>
                    <TraningDescriptionInput onChange={(e) => typingNaD(e)} name="description"
                                             value={namedescriptionInfo.description}
                                             placeholder={"Jeśli chcesz, dodaj opis"}/>
                    <FirstInfoButton onClick={() => display("basic")} style={{left: "0"}}><CloseIcon/></FirstInfoButton>
                    <FirstInfoButton onClick={createTreningNameDescription}
                                     style={{right: "0"}}><SaveExerciseIcon/></FirstInfoButton>
                </FirstInfoWrapper>}

                {mode === "ex" && <ExercisesSectionWrapper>
                    <EscapeButton onClick={() => display("basic")}><CloseIcon/></EscapeButton>
                    <NextButton onClick={addTrainingToBase}/>
                    <SaveExerciseIcon/>
                    {exercisesInTraining.map((el, index) => {
                        return (
                            <SingleExerciseElement exerciseobject={exerciseobject}
                                                   typingExercinseInfo={typingExercinseInfo} key={index}
                                                   placefirst={changeExerciseIndex} indexex={index} nameex={el.name}
                                                   series={el.series} phase={el.phase} repeats={el.repeats}
                                                   description={el.description} breaks={el.break}
                                                   moveUpInIndex={moveUpInIndex} arraylength={arraylength}/>
                        )
                    })}
                </ExercisesSectionWrapper>}

            </Container>
        </>
    )
}