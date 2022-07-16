import React from "react";
import InfoSection from "../InfoSection";
import {CreatedBy, FooterContainer, FooterWraper, InfoBox, InfoColumn} from "./FooterElements";


const Footer = () => {
  return (

          <FooterContainer>
              <FooterWraper>
                <InfoBox>
                    <InfoColumn/>
                    <InfoColumn/>
                    <InfoColumn><CreatedBy>Created by Hubert Rutkowski</CreatedBy></InfoColumn>
                </InfoBox>
              </FooterWraper>
          </FooterContainer>
  )
}

export default Footer