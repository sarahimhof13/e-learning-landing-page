import styled from "styled-components";
import { Device } from "../../Devices";

export const HeroContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 38px 16px 46px 16px;

    & h1 {
        margin-bottom: 25px;

        @media ${Device.laptopL} {
            margin-bottom: 29px;
        }
    }

    & p {
        margin-bottom: 24px;

        @media ${Device.laptopL} {
            margin-bottom: 40px;
        }
    }

    @media ${Device.tablet} {
        margin: 0 0 66px 16px;
        padding: 75px 39px;
        overflow-x: clip;
        flex-direction: row;
    }

    @media ${Device.laptopL} {
        padding: 154px 165px;
        margin: 0;
    }
`

export const HeroText = styled.div`
    @media ${Device.tablet} {
        max-width: 398px;
    }

    @media ${Device.laptopL} {
        max-width: 457px;
    }
`

export const HeroImgMobile = styled.img`
    width: 100%;
    display: block;
    margin: 0 auto;
    padding-top: 46px;

    @media ${Device.tablet} {
        display: none;
    }
`

export const HeroImgContainer = styled.div`
    margin: 0 auto;

    @media ${Device.tablet} {
        width: 695px;
        height: 723px;
        top: -175px;
        left: calc(50% - 15px);
        position: absolute;
        overflow-x: clip;
    }

    @media ${Device.laptop} {
        left: calc(50% - -90px);
    }

    @media ${Device.laptopL} {
        width: 1046px;
        height: 938px;
        top: -240px;
    }
`

export const HeroImg = styled.picture`

`

export const HeroImgDesktop = styled.source`
    @media ${Device.laptopL} {
        content: url('../assets/image-hero-desktop@2x.png');
        width: 1046px;
        height: 938px;
    }
`

export const HeroImgTablet = styled.source`
    @media ${Device.tablet} {
        content: url('../assets/image-hero-tablet@2x.png');
        width: 100%;
        position: absolute;
    }
`