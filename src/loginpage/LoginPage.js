import React, {useEffect, useState} from "react";
import {AuthProvider, useAuth} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import Video from "../videos/benchpress.mp4";

import {
    Background,
    ButtonsWrapper,
    Container,
    Error,
    InputInfo,
    InputTitle,
    LabelInfo,
    LoginButton, MainTitle, VideoBg,
    Wrapper
} from "./LoginPageElements";


export default () => {

    const {login} = useAuth()
    const {logout} = useAuth()
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useNavigate()

    const [pageHeight, setPageHeight] = useState()

    useEffect(() =>{
        setPageHeight(window.innerHeight)
        console.log(window.innerHeight)
    },[])

    const [inputInfo, setInputInfo] = useState({
        login: "",
        mail: "",
        password: "",
        passwordRepeat: ""
    });

    function typing(e){
        setInputInfo({
            ...inputInfo,
            [e.target.name]: e.target.value
        })
    }

    async function signupClick(){
        try {
            setError('')
            await login(inputInfo.mail, inputInfo.password)
            setLoading(true)
            history("/strefauzytkownika")
        } catch(error) {
            setError('Błąd Logowania')
            console.log(error)
        }
        setLoading(false)
    }

    async function logoutUser(){
        console.log("aa")
        try {
            await logout();
            console.log("wylogowano")
        } catch {
            console.log("filed logout")
        }
    }

    return (
        <>
            <Container style={{height: `${pageHeight}px`}}>
                <Background>
                    <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
                </Background>

                <Wrapper>
            <AuthProvider>
                <MainTitle>Logowanie</MainTitle>
                {error && <Error>{error}</Error>}
                <LabelInfo>
                    <InputTitle>Mail:</InputTitle>
                    <InputInfo onChange={(e) => typing(e)} name={"mail"} type="mail" value={inputInfo.mail}/>
                </LabelInfo>
                <LabelInfo>
                    <InputTitle>Hasło:</InputTitle>
                    <InputInfo onChange={(e) => typing(e)} name={"password"} type="password" value={inputInfo.password}/>
                </LabelInfo>
                <LabelInfo>
                    <InputTitle>Powtórz hasło:</InputTitle>
                    <InputInfo onChange={(e) => typing(e)} name={"passwordRepeat"} type="password" value={inputInfo.passwordRepeat}/>
                </LabelInfo>
                <ButtonsWrapper>
                    {/*<Link to="/forgotpassword">Zapomniałeś hasła?</Link>*/}
                    <LoginButton disabled={loading} onClick={signupClick}>Zaloguj</LoginButton>
                </ButtonsWrapper>
                {/*<button onClick={logoutUser} >wyloguj</button>*/}
            </AuthProvider>
                </Wrapper>
            </Container>
        </>
    )
}