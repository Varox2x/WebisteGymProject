import React, {useState} from "react";
import {Button} from "../ButtonElement";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    PuzzleBackground
} from "./infoElements";
import Animation from "./animationpuzzles/Animation";





const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt, primary, dark, dark2, showAnimation, showRegisterWindow}) => {

    const [startanimation, setstartanimation] = useState(false);
    const [startanimationLaptop, setstartanimationLaptop] = useState(false);



    document.addEventListener('scroll', function (e) {
        if (window.scrollY >= 700){
            setstartanimation(true)
            setTimeout(() => setstartanimationLaptop(true), 4500)
        }
    })


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button onClick={showRegisterWindow}
                                            to="home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1:0}
                                            dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            {/*<ImgWrap>*/}
                            {/*    <Img src={img} alt={alt}/>*/}
                            {/*</ImgWrap>*/}
                            {/*<Animation animationLaptop={startanimationLaptop} startanimation={startanimation}/>*/}
                            {!showAnimation && <Animation animationLaptop={startanimationLaptop} startanimation={startanimation}/>}
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection