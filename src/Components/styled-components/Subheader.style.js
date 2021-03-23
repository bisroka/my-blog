import styled, { css } from "styled-components"
import { device } from "../../utils/device"

export const StyledSubheader = styled.h3`
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  font-size: ${props => props.theme.fontSize.l};
  font-family: ${props => props.theme.fontFamily.subheader};
  font-weight: 400;
  text-align: center;
  z-index:1;
  grid-area: subheader;
  text-align: left;
  /* font-weight: 700; */
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.l};
    /* max-width: 55vw; */
  }

  ${({helloSection})=>
    helloSection && css `
    margin: 3vh 0;
    /* transform: ${props => (props.isMenuOpen ? "translateX(-100vw)" : "translateX(0)")}; */
    /* transition: 0.7s; */
    /* position: absolute; */
    @media ${device.laptop} {
    font-size: ${props => props.theme.fontSize.xl};
  }
  `}
  ${({aboutMeSection})=>
    aboutMeSection && css `
    font-size: ${props => props.theme.fontSize.m};
    line-height: 24px;
    @media ${device.laptop} {
    font-size: ${props => props.theme.fontSize.l};
    line-height: 30px;
  }
  
  `}
  ${({freeTimeSection})=>
    freeTimeSection && css `
    text-align: center;
  }
  `}
  ${({blogSection})=>
    blogSection && css `
    min-height: 90px;
    margin: 1vh 0;
    text-align: center;
  `}
  ${({contactSection})=>
    contactSection && css `
    font-size: ${props => props.theme.fontSize.m};
    min-height: 90px;
    margin: 5vh 0;
    text-align: center;
    @media ${device.laptop}{
      margin: 10vh 0;
      font-size: ${props => props.theme.fontSize.xl};
    }
  `}
`