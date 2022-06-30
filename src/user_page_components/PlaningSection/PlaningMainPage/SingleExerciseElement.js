import React, {useState} from "react";
import {
    Container,
    ExerciseName,
    InfoInputsWrapper, InputTitle,
    TopWrap,
    TopWrapButton, TrainingExerciseInput,
    WrapperInfo
} from "./SingleExerciseElementElements";

export default ({nameex, series, phase, repeats, description, breaks, indexex, placefirst, typingExercinseInfo, moveUpInIndex, arraylength}) => {

    const [inputInfo, setInputInfo] = useState({exerciseName: "", series: 0, repeats: 0, break: 0, phase: "", description: ""})


    function typing(e){
        setInputInfo({
            ...inputInfo,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <Container style={{height: "45%", width: `${90 - (indexex * 2)}%`, bottom: `${indexex * 6}%`, left: `${indexex * 1.07}%`, zIndex: `${20 - indexex}`}}>
                <TopWrap>
                    <TopWrapButton onClick={(e) => placefirst(e)} name={indexex}>Edit</TopWrapButton>
                    <button style={{display: `${(indexex == arraylength)? "none" : "block"}`}} name={indexex} onClick={(e) => moveUpInIndex(e, false)}>down</button>
                    <button style={{display: `${(indexex == 0)? "none" : "block"}`}} name={indexex} onClick={(e) => moveUpInIndex(e, true)}>up</button>
                    <ExerciseName>{nameex}</ExerciseName>
                </TopWrap>
                <WrapperInfo>
                    {(indexex ==0)? <>                    <InfoInputsWrapper><InputTitle>Liczba serii:</InputTitle><TrainingExerciseInput name="series" value={series} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Liczba powtórzeń:</InputTitle><TrainingExerciseInput name="repeats" value={repeats} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Faza:</InputTitle><TrainingExerciseInput name="phase" value={phase} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Przerwa:</InputTitle><TrainingExerciseInput name="break" value={breaks} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Opis:</InputTitle><TrainingExerciseInput name="description" value={description} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper></> : null}
                </WrapperInfo>
            </Container>
        </>
    )
}