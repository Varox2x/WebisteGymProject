import React from "react";
import {
    Container,
    Navigation,
    UserName,
    Logo,
    NavigationContainer,
    Menu,
    Wrapper,
    MobileMenuIcon, BackGround, BackGroundVideo
} from "./NavigationMenuElements";
import MenuListMenu from "../Menu/MenuList";
import {useState, useEffect} from "react";
import {useAuth} from "../../context/AuthContext";
import {FaBars} from 'react-icons/fa'
import Video from "../../videos/benchpress.mp4";


export default (props) => {

    const [mauseOn, setMauseOn] = useState(false);
    const [cursorePozition, setCursorPozition] = useState(null);
    const [pageSize, setPageSize] = useState("850px")
    const [pageSizeWight, setpageSizeWight] = useState("")
    const {currentUser} = useAuth();
    const [displayMenu, setDisplayMenu] = useState(true)



    useEffect(() => {
        setPageSize(`${(window.innerHeight- 80).toString()}px`);
        setpageSizeWight(`${(window.innerWidth).toString()}`);
        window.addEventListener('resize', setSize)

    },[])

    function setSize(){
        setPageSize(`${(window.innerHeight- 80).toString()}px`);
        setpageSizeWight(`${(window.innerWidth).toString()}`);
    }


    return (
        <>
            <MobileMenuIcon onClick={() => setDisplayMenu(!displayMenu)} style={{display: (displayMenu == false)? "block" : "none"}}>
                <FaBars/>
            </MobileMenuIcon>
            <Navigation>
                <NavigationContainer>
                    <Logo>GymProgre$</Logo>
                    <UserName>{currentUser.email}</UserName>
                </NavigationContainer>
            </Navigation>
            <Container height={pageSize}>
                <Menu props={displayMenu}  onMouseEnter={() => setMauseOn(true)} onMouseLeave={() => setMauseOn(false)}>
                    <MenuListMenu setDisplayMenu={setDisplayMenu} pageSizeWight={pageSizeWight} isMouseon={mauseOn}/>
                </Menu>
                <Wrapper blur={mauseOn == true && pageSizeWight > 768}>
                    <BackGround>
                        <BackGroundVideo  autoPlay loop muted src={Video} type='video/mp4'></BackGroundVideo>
                    </BackGround>
                    {props.children}
                </Wrapper>
            </Container>
        </>
    )
}