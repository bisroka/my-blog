import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledActivityCard = styled.article`
    width: 85%;
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} {
    max-width: 25%;
    margin: 5vh 1vw;
  } 

  img{
    display: block;
    height: 250px;
    margin: 3vh 0;
    @media ${device.tablet} {
        max-width: 100%;
    }
  } 
    .description{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh 3vh;
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontSize.l};
    color: ${props => props.theme.colors.gray};
    font-style: normal;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 25px;
    box-shadow: ${props=>props.theme.shadows.cardShadow};
    @media ${device.tablet} {
        padding: 1.5vh 1.5vh;
        max-width: 50vh;
        height: 40vh;
    }
    h3 {
    color: ${props => props.theme.colors.gray};
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.l};
        }
    }
    p {
    @media ${device.laptop} {
        font-size: ${props => props.theme.fontSize.l};
        }
    }
}`