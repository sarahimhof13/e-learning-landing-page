import styled from "styled-components";
import { Device } from "../../Devices";

export const Button1 = styled.button`
    background-color: var(--navy-blue);
    color: var(--white);
    width: 140px;
    height: 48px;
    border-radius: 28px;
    border: none;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
        background-color: var(--purple-grey);
        transition: 0.2s;
    }

    @media ${Device.laptopL} {
        font-size: 1.125rem;
        width: 167px;
        height: 56px;
    }
`

export const Button2 = styled.button`
    background: linear-gradient(180deg,#FF6F48 0.04%,#F02AA6 100%);
    width: 167px;
    height: 56px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    border: none;
    border-radius: 31.5px;

    &:hover {
        opacity: 0.5;
        transition: 0.2s;
    }

    @media ${Device.laptopL} {
        font-size: 1.125rem;
        width: 167px;
        height: 63px;
    }
`

export const Button3 = styled.button`
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    border: none;
    border-radius: 28px;
    width: 140px;
    height: 48px;
    background: var(--blue-pink-gradient);

    &:hover {
        opacity: 0.5;
        transition: 0.2s;
    }

    @media ${Device.laptopL} {
        width: 167px;
        height: 56px;
        font-size: 1.125rem;
    }
`   