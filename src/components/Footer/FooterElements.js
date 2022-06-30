import styled from 'styled-components'


export const FooterContainer = styled.div`
  width: 100%;
  background: #222222;
  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const FooterWraper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`

export const InfoBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const InfoColumn = styled.div`
  width: 30%;
  height: 100%;
  border: 2px solid red;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const CreatedBy = styled.p`
  color: white;
  margin-bottom: 10px;
`