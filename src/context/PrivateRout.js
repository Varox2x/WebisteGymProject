import React, {useEffect} from "react";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default ({children}) => {

    const {currentUser} = useAuth();
    const history = useNavigate()

    useEffect(()=> {
        if(currentUser == null){
            history("/signin")
        }
    })

    return (
        currentUser ? children : null
    )

}