import styled, { css } from "styled-components"
import { device } from "../../utils/device"

export const StyledParagraph = styled.p`
   ${({ section }) =>
    section==="news" &&
    css`
     text-align: center;
  font-size: 25px;
    `}
    ${({ section }) =>
    section === "aboutme" &&
    css`
      margin: 1vh 0vh;
      padding: 0 5vh;
      font-size: 2vh;
  @media ${device.tablet} {
    font-size: 4vh;
  }
    `}
    ${({ section }) =>
    section === "contact" &&
    css`
      position: absolute;
      width: 45vw;
      left: 45vw;
      top: 15vh;
      font-size: 20px;
      @media ${device.tablet} {
        font-size: 3.5vh;
        top: 15vh;
      }
      @media ${device.laptop} {
        font-size: 3.5vh;
        top: 15vh;
        left: 20vw;
      }
    `}
`