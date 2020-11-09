import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const HelloSectionContainer = styled.section`
  position: relative;
  height: 95vh;
  background: transparent
    linear-gradient(180deg, #ffffff 0%, #eeeeee 50%, #4258b8 100%) 0% 0%
    no-repeat padding-box;
`
const HelloContainer = styled.div`
  padding: 5vh 2vh 0;
  width: 70%;
  display: flex;
  flex-direction: row;
`
const TriangleImg = styled.img`
  display: block;
  width: 3vh;
  height: 3vh;
  margin-top: 3vh;
`

const HeaderStyled = styled.h2`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 5vh;
  @media ${device.tablet} {
    font-size: 7vh;
  }
  @media ${device.laptop} {
    font-size: 9vh;
    max-width: 40vw;
  }
`
const HiImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40vh;
  height: 40vh;
  @media ${device.tablet} {
    width: 50vh;
    height: 50vh;
  }
  @media ${device.laptop} {
    width: 75vh;
    height: 75vh;
  }
`
const WrapperStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const HelloSection = ({ header, images }) => {
  return (
    <HelloSectionContainer>
      <WrapperStyled>
        <HelloContainer>
          <TriangleImg src={images.triangle}></TriangleImg>
          <HeaderStyled>{header}</HeaderStyled>
        </HelloContainer>
        <HiImg src={images.hi2}></HiImg>
      </WrapperStyled>
    </HelloSectionContainer>
  )
}

export default HelloSection