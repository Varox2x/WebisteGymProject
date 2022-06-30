import React, {useState} from "react";
import {AuthProvider, useAuth} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";


export default () => {

    const {login} = useAuth()
    const {logout} = useAuth()
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useNavigate()

    const [inputInfo, setInputInfo] = useState({
        login: "",
        mail: "",
        password: ""
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
            setError('Failed to sign in')
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
            <AuthProvider>
                {error && <p>{error}</p>}
                <label>
                    <p>Mail</p>
                    <input onChange={(e) => typing(e)} name={"mail"} value={inputInfo.mail}/>
                </label>
                <label>
                    <p>Haslo</p>
                    <input onChange={(e) => typing(e)} name={"password"} value={inputInfo.password}/>
                </label>
                <button disabled={loading} onClick={signupClick}>GIT</button>
                <Link to="/forgotpassword">Zapomniales hasla?</Link>
                <button onClick={logoutUser} >wyloguj</button>
            </AuthProvider>
        </>
    )
}