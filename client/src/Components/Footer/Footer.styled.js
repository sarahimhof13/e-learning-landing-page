import styled from "styled-components";
import { Device } from "../../Devices";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 16px;
    position: relative;
    z-index: 1;
    background-color: var(--navy-blue);
    
    & a {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--white);
    }

    @media ${Device.tablet} {
        padding: 36px 40px;
    }

    @media ${Device.laptopL} {
        padding: 32px 165px;

        & a {
            font-size: 2.25rem;
        }
    }
`