import React from "react";
import {
    ButtonDisplayedOnAddTrening, DeleteIcon, EditIcon,
    SingleBlockContainer, SingleBlockContainerAfter, SingleBlockContainerContent,
    SingleBlockContainerTitle,
    SingleBlockContainerUnderTitle
} from "./PlaningMainPageElements";
import Aos from "aos";
import "aos/dist/aos.css";


export default ({index, updatepoz, type, name, description, links, tags, showbutton, addExercise, array, editExercise, mode, deleteDocument, editTaining}) => {
    if (type === "treining") {
        return (
            <SingleBlockContainer key={index} style={{left: `${250 * index + updatepoz}px`}}>
                <SingleBlockContainerAfter/>
                <SingleBlockContainerTitle>{name}</SingleBlockContainerTitle>
                <SingleBlockContainerContent>
                    {array.map( (ex, inx) => {
                        return (
                            <SingleBlockContainerUnderTitle key={inx}>{ex.name}</SingleBlockContainerUnderTitle>
                        )
                    })}
                </SingleBlockContainerContent>
                <ButtonDisplayedOnAddTrening onClick={(e) => deleteDocument(e, "workouts")} name={name} style={{left: "0", width: "50%", height: "15%"}}></ButtonDisplayedOnAddTrening>
                <DeleteIcon/>
                <ButtonDisplayedOnAddTrening onClick={(e) => editTaining(e)} name={index} style={{right: "0", width: "50%", height: "15%"}}></ButtonDisplayedOnAddTrening><EditIcon/>
            </SingleBlockContainer>
        )
    }
    if (type === "exercise") {
        return (
            <SingleBlockContainer key={index} style={{left: `${250 * index + updatepoz}px`}}>
                <SingleBlockContainerAfter/>
                <SingleBlockContainerTitle>{name}</SingleBlockContainerTitle>
                <SingleBlockContainerContent>
                    <p>{description}</p>
                    <p>{links}</p>

                </SingleBlockContainerContent>
                {(showbutton == "training")? <ButtonDisplayedOnAddTrening onClick={(e) => addExercise(e)}   name={name} >Dodaj do treningu</ButtonDisplayedOnAddTrening> : null}
                {(mode == "basic")?                     <><ButtonDisplayedOnAddTrening style={{left: "0", width: "50%", height: "15%"}} onClick={(e) => deleteDocument(e, "exercises")} name={name} ></ButtonDisplayedOnAddTrening>
                    <DeleteIcon/>
                    <ButtonDisplayedOnAddTrening onClick={(e) => editExercise(e)} style={{right: "0", width: "50%", height: "15%"}} name={index} ></ButtonDisplayedOnAddTrening><EditIcon/></> : null}
            </SingleBlockContainer>
        )
    }
}
