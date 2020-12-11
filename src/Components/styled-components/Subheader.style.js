import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledSubheader = styled.h3`
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  font-size: ${props => props.theme.fontSize.l};
  font-family: ${props => props.theme.fontFamily.main};
  margin: 3vh 0;
  text-align: center;
  z-index:1;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.l};
    max-width: ${props => props.helloSection ? "30vw" : "45vw"};
  }
  @media ${device.laptop} {
    font-size: ${props => props.helloSection ? props.theme.fontSize.xl : props.theme.fontSize.l};
   
  }
`