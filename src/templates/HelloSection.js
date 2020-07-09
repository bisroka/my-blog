import React from "react"
import styled from "styled-components"

import Hello from "../Components/Hello"
import HelloImg from "../Components/HelloImg"

const HelloContainer = styled.div`
  position: relative;
  height: 95vh;
  background: transparent
    linear-gradient(180deg, #ffffff 0%, #eeeeee 50%, #4258b8 100%) 0% 0%
    no-repeat padding-box;
`

const HelloSection = ({ header, img1, img2 }) => {
  return (
    <HelloContainer>
      <Hello header={header} img={img2} />
      <HelloImg img={img1} />
    </HelloContainer>
  )
}

export default HelloSection
