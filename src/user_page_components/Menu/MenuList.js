import React from "react";
import { Link } from "react-router-dom";

import {
    MenuContainers,
    MenuList,
    SingleTitle,
    MenuListElement,
    MenuListElementA, Search, SearchIcon, InputContainerSearch, SearschTitle, CloseMenu, CloseIcon
} from "./MenuListElements";
import {FcSearch } from "react-icons/fc";
import {BiDumbbell } from "react-icons/bi";
import {FcPlanner } from "react-icons/fc";
import {IoBarChartSharp} from "react-icons/io5";
import {GiNotebook} from "react-icons/gi"
import {FcSportsMode} from "react-icons/fc"
import {FcDataSheet} from "react-icons/fc"
import {AiOutlineFileDone} from "react-icons/ai"
import {IoBarChart} from "react-icons/io5"



const IconAndTitle = ({isTitle, name, children, display, goTo, pageSizeWight}) => {
  return (
      <Link to={`${goTo}`}>
            <MenuListElement isTitle={isTitle} display={display? true : false}><MenuListElementA style={{ fontSize: `${isTitle? "250%" : "130%"}`}}>
                {children}
            </MenuListElementA><SingleTitle style={{fontSize: `${isTitle? "25px" : "16px"}`, opacity: (pageSizeWight> 768 )? `${display? "100%" : "0"}` : "100%"}} >{name}</SingleTitle></MenuListElement>
      </Link>
  )
}



const MenuListMenu = ({isMouseon,shadow,pageSizeWight, setDisplayMenu}) => {

    console.log(pageSizeWight)
  return(
      <>
          <MenuList>
              <MenuContainers>
                  <CloseMenu onClick={() => setDisplayMenu(false)} style={{display: (pageSizeWight < 768)? "bolck" : "none"}}>
                      <CloseIcon/>
                  </CloseMenu>
              </MenuContainers>
              <MenuContainers style={{display: (pageSizeWight < 768)? "none" : "block"}}>
                  <Search><SearchIcon><FcSearch style={{fontSize: "55px", margin: "8px"}}/></SearchIcon><SearschTitle>Szukaj:</SearschTitle><InputContainerSearch style={{opacity: isMouseon? "100%" : "0", transition: "all 600ms ease-in"}}><input style={{width: "100%", height: "30px", borderRadius: "7px", border: "none"}} /></InputContainerSearch></Search>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} goTo={"/strefauzytkownika/trainingNow"} display={isMouseon} name={"Treining"} isTitle={true}>
                      <FcSportsMode style={{margin: "auto"}}/>
                  </IconAndTitle>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} goTo={"/strefauzytkownika/planmain"} display={isMouseon} name={"Planuj"} isTitle={true}><GiNotebook style={{margin: "auto"}}></GiNotebook></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Cwiczenia"} isTitle={false}><AiOutlineFileDone style={{margin: "auto"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Plan Treningowy"} isTitle={false}><FcDataSheet style={{margin: "auto"}}/></IconAndTitle>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Statystyki"} isTitle={true}><IoBarChartSharp style={{margin: "auto"}} /></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Kalendarz"} isTitle={false}><FcPlanner style={{margin: "auto"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Ćwiczenia"} isTitle={false}><BiDumbbell style={{margin: "auto"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Trening"} isTitle={false}><IoBarChart style={{margin: "auto"}}/></IconAndTitle>
              </MenuContainers>
          </MenuList>
      </>
  )
}

export default MenuListMenu