import React, {useState} from "react";
import Video from "../../videos/benchpress.mp4"
import {HeroContainer, VideoBg, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements";
import {Button} from "../ButtonElement";


const HeroSection = ({showRegisterWindow}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>TITLE</HeroH1>
                <HeroP>Title Description</HeroP>
                <HeroBtnWrapper>
                    <Button onClick={() => showRegisterWindow()} to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
