import { createGlobalStyle } from 'styled-components';
import { Device } from './Devices';

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-grey: #666CA3;
        --navy-blue: #13183F;
        --grey: #83869A;
        --bright-pink: #F74780;
        --light-pink: #FFA7C3;
        --white: #FFFFFF;
        --orange-pink-gradient: linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%);
        --blue-pink-gradient: linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%);
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 3.15rem;

        @media ${Device.laptopL} {
            font-size: 3.5rem;
            line-height: 4.41rem;
        }
    }

    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 800;

        @media ${Device.laptopL} {
            font-size: 2rem;
            line-height: 2.5rem;
        }

    }

    h3 {
        font-size: 1.25rem;
        line-height: 1.58rem;
        font-weight: 800;

        @media ${Device.laptopL} {
            font-size: 1.5rem;
            line-height: 1.89rem;
        }
    }

    p {
        font-weight: 500;
        color: var(--grey);

        @media ${Device.laptopL} {
            font-size: 1.125rem;
        }
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle