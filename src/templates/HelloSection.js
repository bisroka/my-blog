import React from "react"
import styled from "styled-components"

import Hello from "../Components/Hello"
import HelloImg from "../Components/HelloImg"

const HelloContainer = styled.div`
  position: relative;
  height: 95vh;
`

const HelloSection = () => {
  return (
    <HelloContainer>
      <Hello />
      <HelloImg />
    </HelloContainer>
  )
}

export default HelloSection
