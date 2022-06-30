import React from "react";
import {Box, WelcomeTitle, LastTrainingTitle, AmmountOfTreinings, ColumnTop, ColumnBottom} from "./MainPageElements";


export default () => {
    return (
        <>
            <Box>
                <ColumnTop>
                    <WelcomeTitle>Witaj UserName</WelcomeTitle>
                    <LastTrainingTitle>Ostatni trening zrobiłeś: 20.02.2022</LastTrainingTitle>
                    <AmmountOfTreinings>Ilość zrobionych treningów: 22</AmmountOfTreinings>
                </ColumnTop>
                <ColumnBottom>
                </ColumnBottom>

            </Box>
        </>
    )
}