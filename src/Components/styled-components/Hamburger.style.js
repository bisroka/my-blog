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
  z-index: 5;
  padding: 1px;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }

  div {
    width: 6vh;
    height: 5px;
    position: relative;
    background: ${props => props.theme.colors.gray};
    transform: ${props => props.isVisible ? "rotate(45deg)": "rotate(0)"};
    transition: transform 0.5s ease;
    ::before,
    ::after {
      width: 6vh;
      height: 5px;
      position: absolute;
      content: "";
      display: block;
      background: ${props => props.theme.colors.gray};
      transition: transform 0.5s ease;
    }
    ::before {
      left: 0px;
      top: -10px;
      transform: ${props => props.isVisible ? "translateY(10px) rotate(90deg)": "translateY(0) rotate(0)"};
    }
    ::after {
      left: 0px;
      top: 10px;
      transform: ${props => props.isVisible ? "translateY(-10px) ": "translateY(0)"};
    }
  }
`