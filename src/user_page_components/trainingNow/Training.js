import React, {useEffect, useState} from "react";
import {
    Container,
    Excersisename,
    ExerciseList,
    SingleExerciseElement,
    Timer,
    ButtonBackground,
    SingleExerciseElementDoneIcon
} from "./TrainingElements";
import SingleExerciseElementInfo from "./SingleExerciseElementInfo";
import TrainingEndLi from "./TrainingEndLi";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {useAuth} from "../../context/AuthContext";

export default ({training,setShow}) => {

    const [focus, setFocus] = useState(0)
    const [breakTime, setBreakTime] = useState(0)
    const {currentUser} = useAuth()
    const [exercisesInfoArray, setExercisesInfoArray] = useState({name: training.name, description: training.description, data: "12.02", excersises: [{name: "aa", description: "dawd", work: [{repeats: 9, heavy: 55, done: false},{repeats: 9, heavy: 55, done: false},{repeats: 9, heavy: 55, done: false}]}]})


    async function addTrainingHistoryToBase(name, description, excersises, data){
        await setDoc(doc(db, "users", `${currentUser.uid}`, "history", `${data.year}${data.month}${data.day}`), {
            description: description,
            excersises: [...excersises],
            name: name,
            data: data,

        }).then( () => console.log("git"));
        setShow("list")
    }

    function doneClicked(e,inx){
        setBreakTime(exercisesInfoArray.excersises[focus].break)
        let copyArray = [...exercisesInfoArray.excersises];
        copyArray[focus].work[inx] = {
            ...copyArray[focus].work[inx],
            done: true
        }


        setExercisesInfoArray({...exercisesInfoArray, excersises: [...copyArray]})
        console.log(exercisesInfoArray)
    }

    function typingRepHev(e,inx){
        let copyArray = [...exercisesInfoArray.excersises];
        copyArray[focus].work[inx] = {
            ...copyArray[focus].work[inx],
            [e.target.name]: e.target.value
        }


        setExercisesInfoArray({...exercisesInfoArray, excersises: [...copyArray]})
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (breakTime == 0){
                return clearInterval(intervalId)
            } else {
                setBreakTime(prevState => prevState-1)
            }
        },1000)
        return () => clearInterval(intervalId)
    },[breakTime])

    useEffect(() => {
        const d = new Date().getDate()
        const m = new Date().getMonth()
        const y = new Date().getFullYear()
        const data = {day: d, month: m, year: y}
        let exercsesNowTraining = [];
        training.exercises.forEach((exercise, inx) => {
            exercsesNowTraining.push({name: exercise.name, description: exercise.description, break: exercise.break, work: []});
            for(let i = 0; i < training.exercises[inx].series; i++){
                exercsesNowTraining[inx].work.push({repeats: training.exercises[inx].repeats, heavy: 0, done: false})
            }

        })
        setExercisesInfoArray({name: training.name, description: training.description, data: {...data}, excersises: [...exercsesNowTraining]})

    },[])

    return (
        <Container>
            <ExerciseList>
                {exercisesInfoArray.excersises.map( (exercise, inx) => {
                console.log(exercise)
                    let counter = 0;
                    exercise.work.forEach((el ,inx) => {
                        if(el.done == true){
                            counter++;
                        }
                    })
                    return (
                        <SingleExerciseElement end={true} props={(inx == focus)? true : false} >
                            {(exercise.work.length == counter && inx != focus)? <SingleExerciseElementDoneIcon/> : null}
                            <Excersisename props={(inx == focus)? true : false} >{exercise.name}
                                <ButtonBackground  name={inx} onClick={(e) => setFocus(e.target.name)}>CLICK</ButtonBackground>
                            </Excersisename>
                            {(inx == focus)? <SingleExerciseElementInfo typingRepHev={typingRepHev} doneClicked={doneClicked} work={exercise.work}/> : null}
                        </SingleExerciseElement>
                    )
                })}
                <TrainingEndLi setBreakTime={setBreakTime} exercisesInfoArray={exercisesInfoArray} addTrainingHistoryToBase={addTrainingHistoryToBase} index={exercisesInfoArray.excersises.length} setFocus={setFocus} focus={focus}/>
            </ExerciseList>
            <Timer animation={(breakTime % 10 == 0)? true : false} style={{display: (breakTime == 0)? "none" : "block"}}>{breakTime}S</Timer>
        </Container>
    )
}