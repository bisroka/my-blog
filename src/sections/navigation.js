import React, { useContext } from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import Menu from "../Components/Menu"
import Hamburger from "../Components/Hamburger"
import { StoreContext } from "../store/StoreProvider"
import { mobileMenuAnimation } from "../animations/menuAnimation/mobileMenuAnimation"


const NavBar = styled.header`
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

const Navigation = ({ buttons, homePage }) => {
const { isMenuOpen, setIsMenuOpen } = useContext(StoreContext)

 const hamburgerButtonHandler = () => {
  //  const isOpen = isMenuOpen
  setIsMenuOpen(!isMenuOpen)
  mobileMenuAnimation(!isMenuOpen, homePage)
  }

  return ( 
      <>
        <NavBar>
          <Hamburger isVisible={isMenuOpen} click={hamburgerButtonHandler} />
          <Menu
            homePage={homePage}
            buttons={buttons}
            isVisible={isMenuOpen}
          />
        </NavBar>
      </>
   );
}
export default Navigation;