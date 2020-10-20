import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${props => props.theme.colors.primary};;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0;
  transition: 0.2s;
  right: ${props => (props.isVisible ? "0" : "-100vw")};
  opacity: ${props => (props.isVisible ? "1" : "0")};
  @media ${device.laptop} {
    right: 0;
    opacity: 1;
    height: 10vh;
    flex-direction: row;
    justify-content: flex-end;
  }
`