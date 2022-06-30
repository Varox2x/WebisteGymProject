import React from "react";
import styled from 'styled-components';



export const InfoContainer = styled.div`
    width: 100%;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: ${(props) => props.displayorder? "row" : "row-reverse" };
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;
  }
  @media screen and (min-width: 769px) {
    height: 300px;
  }
`

export const ColumnFirst = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-right: 20px;
    padding-left: 30px;
    width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;

  }
`

export const UnderTitle = styled.h2`
    color: black;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  @media screen and (min-width: 769px) {
    margin-bottom: 50px;
  }
`
export const Infocontent = styled.p`
    color: black;
    font-size: 16px;
    text-align: left;
    line-height: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`

export const ColumnSecend = styled.div`
    width: 50%;
    background: #f9f9f9;
    height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    position: relative;
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      right: 40px;
      left: 40px;
      height: 5px;
      background: #6BD1F7;
      opacity: 40%;
      border-radius: 3px;
    }
  }

`

export const AnimatedPoto = styled.img`
  //width: 40px;
  height: 80%;
  max-width: 60%;
`