import { Button2 } from "../Buttons/Buttons.styled";
import { HeroContainer, HeroText, HeroImgContainer, HeroImg, HeroImgDesktop, HeroImgTablet, HeroImgMobile } from "./Hero.styled";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>
                <h1>Maximize skill, minimize budget</h1>
                <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <Button2>Get Started</Button2>
            </HeroText>
            <HeroImgContainer>
                <HeroImg>
                    <HeroImgDesktop />
                    <HeroImgTablet />
                    <HeroImgMobile src="../assets/image-hero-mobile@2x.png" />
                </HeroImg>
            </HeroImgContainer>
        </HeroContainer>
    );
}

export default Hero;