import React from "react";
import { Link } from "react-router-dom";

import {
    MenuContainers,
    MenuList,
    SingleTitle,
    MenuListElement,
    MenuListElementA, Search, SearchIcon, InputContainerSearch, SearschTitle, CloseMenu, CloseIcon, InputSearch
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

import {CgGym} from "react-icons/cg"
import {GrPlan} from "react-icons/gr"
import {AiOutlineCalendar} from "react-icons/ai"
import {IoMdPaperPlane} from "react-icons/io"
import {BsSearch} from "react-icons/bs"




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

    function closeMenu(){
        setDisplayMenu(false);
    }
  return(
      <>
          <MenuList onClick={() => closeMenu()}>
              <MenuContainers>
                  <CloseMenu onClick={() => setDisplayMenu(false)} style={{display: (pageSizeWight < 768)? "bolck" : "none"}}>
                      <CloseIcon/>
                  </CloseMenu>
              </MenuContainers>
              <MenuContainers style={{display: (pageSizeWight < 768)? "none" : "block"}}>
                  <Search><SearchIcon><BsSearch style={{fontSize: "55px", margin: "8px", color: "#85BAFF"}}/></SearchIcon><SearschTitle>Szukaj:</SearschTitle><InputContainerSearch style={{opacity: isMouseon? "100%" : "0", transition: "all 600ms ease-in"}}><InputSearch /></InputContainerSearch></Search>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} goTo={"/strefauzytkownika/trainingNow"} display={isMouseon} name={"Treining"} isTitle={true}>
                      <CgGym style={{margin: "auto", color: "#85BAFF"}}/>
                  </IconAndTitle>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} goTo={"/strefauzytkownika/planmain"} display={isMouseon} name={"Planuj"} isTitle={true}><GiNotebook style={{margin: "auto", color: "#85BAFF"}}></GiNotebook></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Cwiczenia"} isTitle={false}><AiOutlineFileDone style={{margin: "auto", color: "#85BAFF"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Plan Treningowy"} isTitle={false}><IoMdPaperPlane style={{margin: "auto", color: "#85BAFF"}}/></IconAndTitle>
              </MenuContainers>
              <MenuContainers>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Statystyki"} isTitle={true}><IoBarChartSharp style={{margin: "auto", color: "#85BAFF"}} /></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Kalendarz"} isTitle={false}><AiOutlineCalendar style={{margin: "auto", color: "#85BAFF"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Ćwiczenia"} isTitle={false}><BiDumbbell style={{margin: "auto", color: "#85BAFF"}}/></IconAndTitle>
                  <IconAndTitle pageSizeWight={pageSizeWight} display={isMouseon} name={"Trening"} isTitle={false}><IoBarChart style={{margin: "auto", color: "#85BAFF"}}/></IconAndTitle>
              </MenuContainers>
          </MenuList>
      </>
  )
}

export default MenuListMenu