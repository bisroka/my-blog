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
        right: 0;
        bottom: 0;
        width: 40vh;
        height: 40vh;
            @media ${device.tablet} {
                width: 50vh;
                height: 50vh;
            }
            @media ${device.laptop} {
                width: 75vh;
                height: 75vh;
            }
    `}
    ${({newsCard})=>
    newsCard && css `
    display: block;
    background: grey;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    transition: 0.3s;
    @media ${device.laptop} {
        width: 100%;
    height: 100%;
        object-fit: cover;
  }
    :hover {
        opacity: 1;
    }`}
`