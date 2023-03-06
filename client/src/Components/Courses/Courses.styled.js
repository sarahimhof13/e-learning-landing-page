import styled from "styled-components";
import { Device } from "../../Devices";

export const CoursesContainer = styled.section`
    display: flex;
    background: linear-gradient(180deg, #FFFFFF 0%, #F0F1FF 100%);
    justify-content: center;
    padding: 0 16px 80px 16px;
    flex-wrap: wrap;
    gap: 40px;

    @media ${Device.tablet} {
        gap: 56px 10px;
        padding: 0 39px 86px 39px;
    }

    @media ${Device.laptopL} {
        padding: 0 165px 140px 165px;
        gap: 80px 30px;
    }
    
`