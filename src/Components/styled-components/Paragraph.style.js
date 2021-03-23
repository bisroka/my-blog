import styled, { css } from "styled-components"
import { device } from "../../utils/device"

export const StyledParagraph = styled.p`
/* display: block; */
/* margin: 15vh; */
  font-family: ${props => props.theme.fontFamily.paragraph};
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.gray};
  margin: 5vh 0;
  line-height: 24px;
  ${({blogSection})=>
  blogSection && css`
    max-width: 85%;
    margin: 1vh 0;
    /* height: 30%; */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
  /* grid-area: paragraph; */
   /* ${({ section }) =>
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
      display: block;
      position: absolute;
      width: 50vw;
      right: 5vw;
      top: 0vh;
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.l};
      }
      @media ${device.laptop} {
        left: 20vw;
      }
    `} */
`