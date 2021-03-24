import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledHeader = styled.h2`
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  text-align: center;
  font-family: ${props => props.theme.fontFamily.header};
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  grid-area: header;
  z-index: 2;
    ${({helloSection})=>
      helloSection && css`
      margin: 3vh 0;
      text-align: left;
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.xxl}; 
      }
      @media ${device.laptop} {
        font-size: ${props => props.theme.fontSize.xxxl}; 
      }
    `}
    ${({contactSection})=>
      contactSection && css`
     transform: rotate(90deg);
     align-self: center;
     justify-self: center;
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.xxl};  
      }
      @media ${device.laptop} {
         font-size: ${props => props.theme.fontSize.xxxl};  
      }
    `}
    ${({articlePage})=>
      articlePage && css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      @media ${device.tablet} {
        font-size: ${props => props.theme.fontSize.xxl};  
      }
      @media ${device.laptop} {
         font-size: ${props => props.theme.fontSize.xxxl};  
      }
    `}
`