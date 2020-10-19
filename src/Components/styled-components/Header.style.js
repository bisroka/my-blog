import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledHeader = styled.h2`
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  margin-top: 5vh;
  text-align: center;
  font-family: ${props => props.theme.fontFamily.main};;
  font-size: ${props => props.theme.fontSize.l};
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.xl};
  }
`