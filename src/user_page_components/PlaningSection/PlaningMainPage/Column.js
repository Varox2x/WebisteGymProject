import React, {useEffect, useState} from "react";

import {ColumnContainer, Glass, ScrollRightButton, ScrollRightLeft} from "./PlaningMainPageElements";
import BlockRow from "./BlockRow";


export default ({
                    type,
                    objects,
                    showbutton,
                    addExercise,
                    editExercise,
                    mode,
                    setEditMode,
                    deleteDocument,
                    editTaining,
                    borderTop,
                    showColumnAnimation
                }) => {
    const [pozitionMove, setPozitionMove] = useState(0);
    const [mousePress, setMousePress] = useState(false)
    const [startedMovePoz, setStartedMovePoz] = useState(0);
    const [lastPoz, setLastPoz] = useState(0)
    const [mouseonbutton, setMouseonbutton] = useState(false);

    function mouseDown(e) {
        setMousePress(true)
        setStartedMovePoz(e.clientX)
    }

    function mouseMove(e) {
        if (mousePress) {
            setPozitionMove(e.clientX - startedMovePoz + lastPoz)
        }
    }

    function mouseUp(e) {
        setMousePress(false)
        setLastPoz(pozitionMove)
    }


    function mouseLeave() {
        setMousePress(false)
        setLastPoz(pozitionMove)
    }

    function scrolling(e) {
        console.log(e.deltaY)
        if (e.deltaY == 100) {
            setPozitionMove(pozitionMove + 44)
            setLastPoz(lastPoz + 44)
        } else {
            setPozitionMove(pozitionMove - 44)
            setLastPoz(lastPoz - 44)
        }

    }


    return (
        <>
            <ColumnContainer animation={showColumnAnimation} props={borderTop}>
                {objects.map((exerise, number) => {
                    return (
                        <BlockRow editTaining={editTaining} deleteDocument={deleteDocument} key={number}
                                  setEditMode={setEditMode} mode={mode} editExercise={editExercise}
                                  array={exerise.exercises} addExercise={addExercise} showbutton={showbutton}
                                  type={type} index={number} updatepoz={pozitionMove} name={`${exerise.name}`}
                                  description={`${exerise.description}`} links={`${exerise.links}`}/>
                    )
                })}
                <Glass onMouseLeave={() => mouseLeave()} onMouseMove={(e) => mouseMove(e)}
                       onMouseDown={(e) => mouseDown(e)} onMouseUp={(e) => mouseUp(e)} onWheel={(e) => scrolling(e)}/>
            </ColumnContainer>
        </>

    )
}