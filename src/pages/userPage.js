import React from "react";
import MainPage from "../user_page_components/MainPage/MainPage";
import NavigationMenu from "../user_page_components/NavigationMenu/NavigationMenu";
import PlaningMainPage from "../user_page_components/PlaningSection/PlaningMainPage/PlaningMainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRout from "../context/PrivateRout";
import TrainingNow from "../user_page_components/trainingNow/TrainingNow";


const UserPage = () => {
    return (
        <PrivateRout>
                <NavigationMenu>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/planmain" element={<PlaningMainPage />} />
                        <Route path="/trainingNow" element={<TrainingNow />} />
                    </Routes>
                </NavigationMenu>
        </PrivateRout>
    )
}

export default UserPage