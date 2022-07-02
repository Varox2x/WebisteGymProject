import React, {useEffect, useState} from "react";
import Column from "./Column";
import {AddExerciseButton, AddTreiningButton, BoxContainer} from "./PlaningMainPageElements";
import AddExerciseColumn from "./AddExerciseColumn";
import AddTrainingColumn from "./AddTrainingColumn";
import {useAuth} from "../../../context/AuthContext";
import { getDocs , setDoc, collection, doc, getDoc , deleteDoc, updateDoc } from "firebase/firestore";
import { getFirestore} from "firebase/firestore";
import {db} from "../../../firebase";
import {EscapeButton} from "./AddExerciseColumnElements";



export default () => {

    const {currentUser} = useAuth();


    const [mode, setMode] = useState("basic");
    const [editMode, setEditMode] = useState(false);
    // exercise training
    const [addexercisemode, setaddexercisemode] = useState(false)
    const [modeVersion, setModeVersion] = useState("AddNewTreining")
    const [baseTrainings, setBaseTrainings] = useState([]);

    //baza=> z api

    const [exercisesObjects, setExercisesObjects] = useState([]);

    //state tworzonego treningu
    const [namedescriptionInfo, setnamedescriptionInfo] = useState({trainingName: "", description: ""});

    const [exercisesInTraining, setExercisesInTraining] = useState([])

    //funkcje z api
    async function getExercises(){
        setExercisesObjects([]);
        const exercises = await getDocs(collection(db, "users", `${currentUser.uid}`, "exercises"));
        exercises.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setExercisesObjects(prevState => [...prevState, {...doc.data(), name: `${doc.id}`}])
        });
    }
    async function getTrainings(){
        setBaseTrainings([]);
        const trainings = await getDocs(collection(db, "users", `${currentUser.uid}`, "workouts"));
        trainings.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setBaseTrainings(prevState => [...prevState, {...doc.data(), name: `${doc.id}`}])
        });
    }

    async function addExercise({name, links, description, type, tags}){
        await setDoc(doc(db, "users", `${currentUser.uid}`, "exercises", `${name}`), {
            tags: tags,
            links: links,
            description: description,
            type: type
        }).then( () => getExercises())
        setEditMode(false);
    }

    async function addTrainingToBase(name, description, array){
        await setDoc(doc(db, "users", `${currentUser.uid}`, "workouts", `${name}`), {
            description: description,
            exercises: array
        }).then( () => getExercises())
        setExercisesInTraining([]);
        setnamedescriptionInfo({trainingName: "", description: ""});
        setEditMode(false)
    }

    //--

    useEffect(() => {
        getExercises();
        getTrainings();
    },[])


    function changeMode(e){
        setMode(e);
    }

    function addClicked(e){
        setModeVersion(e.target.name);
        changeMode(e.target.name);
    }

    function changeExerciseIndex(e){
        let array = exercisesInTraining;
        const fromIndex = e.target.name;
        const element = array.splice(fromIndex, 1)[0];
        array.splice(0, 0, element);
        setExercisesInTraining([...array]);
    }

    function moveUpInIndex(e, pos){
        let array = exercisesInTraining;
        const fromIndex = e.target.name;
        const toIndex = pos? e.target.name -1 : e.target.name+1;
        const element = array.splice(fromIndex, 1)[0];
        array.splice(toIndex, 0, element);
        setExercisesInTraining([...array]);
    }


    function addeExerciseToStateTreningInTreiningMode(e){
        setExercisesInTraining([
            ...exercisesInTraining,
            {
                name: e.target.name,
                description: "",
                series: 0,
                repeats: 0,
                phase: 0,
                break: 0
            }
        ])
    }

    const [showColumnAnimation, setShowColumnAnimation] = useState({training: false, exercise: false})

    function setAnimationColumnOn(e){
        setShowColumnAnimation({...showColumnAnimation,
        [e.target.name]: true
        })
    }


    function typingExercinseInfo(e,indexOfObject){
        let array = exercisesInTraining;
        array[indexOfObject] = {
            ...array[indexOfObject],
            [e.target.name]: e.target.value
        }
        setExercisesInTraining([...array]);
    }

    function saveTreningInBase(){
        console.log(namedescriptionInfo)
        console.log(exercisesInTraining)
        addTrainingToBase(namedescriptionInfo.trainingName, namedescriptionInfo.description, exercisesInTraining).then(()=> {
            getTrainings().then(() => setMode("basic"))
        })
    }

    function editExercise(e){
        setMode("exercise");
        setEditMode({...exercisesObjects[e.target.name]});
    }

    function editTaining(e){
        setMode("training");
        setEditMode({...baseTrainings[e.target.name]})
    }


    async function deleteDocument(e,col){
        console.log(e.target.name)
        await deleteDoc(doc(db, "users",`${currentUser.uid}`,`${col}`, `${e.target.name}`)).then(() => {
            if(col == "exercises"){
                getExercises()
            }
            if(col == "workouts"){
                getTrainings()
            }
        })
    }


    return (
        <>
            <BoxContainer>
                {(mode == "basic")? <Column showColumnAnimation={showColumnAnimation.training} borderTop={false} editTaining={editTaining}  deleteDocument={deleteDocument} objects={baseTrainings} type={"treining"}></Column> : null}
                {(mode == "exercise")? <AddExerciseColumn  mode={editMode} setExercise={addExercise} display={changeMode} ></AddExerciseColumn> : null}
                {(mode == "training")? <AddTrainingColumn setExercisesInTraining={setExercisesInTraining} editMode={editMode} namedescriptionInfo={namedescriptionInfo} setnamedescriptionInfo={setnamedescriptionInfo} addTrainingToBase={saveTreningInBase} arraylength={exercisesInTraining.length-1} moveUpInIndex={moveUpInIndex} exerciseobject={exercisesInTraining[0]} typingExercinseInfo={typingExercinseInfo} changeExerciseIndex={changeExerciseIndex}  exercisesInTraining={exercisesInTraining} changeExerciseIndex={changeExerciseIndex} display={changeMode} ></AddTrainingColumn> : null}
                {(mode == "basic" && exercisesObjects.length != 0)? <AddTreiningButton onMouseEnter={(e) => setAnimationColumnOn(e)} name="training" onClick={(e) => addClicked(e)}>Dodaj Trening</AddTreiningButton> : null}
                {(mode == "basic")? <AddExerciseButton onMouseEnter={(e) => setAnimationColumnOn(e)} name="exercise" onClick={(e) => addClicked(e)}>Dodaj Ćwiczenie</AddExerciseButton> : null}
                <Column showColumnAnimation={showColumnAnimation.exercise} borderTop={true} editTaining={editTaining} deleteDocument={deleteDocument} setEditMode={setEditMode} mode={mode}   editExercise={editExercise} addExercise={addeExerciseToStateTreningInTreiningMode} showbutton={mode} objects={exercisesObjects} type={"exercise"}></Column>
            </BoxContainer>
        </>
    )
}