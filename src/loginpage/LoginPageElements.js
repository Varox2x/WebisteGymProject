import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222222;
    z-index: 3;
    opacity: 80%;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

export const Wrapper = styled.div`
  border: 4px solid #3A71D1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(132,175,255,0.8603816526610644) 0%);
  border-radius: 15px;
  z-index: 5;
  max-height: 500px;
  min-width: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const LabelInfo = styled.label`
    margin-top: 15px;
    position: relative;
  padding-bottom: 20px;
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 2px;
      background: black;
    }
`

export const InputTitle = styled.h3`
    text-align: center;
  margin-bottom: 5px;
`
export const MainTitle = styled.h2`
    text-align: center;
    margin-bottom: 8px;
  font-size: 25px;
  font-weight: bold;
`

export const InputInfo = styled.input`
    height: 30px;
    border-radius: 7px;
    border: none;
    &:focus{
      border: 2px solid black;
    }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 20px;

`

export const LoginButton = styled.button`
  padding: 10px;
  border-radius: 14px;
  background: #4753D5;
  border: none;
  transition: 500ms;
  &:hover{
    background: #FFFFFF;
  }
`

export const Error = styled.p`
  color: red;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  //background: #232a34;
`;