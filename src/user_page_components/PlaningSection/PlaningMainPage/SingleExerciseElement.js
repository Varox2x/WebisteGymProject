import React, {useState} from "react";
import {
    Container, DownIcon,
    ExerciseName,
    InfoInputsWrapper, InputTitle, SwitchOrderButton,
    TopWrap,
    TopWrapButton, TrainingExerciseInput, UpIcon,
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
            <Container style={{height: "45%", width: `${90 - (indexex * 3)}%`, bottom: `${indexex * 6.7}%`, left: `${indexex * 1.07 + 5}%`, zIndex: `${20 - indexex}`}}>
                <TopWrap>
                    <SwitchOrderButton style={{left: "35%", right:"35%"}} onClick={(e) => placefirst(e)} name={indexex}></SwitchOrderButton>
                    <SwitchOrderButton style={{display: `${(indexex == arraylength)? "none" : "block"}`, right: "65%", left: "0"}} name={indexex} onClick={(e) => moveUpInIndex(e, false)}></SwitchOrderButton>
                    <DownIcon style={{display: `${(indexex == arraylength)? "none" : "block"}`}}/>
                    <SwitchOrderButton style={{display: `${(indexex == 0)? "none" : "block"}`, left: "65%", right: "0"}} name={indexex} onClick={(e) => moveUpInIndex(e, true)}></SwitchOrderButton>
                    <UpIcon style={{display: `${(indexex == 0)? "none" : "block"}`}}/>
                    <ExerciseName>{nameex}</ExerciseName>
                </TopWrap>
                <WrapperInfo>
                    {(indexex ==0)? <>                    <InfoInputsWrapper><InputTitle>Liczba serii:</InputTitle><TrainingExerciseInput type={"number"} name="series" value={series} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Liczba powtórzeń:</InputTitle><TrainingExerciseInput type={"number"} name="repeats" value={repeats} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Faza:</InputTitle><TrainingExerciseInput type={"number"} name="phase" value={phase} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Przerwa:</InputTitle><TrainingExerciseInput type={"number"} name="break" value={breaks} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper>
                        <InfoInputsWrapper><InputTitle>Opis:</InputTitle><TrainingExerciseInput style={{width: "70%"}} name="description" value={description} onChange={(e) => typingExercinseInfo(e,indexex)}/></InfoInputsWrapper></> : null}
                </WrapperInfo>
            </Container>
        </>
    )
}