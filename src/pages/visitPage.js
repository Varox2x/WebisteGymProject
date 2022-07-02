import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {homeObjOne, homeObjTwo} from "../components/InfoSection/Data";
import ProgresSection from "../components/ProgresSection";
import Footer from "../components/Footer";
import RegisterWindow from "../components/RegisterWindow";


const VisitPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [rejestration, setRejestration] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const displayWindow = () => {
      setRejestration(!rejestration)
    }



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <RegisterWindow showRegisterWindow={displayWindow} isDisplayed={rejestration}/>
            <HeroSection showRegisterWindow={displayWindow}/>
            <InfoSection {...homeObjOne} showRegisterWindow={displayWindow} />
            <ProgresSection/>
            <InfoSection {...homeObjTwo}  showRegisterWindow={displayWindow} />
            <Footer/>
        </>
    )
}

export default VisitPage;