import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledImage = styled.img`
    /* border-radius: ${({circle})=>circle? "50%":"none"}; */
    display: block;
    width: 100%;
    grid-area: image;
        /* @media ${device.tablet} {
            width: 20vw;
        }
        @media ${device.laptop} {
            width: 15vw;
        } */
    ${({helloSection}) => 
    helloSection && css`
        /* height: 80vw; */
        width: 100%;
        z-index: 0;
        max-width: 500px;
        align-self: end;
        justify-self: end;
        @media ${device.tablet} {
            max-width: 50vh;
            /* height: 50vh; */
        }
        @media ${device.laptop} {
            max-width: 600px;
            /* height: 50vh; */
        }
    `}
    /* ${({ contact }) =>
    contact &&
    css`
        position: absolute;
        bottom: -6.1vh;
        left:-1vw;
        height: 35vh;
        z-index:2;
        @media ${device.tablet} {
        height: 40vh;
    }
    `} */

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
        /* :hover {
            opacity: 1;
        } */
    `}
`