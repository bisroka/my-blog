import styled, { css } from "styled-components"
import { device } from "../../utils/device"

export const StyledParagraph = styled.p`
   ${({ section }) =>
    section==="news" &&
    css`
     text-align: center;
  font-size: ${props => props.theme.fontSize.l};
    `}
    ${({ section }) =>
    section === "aboutme" &&
    css`
      margin: 1vh 0vh;
      padding: 0 5vh;
      font-size: ${props => props.theme.fontSize.l};
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.xl};
  }
    `}
    ${({ section }) =>
    section === "contact" &&
    css`
      position: absolute;
      width: 45vw;
      left: 45vw;
      top: 15vh;
      font-size: ${props => props.theme.fontSize.l};
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.xl};
        top: 15vh;
      }
      @media ${device.laptop} {
        font-size: ${props => props.theme.fontSize.l};
        top: 15vh;
        left: 20vw;
      }
    `}
`