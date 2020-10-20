import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledSubheader = styled.h3`
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  font-size: ${props => props.theme.fontSize.m};
  font-family: ${props => props.theme.fontFamily.main};
  margin: 3vh 0;
  text-align: center;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.l};
  }
`
