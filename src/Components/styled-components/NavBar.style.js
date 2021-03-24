import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledNavBar = styled.header`
display: block;
background-color: ${props => props.theme.colors.primary};
position: relative;
width: 100%;
height: 12vh;
top: 0;
left: 0;
margin: 0 auto;
@media ${device.laptop} {
  max-width: 100vw;
  height: 10vh;
  width: 100vw;
}
`