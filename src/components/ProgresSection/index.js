import React from "react";
import {ProgresContainer, ProgresWraper} from "./ProgresSectionElements";
import SingleInfo from "./InfoUnderSection/info"
import {singleInfo1, singleInfo3, singleInfo2} from "./InfoUnderSection/Data";


const ProgresSection = () => {
  return (
      <>
          <ProgresContainer id={"Progres"}>
              <ProgresWraper>
                  <SingleInfo {...singleInfo1}/>
                  <SingleInfo {...singleInfo2}/>
                  <SingleInfo {...singleInfo3}/>
              </ProgresWraper>
          </ProgresContainer>
      </>
  )
}

export default ProgresSection