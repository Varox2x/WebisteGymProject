import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SidebarLink, SideBtnWrap, SidebarMenu} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="oplikacji" onClick={toggle}>
                        O aplikacji
                    </SidebarLink>
                    <SidebarLink to="progres" onClick={toggle}>
                        Progres
                    </SidebarLink>
                    <SidebarLink to="howitworks" onClick={toggle}>
                        How it works
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar