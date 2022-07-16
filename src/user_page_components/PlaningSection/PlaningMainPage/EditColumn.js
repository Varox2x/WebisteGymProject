import React, {useEffect, useState} from "react";
import {
    EditColumnColumnsContainers,
    EditColumnTitle,
    EditColumnWrapper,
    EditExerciseArea, EditExerciseContainer, ListSingleElement, TreningSectionTitleButon, ViewListExercises
} from "./PlaningMainPageElements";


export default ({type, display, functionClose}) => {
    if (type === "addNewTreining") {
        return (<EditColumnWrapper display={display}>
            <EditColumnColumnsContainers style={{top: "0", bottom: "80%"}}>
                <EditColumnTitle><input placeholder={"Trening Name"}
                                        style={{width: "30%", height: "60%", paddingLeft: "30px", zIndex: "8"}}/>
                    <TreningSectionTitleButon style={{marginLeft: "5px"}}>DONE</TreningSectionTitleButon>
                    <TreningSectionTitleButon onClick={functionClose}
                                              style={{marginLeft: "150px"}}>SAVE</TreningSectionTitleButon>
                    <TreningSectionTitleButon onClick={functionClose}
                                              style={{marginLeft: "20px"}}>X</TreningSectionTitleButon>
                </EditColumnTitle>
            </EditColumnColumnsContainers>
            <EditColumnColumnsContainers style={{top: "20%", bottom: "0"}}>
                <ViewListExercises>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                    <ViewListExercisesElement nazwaCwiczenia={"Nazwa Cwiczenia"} powtorzenia={"6"} serie={"4"}/>
                </ViewListExercises>
            </EditColumnColumnsContainers>
        </EditColumnWrapper>)
    }
    if (type === "AddNewExercise") {
        return (
            <EditColumnWrapper display={display}>
                <EditExerciseContainer>
                    <h3>Nazwa Ćwiczenia</h3>
                    <textarea type="text" style={{width: "80%", zIndex: "999", height: "50%"}}>htrhrt</textarea>
                    <div style={{display: "flex", width: "50%"}}><p>Link:</p><input style={{zIndex: "9"}} type="text"/>
                    </div>
                    <div style={{display: "flex", width: "50%", zIndex: "9"}}><p>Tagi:</p><input style={{zIndex: "9"}}
                                                                                                 type="text"/></div>
                </EditExerciseContainer>
            </EditColumnWrapper>
        )
    }
}

const ViewListExercisesElement = ({nazwaCwiczenia, powtorzenia, serie, faza, przerwy}) => {
    return (
        <ListSingleElement>
            <div style={{width: "100%", height: "30%"}}><h6
                style={{width: "100%", textAlign: "center"}}>{nazwaCwiczenia}</h6></div>
            <div style={{
                width: "60%",
                height: "35%",
                display: "flex",
                flexWrap: "no-wrap",
                alignItems: "center",
                paddingBottom: "2px"
            }}><p style={{textAlign: "center"}}>Powtorzeń:</p><input type="number" style={{
                background: "transparent",
                height: "100%",
                width: "40px",
                display: "inline",
                border: "none",
                marginLeft: "5px"
            }}/></div>
            <div style={{
                width: "40%",
                height: "35%",
                display: "flex",
                flexWrap: "no-wrap",
                alignItems: "center",
                paddingBottom: "2px"
            }}><p>Seri:</p><input type="number" style={{
                background: "transparent",
                height: "100%",
                width: "40px",
                display: "inline",
                border: "none",
                marginLeft: "5px"
            }}/></div>
            <div style={{
                width: "50%",
                height: "35%",
                display: "flex",
                flexWrap: "no-wrap",
                alignItems: "center",
                paddingBottom: "2px"
            }}><p>Faza:</p><input type="number" style={{
                background: "transparent",
                height: "100%",
                width: "65px",
                display: "inline",
                border: "none",
                marginLeft: "5px"
            }}/></div>
            <div style={{
                width: "50%",
                height: "35%",
                display: "flex",
                flexWrap: "no-wrap",
                alignItems: "center",
                paddingBottom: "2px"
            }}><p>Przerwa:</p><input type="number" style={{
                background: "transparent",
                height: "100%",
                width: "58px",
                display: "inline",
                border: "none",
                marginLeft: "5px"
            }}/><p>s</p></div>
            <button style={{position: "absolute", bottom: "-15px", left: "50%"}}>x</button>
        </ListSingleElement>
    )
}