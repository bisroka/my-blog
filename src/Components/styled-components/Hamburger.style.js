import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 7vh;
  height: 7vh;
  top: 5vw;
  right: 5vw;
  align-items: center;
  position: absolute;
  border-radius: 25%;
  z-index: 3;
  padding: 1px;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }

  div {
    width: 6vh;
    height: 1vh;
    position: relative;
    background: ${props => props.theme.colors.black};
    transition: transform 0.5s ease;
    ::before,
    ::after {
      width: 6vh;
      height: 1vh;
      position: absolute;
      content: "";
      display: block;
      background: ${props => props.theme.colors.black};
      transition: transform 0.5s ease;
    }
    ::before {
      left: 0px;
      top: -1.5vh;
    }
    ::after {
      left: 0px;
      top: 1.5vh;
    }
  }
`