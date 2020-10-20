import React, { Component } from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import Menu from "../Components/Menu"
import Hamburger from "../Components/Hamburger"


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
    height: 5vh;
    width: 100vw;
  }
`

class Navigation extends Component {
  state = { isMenuOpen: false }
  hamburgerButtonHandler = () => {
    const isMenuOpen = !this.state.isMenuOpen
    this.setState({
      isMenuOpen,
    })
  }

  render() {
    return (
      <>
        <NavBar>
          <Hamburger click={this.hamburgerButtonHandler} />
          <Menu
            buttons={this.props.buttons}
            isVisible={this.state.isMenuOpen}
          />
        </NavBar>
      </>
    )
  }
}

export default Navigation
