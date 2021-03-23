import styled from "styled-components"
import { device } from "../../utils/device"
import { theme } from "../../utils/theme"

export const StyledMenu = styled.nav`
  /* display: ${props => (props.isVisible ? "flex" : "none")}; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* align-content: flex-start; */
  position: absolute;
  /* background-color: ${props=>props.homePage ? "transparent" : theme.colors.primary}; */
  background-color: transparent;
  width: 100vw;
  /* height: ${props=>props.homePage ? "50vh" : "100vh"}; */
  height: 50vh;
  margin: 5vh 0;
  z-index: 3;
  top: 0;
  right: -100vw;
  /* transform: ${props => (props.isVisible ? "translateX(0)" : "translateX(100vw)")}; */
  opacity: 1;
  /* box-shadow: ${theme.shadows.postShadow}; */
  /* transition: 0.7s; */

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