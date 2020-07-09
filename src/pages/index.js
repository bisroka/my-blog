import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"

import Navigation from "../templates/Navigation"
import HelloSection from "../templates/HelloSection"
import AboutMeSection from "../templates/AboutMeSection"
import MyFreeTime from "../templates/MyFreeTime"
import Blog from "../templates/Blog"
import Contact from "../templates/Contact"
import Footer from "../templates/Footer"

const GlobalStyle = createGlobalStyle`
    body, h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        font-family: "Charter";
        font-weight: 100;
        font-style: italic;
        color: #6b6b6b;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
`

class IndexPage extends Component {
  state = {}
  render() {
    return (
      <>
        <GlobalStyle />
        <Navigation />
        <HelloSection />
        <AboutMeSection />
        <MyFreeTime />
        <Blog />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default IndexPage
