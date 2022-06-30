import React, {useState} from "react";
import "./animation.css"
import {
    ArearWrapper,
    RegisterContainer,
    RegisterWraper,
    SingleTitle,
    Title,
    ButtonRegister,
    InputRegister, Exit
} from "./RegisterWindowElements";
import {Button} from "../ButtonElement";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import db from "../../firebase"
import { getFirestore } from 'firebase/firestore'


const RegisterWindow = ({isDisplayed,showRegisterWindow}) => {


    const {signup, login, currentUser} = useAuth();
    const [inputInfo, setInputInfo] = useState({username: "", email: "", password: "", repeatpassword: ""})
    const history = useNavigate()
    const [error, setError] = useState(false);



    function typing(e){
        setInputInfo({
            ...inputInfo,
            [e.target.name]: e.target.value
        })
    }

    async function register(){
        try {
            await signup(inputInfo.email, inputInfo.password);
            history("/strefauzytkownika")
        }   catch (error){
            console.log(error)
        }
    }





    return (
        <>
            <RegisterContainer   display={isDisplayed}>
                <RegisterWraper className={isDisplayed? "animation" : ""}>
                    <Exit onClick={() => showRegisterWindow()}>X</Exit>
                    <Title>Rejestracja</Title>
                    <ArearWrapper>
                        <SingleTitle>Email:</SingleTitle>
                        <label>
                            <InputRegister onChange={(e) => typing(e)} name="email"  value={inputInfo.email} name="email" type="email" />
                        </label>
                    </ArearWrapper>
                    <ArearWrapper>
                        <SingleTitle>Hasło:</SingleTitle>
                        <label>
                            <InputRegister onChange={(e) => typing(e)} name="password"  value={inputInfo.password} name="password" type="password" />
                        </label>
                    </ArearWrapper>
                    <ArearWrapper>
                        <SingleTitle>Powtórz hasło:</SingleTitle>
                        <label>
                            <InputRegister onChange={(e) => typing(e)} name="repeatpassword"  value={inputInfo.repeatpassword} name="repeatpassword" type="password" />
                        </label>
                    </ArearWrapper>
                    <ButtonRegister onClick={()=> register()}>Utwórz konto</ButtonRegister>
                </RegisterWraper>
            </RegisterContainer>
        </>
    )
}

export default RegisterWindow