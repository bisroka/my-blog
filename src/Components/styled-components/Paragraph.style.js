import styled, { css } from "styled-components"
import { device } from "../../utils/device"

export const StyledParagraph = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.gray}
   ${({ section }) =>
    section==="news" &&
    css`
     text-align: center;
    `}
    ${({ section }) =>
    section === "aboutme" &&
    css`
      margin: 1vh 0vh;
      padding: 0 5vh;
    `}
    ${({ section }) =>
    section === "contact" &&
    css`
      position: absolute;
      width: 45vw;
      left: 45vw;
      top: 15vh;
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.l};
      }
      @media ${device.laptop} {
        left: 20vw;
      }
    `}
`