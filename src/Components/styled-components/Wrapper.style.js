import styled, { css } from "styled-components"
import {device} from "../../utils/device"
export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  max-width: 1140px;
  display: flex;
  flex-direction: ${({row})=> row ? "row" : "column"};  
  align-items: ${({blogSection})=> blogSection ? "stretch" : "center"};  
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    width: 70vw;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: ${({column})=> column ? "column" : "row"};  
  }
  ${({helloSection})=>
    helloSection && css`
    padding: 5vh 2vh 0;
    align-items: flex-start;
    width: 100%;
    height: auto;
    @media ${device.laptop} {
      width: 100%;
  }
  `}
  ${({contactSection})=>
  contactSection && css`
    position: relative;
    width: 100%;
    min-height: 30vh;
  `}
`