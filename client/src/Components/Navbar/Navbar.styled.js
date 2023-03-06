import styled from "styled-components";
import { Device } from "../../Devices";

export const NavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    position: relative;
    z-index: 1;
    
    & a {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--navy-blue);
    }

    @media ${Device.tablet} {
        margin: 24px 40px;
    }

    @media ${Device.laptopL} {
        margin: 24px 165px;

        & a {
            font-size: 2.25rem;
        }
    }
`
