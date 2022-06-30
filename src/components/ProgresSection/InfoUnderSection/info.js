import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    InfoContainer,
    Infocontent,
    UnderTitle,
    ColumnSecend,
    ColumnFirst,
    AnimatedPoto
} from "./infoUnderSectionElements"
import TreiningNow from "../../../images/undraw_Charts_re_5qe9.png"

const SingleInfo = ({backgroundColor, title, description, displayOrder, img}) => {

    useEffect(() => {
        Aos.init({duration: 1000});
    },[])
  return (
      <>
          <InfoContainer background={backgroundColor} displayorder={displayOrder}>
              <ColumnFirst>
                  <UnderTitle>{title}</UnderTitle>
                  <Infocontent>{description}</Infocontent>
              </ColumnFirst>
              <ColumnSecend>
                <AnimatedPoto data-aos-once="true" data-aos={displayOrder? "fade-left" : "fade-right"} src={img}/>
              </ColumnSecend>
          </InfoContainer>
      </>
  )
}

export default SingleInfo