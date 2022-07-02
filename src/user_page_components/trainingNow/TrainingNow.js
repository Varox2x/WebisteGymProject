import React, {useEffect, useState} from "react";
import {BackGround, BackGroundVideo, BackGroundVideoAfter, Container, Wrapper} from "./TrainingNowElements";
import TrainingList from "./TrainingList";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import {useAuth} from "../../context/AuthContext";
import Training from "./Training"
import Video from '../../videos/benchpress.mp4'


export default () => {

    const {currentUser} = useAuth();

    const [trainingList, setTrainingList] = useState([]);
    const [show, setShow] = useState("list") //list or training

    const [training, setTraining] = useState({})


    async function getTrainings(){
        setTrainingList([]);
        const trainings = await getDocs(collection(db, "users", `${currentUser.uid}`, "workouts"));
        trainings.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setTrainingList(prevState => [...prevState, {...doc.data(), name: `${doc.id}`}])
        });
    }

    function chooseTraining(e){
        setTraining({...trainingList[e.target.name]})
        setShow("training");
    }

    useEffect(()=> {
        getTrainings();
    },[])

    return (
        <>
        <Container>
            <Wrapper>
                {(show == "list")? <TrainingList chooseTraining={chooseTraining} trainingList={trainingList}/> : null}
                {(show == "training")? <Training setShow={setShow} training={training}/> : null}
            </Wrapper>
        </Container>
        </>
    )
}