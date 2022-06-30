import React from "react";
import {useState, useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./animatebench.css"
import styled from 'styled-components'

import boy from "./animationimages/czlowiek.png";
import lawka from "./animationimages/lawka.png";
import sztanga from "./animationimages/sztanga.png";

import lewasztangasrodek from "./animationimages/lewasztanga.png";
import prawasztangasrodek from "./animationimages/prawasztanga.png";

import lewyciezarsroek from "./animationimages/duzylewyciezar.png";
import prawyciezarsroek from "./animationimages/duzyciezar.png";

import lewyduzyciezar from "./animationimages/duzylewyciezar1.png";
import prawyduzyciezar from "./animationimages/duzyciezar1.png";

import malyciezarlewy from "./animationimages/malylewyciezar.png";
import malyciezarprawy from "./animationimages/malyciezarprawy.png";

import ostatmoasztangalewa from "./animationimages/ostatniaczescsztangi.png";
import ostatniasztangaprawa from "./animationimages/ostatniaczescsztangiprawa.png";

import phone from "./animationimages/phone.png"
import phonetext from "./animationimages/phonetext.png"
import phonebench from "./animationimages/phonebench.png"


import laptop from "./animationimages/laptop.png"
import wykres from "./animationimages/wykres.png"





const styles = {height: "100%", width: "100%", display: "flex"};

const Bench = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 769px) {
    padding-top: 35px;
  }
`

const Boy = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
    max-width: 100%;
`
const Lawka = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
    max-width: 100%;

`
const Sztanga = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Lewasztangasrodek = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Prawasztangasrodek = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Lewyciezarsroek = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Prawyciezarsroek = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Lewyduzyciezar = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Prawyduzyciezar = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Malyciezarlewy = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Malyciezarprawy = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Ostatmoasztangalewa = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`
const Ostatniasztangaprawa = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
      max-width: 100%;

`

const PhoneWrapper = styled.div`
    position: relative;
    width: 50%;
`

const Phone = styled.img`
  position: absolute;
  top: 0;
  max-width: 100%;
  max-height: 100%;
`
const PhoneText = styled.img`
  position: absolute;
  top: 0;
  max-width: 100%;
  max-height: 100%;
`

const PhoneBench = styled.img`
  position: absolute;
  top: 0;
  max-width: 100%;
  max-height: 100%;
`

const LaptopWrapper = styled.div`
  position: relative;
  width: 100%;
`


const Laptop = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
`

const Wrapper = styled.div`
  width: 50%;
  @media screen and (min-width: 769px) {
    padding-top: 20px;
  }
`





export default ({startanimation, animationLaptop}) => {


    return (
        <div style={styles}>
            <Wrapper>
                <LaptopWrapper className={(animationLaptop == false)? "laptopShowNo" : "laptopShowYes"}>
                    <Laptop className={(animationLaptop == false)? "laptopShowNo" : "showLaptomAime"} src={laptop}/>
                    <Laptop className={(animationLaptop == false)? "laptopShowNo" : "wykresanime"} src={wykres}/>
                </LaptopWrapper>

                <Bench className={(startanimation == false)? "" : "startanime"} >
                    <Boy data-aos-easing="ease-in-back"  data-aos-once="true" data-aos="fade-down"  src={boy}/>
                    <Lawka data-aos-easing="ease-out-back"  data-aos-once="true" data-aos="fade-up" src={lawka}/>
                    <Sztanga data-aos-delay="900"  data-aos-once="true" data-aos="fade-down"  src={sztanga}/>
                    <Lewasztangasrodek  data-aos-easing="ease-in-out" data-aos-delay="900"  data-aos-once="true" data-aos="fade-right"   src={lewasztangasrodek}/>
                    <Prawasztangasrodek  data-aos-easing="ease-in-out" data-aos-delay="900"  data-aos-once="true" data-aos="fade-left"  src={prawasztangasrodek}/>
                    <Lewyciezarsroek  data-aos-easing="ease-in-out" data-aos-delay="1400"  data-aos-once="true" data-aos="fade-right"  src={lewyciezarsroek}/>
                    <Prawyciezarsroek  data-aos-easing="ease-in-out" data-aos-delay="1400"  data-aos-once="true" data-aos="fade-left"  src={prawyciezarsroek}/>
                    <Lewyduzyciezar  data-aos-easing="ease-in-out" data-aos-delay="2000"  data-aos-once="true" data-aos="fade-right"  src={lewyduzyciezar}/>
                    <Prawyduzyciezar  data-aos-easing="ease-in-out" data-aos-delay="2000"  data-aos-once="true" data-aos="fade-left"  src={prawyduzyciezar}/>
                    <Malyciezarlewy  data-aos-easing="ease-in-out" data-aos-delay="2300"  data-aos-once="true" data-aos="fade-right"  src={malyciezarlewy}/>
                    <Malyciezarprawy  data-aos-easing="ease-in-out" data-aos-delay="2300"  data-aos-once="true" data-aos="fade-left"  src={malyciezarprawy}/>
                    <Ostatmoasztangalewa  data-aos-easing="ease-in-out" data-aos-delay="2500"  data-aos-once="true" data-aos="fade-right" src={ostatmoasztangalewa}/>
                    <Ostatniasztangaprawa  data-aos-easing="ease-in-out" data-aos-delay="2500"  data-aos-once="true" data-aos="fade-left"  src={ostatniasztangaprawa}/>
                </Bench>
            </Wrapper>

            <PhoneWrapper data-aos-duration="1000" data-aos="new-animation"   >
                <Phone src={phone}/>
                <PhoneText className={(startanimation == false)? "displaynone" : "gymprogres"}  src={phonetext}/>
                <PhoneBench className={(startanimation == false)? "displaynone" : "startphone"} src={phonebench}/>
            </PhoneWrapper>
        </div>
    )
}
//
// <Lawka src={lawka}/>
// <Sztangamiddlesrc={sztanga}/>
// <SztangaSecendsrc={sztangasc} />
// <DuzyCiezarsrc={ciearbig}/>
// <DuzyCiezar2 src={ciearbig}/>
// <MalyCiezar src={ciezarsmall}/>
// <SztangaSecendosrc={sztangasc} />
// <DuzyCiezaro src={ciearbig}/>
// <DuzyCiezar2osrc={ciearbig}/>
// <MalyCiezarosrc={ciezarsmall}/>