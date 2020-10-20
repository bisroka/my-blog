import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledImage = styled.img`
        margin: 1vh;
        display: block;
        width: 30vw;
        border-radius: ${({circle})=>circle? "50%":"none"};
    @media ${device.tablet} {
        width: 50vw;
    }
    @media ${device.laptop} {
        width: 15vw;
    }
    ${({ contact }) =>
    contact &&
    css`
        position: absolute;
        bottom: -5vh;
        height: 35vh;
        @media ${device.tablet} {
        height: 40vh;
    }
    `}
    ${({hello}) => 
    hello && css `
        @media ${device.tablet} {
            width: 50vh;
            height: 50vh;
        }
        @media ${device.laptop} {
            width: 40%;
            height: 40%;
        }
    `}
    ${({newsCard})=>
        newsCard && css `
        display: block;
        background: grey;
        max-height: 200px;
        max-width: 100%;
        object-fit: cover;
        opacity: 0.7;
        transition: 0.3s;
        @media ${device.laptop} {
            /* height: auto; */
            max-width: 100%;
            /* object-fit: cover; */
    }
        :hover {
            opacity: 1;
        }`}
`