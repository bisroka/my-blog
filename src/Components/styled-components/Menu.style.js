import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  width: 100vw;
  height: 50vh;
  margin: 5vh 0;
  z-index: 3;
  top: 0;
  right: -100vw;
  opacity: 1;

  @media ${device.laptop} {
    margin: 0;
    display: flex;
    right: 0;
    opacity: 1;
    height: 10vh;
    flex-direction: row;
    justify-content: flex-end;
  }
`