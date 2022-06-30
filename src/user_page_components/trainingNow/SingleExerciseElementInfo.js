import React, {useEffect, useState} from "react";
import {
    SeriesInput,
    SeriesInputTitle,
    SeriesInputWrapper,
    SingleExerciseInfoWrapper,
    SingleSeries,
    ExcersiseDoneButton, DoneIcon
} from "./TrainingElements";

export default ({doneClicked, work, typingRepHev}) => {



    useEffect(()=> {
        console.log(work[0])
    },[])



    return (
        <SingleExerciseInfoWrapper>
            {work.map((el, inx) => {
                return (
                    <SingleSeries animation={(inx > 0)? ((work[inx-1].done == true && work[inx].done == false)? true : false) : false}  last={(work.length-1 == inx)? true : false} primary={el.done}  style={{height: `${100 / work.length}%`}} >
                        <SeriesInputWrapper>
                            <SeriesInputTitle>Powtórzenia:</SeriesInputTitle>
                            <SeriesInput name="repeats" type="number" placeholder={el.repeats} onChange={(e) => typingRepHev(e,inx)} value={el.repeats}/>
                        </SeriesInputWrapper>
                        <SeriesInputWrapper>
                            <SeriesInputTitle>Ciężar:</SeriesInputTitle>
                            <SeriesInput name="heavy" type="number" placeholder={el.heavy} onChange={(e) => typingRepHev(e,inx)} value={el.heavy}/>
                        </SeriesInputWrapper>
                        <SeriesInputWrapper>
                                <ExcersiseDoneButton name={inx} onClick={(e) => doneClicked(e, inx)}>done</ExcersiseDoneButton>
                            <DoneIcon props={(el.done == true)? true : false}/>
                        </SeriesInputWrapper>
                    </SingleSeries>
                )
            })}
        </SingleExerciseInfoWrapper>
    )
}