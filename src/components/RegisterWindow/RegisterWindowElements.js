import styled from "styled-components";

export const RegisterContainer = styled.div`
    height: 500px;
    padding: 0 30px;
    position: fixed;
    top: 150px;
    z-index: 6;
    width: 100%;
    display: ${props => (props.display == true)? "block" : "none"};
`

export const RegisterWraper = styled.div`
    max-width: 700px;
    width: 100%;
    height: 100%;
    border-radius: 3%;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: 40px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 9;
    position: relative;
    border: 3px solid #6BD1F7;
`

export const Exit = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px;
  border-radius: 50px;
  background: #6BD1F7;
  border: none;
  cursor: pointer;
  opacity: 50%;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  max-height: 18%;
  height: 18%;
`

export const ArearWrapper = styled.div`
  width: 100%;
  height: 18%;
  max-height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 0 80px;
    border-bottom: 2px solid rgba(57, 159, 219, 0.2);
  }
  //&:after{
  //  content: "";
  //  background: #6BD1F7;
  //  right: 20px;
  //  left: 20px;
  //  bo
  //}
`

export const SingleTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
`


export const ButtonRegister = styled.button`
  padding: 10px 40px;
  margin: auto;
  margin-top: 20px;
  border-radius: 50px;
  background: #6BD1F7;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    }
`

export const InputRegister = styled.input`
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 0 5px;
  display: block;
  @media screen and (max-width: 768px) {
  }
`
