import React, { useContext } from "react"
import Menu from "../Components/Menu"
import Hamburger from "../Components/Hamburger"
import { StyledNavBar } from '../Components/styled-components/index.styledComponents';
import { StoreContext } from "../store/StoreProvider"
import { mobileMenuAnimation } from "../animations/menuAnimation/mobileMenuAnimation"

const Navigation = ({ navButtons, homePage }) => {
const { isMenuOpen, setIsMenuOpen } = useContext(StoreContext)

 const hamburgerButtonHandler = () => {
  setIsMenuOpen(!isMenuOpen)
  mobileMenuAnimation(!isMenuOpen, homePage)
  }

  return ( 
      <>
        <StyledNavBar>
          <Hamburger isVisible={isMenuOpen} click={hamburgerButtonHandler} />
          <Menu
            homePage={homePage}
            navButtons={navButtons}
            isVisible={isMenuOpen}
          />
        </StyledNavBar>
      </>
   );
}
export default Navigation;