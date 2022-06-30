import styled from "styled-components";
import szatnia from "../../images/szatnia.jpg"

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  background-image: url(${szatnia});
  background-size: cover;
  position: relative;
  z-index: 1;
  &:after{
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    //background-color: rgba(107, 209, 247, 1);
    background-image: radial-gradient(circle, rgba(107, 209, 247, 0.36) 0%, rgba(41, 53, 86, 0) 100%);
    backdrop-filter: blur(10px);
  }
`

export const ColumnTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`


export const ColumnBottom = styled.div`
  width: 100%;
  height: 50%;
  `


export const  WelcomeTitle = styled.h1`
  color: black;
  z-index: 3;
  font-size: 25px;

`

export const LastTrainingTitle = styled.h1`
  color: black;
  z-index: 3;
  font-size: 25px;

`

export const AmmountOfTreinings = styled.h1`
  color: black;
  z-index: 3;
  font-size: 25px;

`

