import styled from "styled-components";
import { Device } from "../../Devices";

export const TitleCardContainer = styled.div`
    border-radius: 15px;
    background: var(--orange-pink-gradient);
    color: var(--white);
    padding: 25px 28px;
    width: 100%;

    @media ${Device.tablet} {
        flex: 1;
        min-width: 283px;
        padding: 56px 28px;
    }

    @media ${Device.laptopL} {
        padding: 64px 32px;
    }
`

export const CardContainer = styled.div`
    border-radius: 15px;
    padding: 56px 28px 32px 28px;
    background-color: var(--white);
    position: relative;
    width: 100%;

    @media ${Device.tablet} {
        flex: 1;
        min-width: 283px;
    }

    & h4 {
        margin-bottom: 16px;

        @media ${Device.laptopL} {
            margin-bottom: 24px;
        }
    }

    & p {
        margin-bottom: 24px;

        @media ${Device.laptopL} {
            min-height: 112px;
        }
    }

    & a {
        color: var(--bright-pink);
        font-size: 1.125rem;
        font-weight: 700;

        &:hover {
            color: var(--light-pink);
            transition: 0.2s;
        }
    }
`

export const CardImg = styled.img`
    position: absolute;
    top: -24px;
`