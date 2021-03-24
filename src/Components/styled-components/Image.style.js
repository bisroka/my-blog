import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledImage = styled.img`
    display: block;
    width: 100%;
    grid-area: image;
    ${({helloSection}) => 
    helloSection && css`
        width: 100%;
        z-index: 0;
        max-width: 500px;
        align-self: end;
        justify-self: end;
        @media ${device.tablet} {
            max-width: 50vh;
        }
        @media ${device.laptop} {
            max-width: 600px;
        }
    `}

    ${({blogSection})=>
        blogSection && css `
        display: block;
        background: grey;
        height: 200px;
        width: 100%;
        object-fit: cover;
        opacity: 0.5;
        transition: 0.3s;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        @media ${device.laptop} {
           max-width: 100%;
        }
    `}
`