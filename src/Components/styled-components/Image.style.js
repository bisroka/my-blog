import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledImage = styled.img`
        margin: 1vh;
        display: block;
        width: 30vw;
        border-radius: ${({circle})=>circle? "50%":"none"};
    @media ${device.tablet} {
        width: 20vw;
    }
    @media ${device.laptop} {
        width: 15vw;
    }
    ${({ contact }) =>
    contact &&
    css`
        position: absolute;
        bottom: -6.1vh;
        left:-1vw;
        height: 35vh;
        @media ${device.tablet} {
        height: 40vh;
    }
    `}
    ${({hello}) => 
    hello && css `
        width: 80vw;
        height: 80vw;
        z-index: 0;
        @media ${device.tablet} {
            width: 50vh;
            height: 50vh;
        }
        @media ${device.laptop} {
            width: 80%;
            height: 80%;
            position: absolute;
            bottom: 0;
            right:-10%;
        }
    `}
    ${({newsCard})=>
        newsCard && css `
        display: block;
        background: grey;
        height: 200px;
        width: 100%;
        object-fit: cover;
        opacity: 0.7;
        transition: 0.3s;
        @media ${device.laptop} {
           max-width: 100%;
        }
        :hover {
            opacity: 1;
        }`}
`